/**
 * @description 本文件用于定义项目中所有公共的JSDoc类型。
 * 这里不需要写任何实际的JS代码，只需要写JSDoc注释即可。
 * @namespace types
 */

/**
 * @typedef {object} WordRecord
 * @property {number} id - 记录的唯一ID (主键)
 * @property {string} word - 相关的单词
 * @property {number} timestamp - 事件发生时的时间戳
 * @property {0|1} status - 学习状态 (0: 失败, 1: 通过)
 * @property {0|1} type - 记录类型 (0: 学习, 1: 复习)
 * @property {number} uid - 用户ID (暂未使用)
 */

/**
 * @typedef {object} AppSettings
 * @property {string} theme - 主题 ('light' | 'dark')
 * @property {boolean} autoPlayAudio - 是否自动播放音频
 * @property {number} groupSize - 主单词字号
 */ 