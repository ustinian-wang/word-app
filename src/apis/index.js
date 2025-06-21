import { cloneRequest } from '@ustinian-wang/kit/dist/index.js';

let request = cloneRequest();
request.defaults.baseURL = VITE_API;
request.defaults.timeout = 60000;

/**
 * @description 识别图片
 * @param {Object} data
 *  @param {String} data.ImageBase64 图片base64
 *  @param {String} data.ImageUrl 图片url
 * @returns {Promise}
 */
export const recognizeApi = data => {
    return request.post('/api/recognize', data);
};

/**
 * @typedef {Object} License
 * @property {string} name - The name of the license
 * @property {string} url - The URL of the license
 */

/**
 * @typedef {Object} Phonetic
 * @property {string} text - The phonetic text representation
 * @property {string} audio - The URL to the audio pronunciation
 * @property {string} sourceUrl - The source URL of the pronunciation
 * @property {License} license - The license information
 */

/**
 * @typedef {Object} Definition
 * @property {string} definition - The definition of the word
 * @property {string[]} synonyms - Array of synonyms
 * @property {string[]} antonyms - Array of antonyms
 */

/**
 * @typedef {Object} Meaning
 * @property {string} partOfSpeech - The part of speech (e.g., noun, verb)
 * @property {Definition[]} definitions - Array of definitions
 * @property {string[]} synonyms - Array of synonyms
 * @property {string[]} antonyms - Array of antonyms
 */

/**
 * @typedef {Object} DictionaryResponse
 * @property {string} word - The word being defined
 * @property {string} phonetic - The phonetic representation
 * @property {Phonetic[]} phonetics - Array of phonetic information
 * @property {Meaning[]} meanings - Array of meanings and definitions
 * @property {License} license - The license information
 * @property {string[]} sourceUrls - Array of source URLs
 */

/**
 * Fetches dictionary information for a given word
 * @param {string} word - The word to look up
 * @returns {Promise<DictionaryResponse[]>} A promise that resolves to an array of dictionary entries
 */
export const getDictApi = word => {
    return request.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
};