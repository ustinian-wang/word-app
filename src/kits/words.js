// import * as XLSX from 'xlsx';
import { builtinWordBooks } from '@/wordbooks/builtin';
import { cloneRequest } from '@ustinian-wang/kit';
import { isUrl404 } from './url';

const WORD_BOOKS_KEY = 'myWordBooks';
const CURRENT_BOOK_IDX_KEY = 'currentWordBookIdx';
const INIT_FLAG_KEY = 'wordBooksInited';
const PROGRESS_KEY = 'wordBooksProgress';

export function getWordBooks() {
    return JSON.parse(localStorage.getItem(WORD_BOOKS_KEY) || '[]');
}
export function saveWordBooks(books) {
    localStorage.setItem(WORD_BOOKS_KEY, JSON.stringify(books));
}
export function getCurrentBookIndex() {
    return Number(localStorage.getItem(CURRENT_BOOK_IDX_KEY) || 0);
}
export function setCurrentBookIndex(idx) {
    localStorage.setItem(CURRENT_BOOK_IDX_KEY, idx);
}
export function getCurrentWords() {
    const books = getWordBooks();
    const idx = getCurrentBookIndex();
    return books[idx]?.words || [];
}

export function initDefaultWordBooks() {
    if (localStorage.getItem(INIT_FLAG_KEY)) return;
    localStorage.setItem(WORD_BOOKS_KEY, JSON.stringify(builtinWordBooks));
    localStorage.setItem(INIT_FLAG_KEY, '1');
}
/**
 * @description 获取词库学习进度
 * @param {number} bookId
 * @returns {{group: number, learned: number[], percent: number}}
 */
export function getBookProgress(bookId) {
    const all = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
    return all[bookId] || { group: 0, learned: [], percent: 0 };
}
/**
 * @description 设置词库学习进度
 * @param {number} bookId
 * @param {{group: number, learned: number[], percent: number}} progress
 */
export function setBookProgress(bookId, progress) {
    const all = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
    all[bookId] = progress;
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
}

/**
 * @description 获取单词的音频url
 * @param {string} word
 * @returns
 */
export function getWordAudioUrl(word) {
    return `https://api.dictionaryapi.dev/media/pronunciations/en/${word}-us.mp3`;
}
let word_cache = {};
/**
 * @description
 * @param {*} word
 * @returns
 */
export async function getAvailableAudioUrl(word) {
    if (word_cache[word]) {
        return word_cache[word];
    }
    let count = 0;
    while (count < 3) {
        let part = count > 0 ? '-' + count : '';
        let url = getWordUrl(word, part);
        console.log(`jser [url]`, url);
        if (!(await isUrl404(url))) {
            word_cache[word] = url;
            return url;
        }
        count++;
    }
    word_cache[word] = '';
    return '';
}
function getWordUrl(word, part = '') {
    return `https://api.dictionaryapi.dev/media/pronunciations/en/${word}${part}-us.mp3`;
}

export function splitTaggedText(text) {
    const regex = /([a-z]*\.\s[^a-z]*)/gi;
    const matches = text.match(regex);
    return matches ? matches.map(item => item.trim()) : [];
}

// export function getWordInfoApi(word) {
//     return cloneRequest().get(
//         // `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
//     );
// }

/**
 * @typedef {Object} WordInfoResponse
 * @property {number} code - 响应状态码
 * @property {string} msg - 响应消息
 * @property {WordInfoData} data - 单词详细信息
 * @property {string} request_id - 请求ID
 */

/**
 * @typedef {Object} WordInfoData
 * @property {string} bookId - 词书ID
 * @property {Phrase[]} phrases - 相关短语列表
 * @property {RelatedWord[]} relWords - 相关词列表
 * @property {Sentence[]} sentences - 例句列表
 * @property {Synonym[]} synonyms - 同义词列表
 * @property {Translation[]} translations - 翻译列表
 * @property {string} ukphone - 英式音标
 * @property {string} ukspeech - 英式发音URL
 * @property {string} usphone - 美式音标
 * @property {string} usspeech - 美式发音URL
 * @property {string} word - 单词
 */

/**
 * @typedef {Object} Phrase
 * @property {string} p_cn - 中文释义
 * @property {string} p_content - 英文内容
 */

/**
 * @typedef {Object} RelatedWord
 * @property {HeadWord[]} Hwds - 相关词列表
 * @property {string} Pos - 词性
 */

/**
 * @typedef {Object} HeadWord
 * @property {string} hwd - 相关词
 * @property {string} tran - 翻译
 */

/**
 * @typedef {Object} Sentence
 * @property {string} s_cn - 中文翻译
 * @property {string} s_content - 英文内容
 */

/**
 * @typedef {Object} Synonym
 * @property {SynonymWord[]} Hwds - 同义词列表
 * @property {string} pos - 词性
 * @property {string} tran - 翻译
 */

/**
 * @typedef {Object} SynonymWord
 * @property {string} word - 同义词
 */

/**
 * @typedef {Object} Translation
 * @property {string} pos - 词性
 * @property {string} tran_cn - 中文翻译
 */

/**
 * 获取随机单词信息
 * @returns {Promise<WordInfoResponse>} 返回单词详细信息
 */
export function getRandomWordInfoApi() {
    return cloneRequest().get(`https://v2.xxapi.cn/api/randomenglishwords`);
}

