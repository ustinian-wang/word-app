import { openDB } from 'idb';
import { updateBinarySM2, getDefaultSM2 } from './sm2';

// SM-2 算法参数
const SM2_PARAMS = {
    MIN_EF: 1.3,
    MAX_EF: 2.5,
    INITIAL_EF: 2.5,
    INITIAL_INTERVAL: 1,
    SECOND_INTERVAL: 6
};

const DATA_FIELD = {
    WORD: 'word',
    EF: 'EF',
    INTERVAL: 'interval',
    REPETITIONS: 'repetitions',
    NEXT_REVIEW: 'next_review'
};

class WordReviewDB {
    constructor() {
        this.dbName = 'wordReviewDB';
        this.storeName = 'words';
        this.db = null;
    }

    // 初始化数据库
    async init() {
        this.db = await openDB(this.dbName, 1, {
            upgrade(db) {
                if (!db.objectStoreNames.contains('words')) {
                    const store = db.createObjectStore('words', { keyPath: DATA_FIELD.WORD });
                    store.createIndex(DATA_FIELD.NEXT_REVIEW, DATA_FIELD.NEXT_REVIEW, {
                        unique: false
                    });
                }
            }
        });
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

        return this.putWord(wordData);
    }

    // 更新单词数据
    async putWord(wordData) {
        return this.db.put(this.storeName, wordData);
    }

    // 获取需要复习的单词
    async getWordsToReview() {
        const tx = this.db.transaction(this.storeName, 'readonly');
        const index = tx.store.index(DATA_FIELD.NEXT_REVIEW);
        return index.getAll(IDBKeyRange.upperBound(Date.now()));
    }

    // 处理复习结果
    async processReview(word, quality) {
        let wordData = await this.getWord(word) || getDefaultSM2();

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

    // 获取单个单词数据
    async getWord(word) {
        return this.db.get(this.storeName, word);
    }

    // 获取所有单词
    async getAllWords() {
        return this.db.getAll(this.storeName);
    }

    // 删除单词
    async deleteWord(word) {
        return this.db.delete(this.storeName, word);
    }
}

// 导出实例
export const wordReviewDB = new WordReviewDB();

wordReviewDB.init();

export async function passReview(word) {
    return await wordReviewDB.processReview(word, 1);
}

export async function failReview(word) {
    return await wordReviewDB.processReview(word, 0);
}
