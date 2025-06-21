/**
 * @file 封装与单词学习记录相关的 IndexedDB 操作
 * @typedef {import('@/types').WordRecord} WordRecord
 */
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

    /**
     * @param {WordRecord} record
     * @returns {Promise<number>}
     */
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

    /**
     * @param {WordRecord} record
     * @returns {Promise<number>}
     */
    async updateRecord(record) {
        const db = await this.initDB();
        return db.put(this.storeName, record);
    }

    // ...
} 