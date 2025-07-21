import { request } from './request';

// addWordRecord
// listWordRecords
// getWordRecord
// updateWordRecord
// deleteWordRecord
// batchAddWordRecord

/**
 * 新增词汇记录（GET）
 * @param {Object} data - 词汇记录数据
 * @param {string} data.word 词汇内容
 * @param {number} [data.status] 状态（可选）
 * @param {number} [data.type] 类型（可选）
 * @param {number} [data.bid] 书本id
 * 
 * @returns {Promise<Object>} 响应结果
 */
export function addWordRecordApi(data) {
    return request.get('/api/wordRecord/addWordRecord', { params: data });
}

/**
 * 获取词汇记录列表（GET）
 * @param {Object} params - 查询参数
 * @param {number} [params.page] 页码（可选）
 * @param {number} [params.limit] 每页数量（可选）
 * @param {number} [params.status] 状态（可选）
 * @param {number} [params.type] 类型（可选）
 * @param {string} [params.startDate] 起始日期（可选）
 * @param {string} [params.endDate] 结束日期（可选）
 * @returns {Promise<{ records: Array<Object>, pagination: { page: number, limit: number, total: number, totalPages: number } }>} 响应结果
 */
export function listWordRecordsApi(params) {
    return request.get('/api/wordRecord/listWordRecords', { params });
}

/**
 * 获取单个词汇记录详情（GET）
 * @param {Object} params - 查询参数
 * @param {number} params.id 词汇记录ID
 * @returns {Promise<{ id: number, word: string, status: number, type: number, uid: number, timestamp: string }>} 响应结果
 */
export function getWordRecordApi(params) {
    return request.get('/api/wordRecord/getWordRecord', { params });
}

/**
 * 更新词汇记录（GET）
 * @param {Object} params - 更新参数
 * @param {number} params.id 词汇记录ID
 * @param {string} [params.word] 词汇内容（可选）
 * @param {number} [params.status] 状态（可选）
 * @param {number} [params.type] 类型（可选）
 * @returns {Promise<{ id: number, word: string, status: number, type: number, uid: number, timestamp: string }>} 响应结果
 */
export function updateWordRecordApi(params) {
    return request.get('/api/wordRecord/updateWordRecord', { params });
}

/**
 * 删除词汇记录（GET）
 * @param {Object} params - 删除参数
 * @param {number} params.id 词汇记录ID
 * @returns {Promise<Object>} 响应结果
 */
export function deleteWordRecordApi(params) {
    return request.get('/api/wordRecord/deleteWordRecord', { params });
}


/**
 * @description 获取学习结果按时间
 * @param {Object} params - 查询参数
 * @param {string} params.startDate - 起始日期
 * @param {string} params.endDate - 结束日期
 * @returns {Promise<{ data: {
 *   data: {
 *      dates: string[],
 *      learningPass: number[],
 *      learningFail: number[],
 *      reviewPass: number[],
 *      reviewFail: number[]
 *   }
 * }}>} 响应结果
 */
export function getLearnResByTimeApi(params) {
    return request.get('/api/wordRecord/getLearnResByTime', { params });
}

/**
 * @description 获取下一组学习词汇
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码
 * @param {number} params.limit - 每页数量
 * @param {number} params.bid - 书本id
 * @returns {Promise<{ data: {
 *   data: {
 *      words: {
 *        word: string,
 *        definition: string,
 *      },
 *      hasMore: boolean,
 *      currentPage: number,
 *      totalWords: number,
 *      startIndex: number,
 *      endIndex: number
 *   }
 * }}>} 响应结果
 */
export function getNextLearningWordsApi(params) {
    return request.get('/api/wordRecord/getNextLearningWords', { params });
}

/**
 * @description 获取今日复习词汇
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码
 * @param {number} params.limit - 每页数量
 * @returns {Promise<{ data: {
 *   data: {
 *      words: {
 *        word: string,
 *        definition: string,
 *      },
 *      hasMore: boolean,
 *      currentPage: number,
 *      totalWords: number,
 *      startIndex: number,
 *      endIndex: number
 *   }
 * }}>} 响应结果
 */
export function getTodayReviewWordsApi(params) {
    return request.get('/api/wordRecord/getTodayReviewWords', { params });
}
