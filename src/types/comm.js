/**
 * @description 通用返回结果
 * @typedef {Object} Result
 * @property {boolean} [success='true'] 成功与否的标志
 * @property {string} [msg=''] 返回消息
 * @property {number} [rt=0] 返回错误码
 */

/**
 * @description 获取成功结果
 * @function getOkRst
 * @returns {Result}
 */
export function getOkRst(msg = '') {
    return { success: true, msg, rt: 0 };
}

/**
 * @description 获取错误结果
 * @function getErrRst
 * @param {string} [msg='']
 * @returns {Result}
 */
export function getErrRst(msg = '') {
    return { success: false, msg, rt: 0 };
}