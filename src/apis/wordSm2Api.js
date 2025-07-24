import { request } from './request';

/**
 * 批量新增数据（GET）
 * @param {Object} params - 参数对象
 * @param {Array<Object>} params.records 数据数组，每项为单条记录对象
 * @returns {Promise<{ count: number }>} 响应结果，包含新增数量
 */
export function batchAddDataWdSm2Api(params) {
    return request.get('/api/wordSm2/batchAddData', { params });
}

/**
 * 批量删除数据（GET）
 * @param {Object} params - 参数对象
 * @param {Array<number>} params.ids 要删除的id数组
 * @returns {Promise<{ count: number }>} 响应结果，包含删除数量
 */
export function batchDeleteDataWdSm2Api(params) {
    return request.get('/api/wordSm2/batchDeleteData', { params });
}

/**
 * 搜索数据（GET）
 * @param {Object} params - 查询参数
 * @param {string} [params.word] 词汇内容，支持模糊查询（可选）
 * @param {number} [params.page] 页码（可选）
 * @param {number} [params.limit] 每页数量（可选）
 * @returns {Promise<{ records: Array<Object>, pagination: { page: number, limit: number, total: number, totalPages: number } }>} 响应结果
 */
export function searchDataWdSm2Api(params) {
    return request.get('/api/wordSm2/searchData', { params });
}

/**
 * 导出全部数据为json（GET）
 * @returns {Promise<Array<Object>>} 响应结果，全部数据数组
 */
export function exportDataWdSm2Api() {
    return request.get('/api/wordSm2/exportData');
}

/**
 * 批量导入json数组（GET）
 * @param {Object} params - 参数对象
 * @param {Array<Object>} params.records 要导入的数据数组
 * @returns {Promise<{ count: number }>} 响应结果，包含导入数量
 */
export function importDataWdSm2Api(params) {
    return request.get('/api/wordSm2/importData', { params });
}

/**
 * 单条插入（GET）
 * @param {Object} params - 单条数据参数
 * @param {string} params.word 单词内容
 * @param {number} params.EF 遗忘因子
 * @param {number} params.interval 间隔天数
 * @param {number} params.repetitions 复习次数
 * @param {number} params.next_review 下次复习时间戳
 * @returns {Promise<Object>} 响应结果，插入后的数据
 */
export function singleAddDataWdSm2Api(params) {
    return request.get('/api/wordSm2/singleAddData', { params });
}

/**
 * 单条更新（GET）
 * @param {Object} params - 单条数据参数
 * @param {number} params.id 记录ID
 * @param {string} [params.word] 单词内容（可选）
 * @param {number} [params.EF] 遗忘因子（可选）
 * @param {number} [params.interval] 间隔天数（可选）
 * @param {number} [params.repetitions] 复习次数（可选）
 * @param {number} [params.next_review] 下次复习时间戳（可选）
 * @returns {Promise<Object>} 响应结果，更新后的数据
 */
export function singleUpdateDataWdSm2Api(params) {
    return request.get('/api/wordSm2/singleUpdateData', { params });
}

/**
 * upsert操作：单词存在则更新，否则插入（GET）
 * @param {Object} params - 单条数据参数
 * @param {string} params.word 单词内容
 * @param {string} params.pass 是否学习通过?
 * @param {number} params.bid 书本id
 * @returns {Promise<Object>} 响应结果，upsert后的数据
 */
export function upsertDataWdSm2Api(params) {
    return request.get('/api/wordSm2/upsertData', { params });
}
