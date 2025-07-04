import { openDB } from 'idb';
import { updateBinarySM2, getDefaultSM2 } from '../sm2';
import { addFailWordRecord, addPassWordRecord } from './WordRecordDB';
import { WORD_RECORD_STATUS, WORD_RECORD_TYPE } from './idbWordRecord';
import { addWordRecordApi } from '@/apis/wordRecordApi';
import { upsertDataWdSm2Api } from '@/apis/wordSm2Api';

// SM-2 算法参数
const SM2_PARAMS = {
    MIN_EF: 1.3,
    MAX_EF: 2.5,
    INITIAL_EF: 2.5,
    INITIAL_INTERVAL: 1,
    SECOND_INTERVAL: 6
};

const DATA_FIELD = {
    WORD: 'word', //string
    EF: 'EF', //number
    INTERVAL: 'interval', //number
    REPETITIONS: 'repetitions', //number
    NEXT_REVIEW: 'next_review' //number
};

class WordReviewDB {
    constructor() {
        this.dbName = 'wordReviewDB';
        this.storeName = 'words';
        this.db = null;
        this.version = 3;
    }

    // 初始化数据库
    async init() {
        if (this.db) {
            return this.db;
        }
        this.db = await openDB(this.dbName, this.version, {
            upgrade(db) {
                if (!db.objectStoreNames.contains('words')) {
                    const store = db.createObjectStore('words', { keyPath: DATA_FIELD.WORD });
                    store.createIndex(DATA_FIELD.NEXT_REVIEW, DATA_FIELD.NEXT_REVIEW, {
                        unique: false
                    });
                }
            }
        });
        return this.db;
    }

    // 添加新单词
    async addWord(word) {
        const wordData = {
            [DATA_FIELD.WORD]: word,
            [DATA_FIELD.EF]: SM2_PARAMS.INITIAL_EF,
            [DATA_FIELD.INTERVAL]: 0,
            [DATA_FIELD.REPETITIONS]: 0,
            [DATA_FIELD.NEXT_REVIEW]: Date.now()
        };
        await this.init();
        return this.putWord(wordData);
    }

    // 更新单词数据
    async putWord(wordData) {
        await this.init();  
        return this.db.put(this.storeName, wordData);
    }

    async getTodayWords() {
        await this.init();
        return this.getWordsToReview(new Date());
    }

    // 获取指定日期需要复习的单词（next_review在该天0点~23:59:59之间）
    async getWordsToReview(date = null) {
        await this.init();
        const tx = this.db.transaction(this.storeName, 'readonly');
        const index = tx.store.index(DATA_FIELD.NEXT_REVIEW);
        if (!date) {
            // 没有传参，返回空数组
            return [];
        } else {
            // 计算当天0点和23:59:59的时间戳
            const d = date;
            d.setHours(0, 0, 0, 0);
            const start = d.getTime();
            d.setHours(23, 59, 59, 999);
            const end = d.getTime();
            return index.getAll(window.IDBKeyRange.bound(start, end));
        }
    }

    // 处理复习结果
    async processReview(word, quality) {
        await this.init();
        let wordData = (await this.getWord(word)) || getDefaultSM2();

        // SM-2 算法实现
        const {
            [DATA_FIELD.EF]: EF,
            [DATA_FIELD.INTERVAL]: interval,
            [DATA_FIELD.REPETITIONS]: repetitions
        } = wordData;

        let {
            EF: new_EF,
            interval: new_interval,
            repetitions: new_repetitions
        } = updateBinarySM2(
            {
                EF,
                interval,
                repetitions
            },
            !!quality
        );
        // 更新单词数据
        const updatedWordData = {
            ...wordData,
            [DATA_FIELD.EF]: new_EF,
            [DATA_FIELD.INTERVAL]: new_interval,
            [DATA_FIELD.REPETITIONS]: new_repetitions,
            [DATA_FIELD.NEXT_REVIEW]: Date.now() + interval * 24 * 60 * 60 * 1000, // 转换为毫秒
            [DATA_FIELD.WORD]: word
        };
        console.log('updatedWordData', updatedWordData);
        await this.putWord(updatedWordData);
        return updatedWordData;
    }

    async importWord(wordData) {
        await this.init();
        let oldWord = await this.getWord(wordData[DATA_FIELD.WORD]);
        if (oldWord) {
            return await this.putWord(wordData);
        } else {
            return await this.addWord(wordData[DATA_FIELD.WORD]);
        }
    }

    /**
     * @description 获取单个单词数据
     * @param {string} word 单词
     * @returns {Promise<Object>} 单词数据
     */
    async getWord(word) {
        await this.init();
        return this.db.get(this.storeName, word);
    }

    async getWords(words) {
        await this.init();
        return await Promise.all(words.map(word => this.getWord(word)));
    }

    // 获取所有单词
    async getAllWords() {
        await this.init();
        return this.db.getAll(this.storeName);
    }

    // 删除单词
    async deleteWord(word) {
        await this.init();
        return this.db.delete(this.storeName, word);
    }
}

// 导出实例
export const wordReviewDB = new WordReviewDB();

wordReviewDB.init();

export async function passReview(word) {
    addWordRecordApi({
        word,
        status: WORD_RECORD_STATUS.PASS,
        type: WORD_RECORD_TYPE.LEARNING
    });
    addPassWordRecord(word);
    upsertDataWdSm2Api({
        word,
        pass: 0
    });
    return await wordReviewDB.processReview(word, 1);
}

export async function failReview(word) {
    addWordRecordApi({
        word,
        status: WORD_RECORD_STATUS.FAIL,
        type: WORD_RECORD_TYPE.LEARNING
    });
    addFailWordRecord(word);
    upsertDataWdSm2Api({
        word,
        pass: 0
    });
    return await wordReviewDB.processReview(word, 0);
}
