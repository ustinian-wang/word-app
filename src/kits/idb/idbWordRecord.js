import { openDB } from 'idb';

export const WORD_RECORD_STATUS = {
    FAIL: 0,
    PASS: 1
};

export const WORD_RECORD_FIELD = {
    WORD: 'word',
    TIMESTAMP: 'timestamp',
    STATUS: 'status',
    UID: 'uid'
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
    addNewRecord(word, status, uid = 0) {
        const record = {
            [WORD_RECORD_FIELD.WORD]: word,
            [WORD_RECORD_FIELD.TIMESTAMP]: Date.now(),
            [WORD_RECORD_FIELD.STATUS]: status,
            [WORD_RECORD_FIELD.UID]: uid
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
}

// 创建单例实例
const wordRecordService = new WordRecordService();

// // 使用示例
// async function addWordRecord(word, status, uid) {
//     try {
//         await wordRecordService.addRecord({
//             word,
//             timestamp: Date.now(),
//             status,
//             uid
//         });
//         console.log('记录添加成功');
//     } catch (error) {
//         console.error('添加记录失败:', error);
//     }
// }

// 导出服务实例
export { wordRecordService };

// // 使用示例
// const wordRecordService = new WordRecordService();

// // 添加记录
// async function addWordRecord(word, status, uid) {
//     try {
//         await wordRecordService.addRecord({
//             word,
//             timestamp: Date.now(),
//             status,
//             uid
//         });
//         console.log('记录添加成功');
//     } catch (error) {
//         console.error('添加记录失败:', error);
//     }
// }

// // 获取用户记录
// async function getUserRecords(uid) {
//     try {
//         const records = await wordRecordService.getRecordsByUid(uid);
//         console.log('用户记录:', records);
//         return records;
//     } catch (error) {
//         console.error('获取记录失败:', error);
//         return [];
//     }
// }

// // 导出服务实例
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
