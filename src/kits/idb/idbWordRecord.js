import { openDB } from 'idb';
/**
 * @description 单词记录状态
 */
export const WORD_RECORD_STATUS = {
    FAIL: 0, // 打岔
    PASS: 1 // 打勾
};

/**
 * @description 单词记录类型
 */
export const WORD_RECORD_TYPE = {
    LEARNING: 0, // 学习
    REVIEW: 1 // 复习
};

export const WORD_RECORD_FIELD = {
    WORD: 'word',
    TIMESTAMP: 'timestamp',
    STATUS: 'status',
    UID: 'uid',
    TYPE: 'type'
};

class WordRecordService {
    constructor() {
        this.dbName = 'wordAppRecordDB';
        this.storeName = 'wordRecords';
        this.version = 1;
    }

    // 初始化数据库
    async initDB() {
        return openDB(this.dbName, this.version, {
            upgrade(db) {
                if (!db.objectStoreNames.contains('wordRecords')) {
                    const store = db.createObjectStore('wordRecords', {
                        keyPath: 'id',
                        autoIncrement: true
                    });
                    // 创建索引
                    store.createIndex('timestamp', 'timestamp', { unique: false });
                    store.createIndex('word', 'word', { unique: false });
                    // store.createIndex('status', 'status', { unique: false });
                    // store.createIndex('uid', 'uid', { unique: false });
                }
            }
        });
    }

    // 添加新记录
    addNewRecord(word, status, uid = 0, type = WORD_RECORD_TYPE.LEARNING) {
        const record = {
            [WORD_RECORD_FIELD.WORD]: word,
            [WORD_RECORD_FIELD.TIMESTAMP]: Date.now(),
            [WORD_RECORD_FIELD.STATUS]: status,
            [WORD_RECORD_FIELD.UID]: uid,
            [WORD_RECORD_FIELD.TYPE]: type
        };
        return this.addRecord(record);
    }

    // 添加记录
    async addRecord(record) {
        const db = await this.initDB();
        return db.add(this.storeName, record);
    }

    // 获取用户的所有记录
    async getRecordsByUid(uid) {
        const db = await this.initDB();
        const index = db.transaction(this.storeName).store.index('uid');
        return index.getAll(uid);
    }

    // 获取特定单词的记录
    async getRecordsByWord(word) {
        const db = await this.initDB();
        const index = db.transaction(this.storeName).store.index('word');
        return index.getAll(word);
    }

    // 获取时间范围内的记录
    async getRecordsByTimeRange(startTime, endTime) {
        const db = await this.initDB();
        const index = db.transaction(this.storeName).store.index('timestamp');
        return index.getAll(IDBKeyRange.bound(startTime, endTime));
    }

    // 删除记录
    async deleteRecord(id) {
        const db = await this.initDB();
        return db.delete(this.storeName, id);
    }

    // 清空所有记录
    async clearAllRecords() {
        const db = await this.initDB();
        return db.clear(this.storeName);
    }

    // 获取所有记录
    async getAllRecords() {
        const db = await this.initDB();
        return db.getAll(this.storeName);
    }

    // 更新记录
    async updateRecord(record) {
        const db = await this.initDB();
        return db.put(this.storeName, record);
    }

    // 生成测试数据
    async generateTestData() {
        // 清空现有数据
        await this.clearAllRecords();

        // 测试单词列表
        const testWords = [
            'apple', 'banana', 'orange', 'grape', 'watermelon',
            'computer', 'phone', 'laptop', 'tablet', 'keyboard',
            'book', 'pen', 'pencil', 'notebook', 'dictionary',
            'student', 'teacher', 'school', 'university', 'classroom',
            'house', 'building', 'apartment', 'room', 'kitchen'
        ];

        // 生成过去30天的数据
        const today = new Date();
        const records = [];

        for (let i = 0; i < 30; i++) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);

            // 每天生成5-15个单词的学习记录
            const wordCount = Math.floor(Math.random() * 11) + 5;
            const selectedWords = testWords.sort(() => Math.random() - 0.5).slice(0, wordCount);

            for (const word of selectedWords) {
                // 学习记录
                const learningStatus = Math.random() > 0.3 ? WORD_RECORD_STATUS.PASS : WORD_RECORD_STATUS.FAIL;
                const learningTimestamp = new Date(date);
                learningTimestamp.setHours(Math.floor(Math.random() * 12) + 8); // 8:00 - 20:00
                records.push({
                    [WORD_RECORD_FIELD.WORD]: word,
                    [WORD_RECORD_FIELD.TIMESTAMP]: learningTimestamp.getTime(),
                    [WORD_RECORD_FIELD.STATUS]: learningStatus,
                    [WORD_RECORD_FIELD.UID]: 0,
                    [WORD_RECORD_FIELD.TYPE]: WORD_RECORD_TYPE.LEARNING
                });

                // 如果学习通过，添加复习记录
                if (learningStatus === WORD_RECORD_STATUS.PASS) {
                    const reviewTimestamp = new Date(learningTimestamp);
                    reviewTimestamp.setHours(reviewTimestamp.getHours() + Math.floor(Math.random() * 4) + 1); // 1-4小时后
                    const reviewStatus = Math.random() > 0.2 ? WORD_RECORD_STATUS.PASS : WORD_RECORD_STATUS.FAIL;
                    records.push({
                        [WORD_RECORD_FIELD.WORD]: word,
                        [WORD_RECORD_FIELD.TIMESTAMP]: reviewTimestamp.getTime(),
                        [WORD_RECORD_FIELD.STATUS]: reviewStatus,
                        [WORD_RECORD_FIELD.UID]: 0,
                        [WORD_RECORD_FIELD.TYPE]: WORD_RECORD_TYPE.REVIEW
                    });
                }
            }
        }

        // 按时间排序
        records.sort((a, b) => a.timestamp - b.timestamp);

        // 批量添加记录
        const db = await this.initDB();
        const tx = db.transaction(this.storeName, 'readwrite');
        const store = tx.objectStore(this.storeName);

        for (const record of records) {
            await store.add(record);
        }

        await tx.done;
        console.log('测试数据生成完成，共生成', records.length, '条记录');
    }
}

// 创建单例实例
const wordRecordService = new WordRecordService();

/**
 * @description 添加打勾记录
 * @param {string} word 单词
 * @returns {Promise<IDBRequest>}
 */
export function addPassWordRecord(word) {
    console.log('addPassWordRecord', word);
    return wordRecordService.addNewRecord(word, WORD_RECORD_STATUS.PASS);
}

/**
 * @description 添加打岔记录
 * @param {string} word 单词
 * @returns {Promise<IDBRequest>}
 */
export function addFailWordRecord(word) {
    console.log('addFailWordRecord', word);
    return wordRecordService.addNewRecord(word, WORD_RECORD_STATUS.FAIL);
}

// 导出服务实例
export { wordRecordService };
