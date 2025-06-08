import { cloneRequest } from '@ustinian-wang/kit/dist/index.js';

let request = cloneRequest();
const API_BASE =
  typeof __LOCAL_IP__ !== 'undefined'
    ? `http://${__LOCAL_IP__}:${typeof __API_PORT__ !== 'undefined' ? __API_PORT__ : 3001}/`
    : 'http://localhost:3001/';
request.defaults.baseURL = API_BASE;

/**
 * @description 识别图片
 * @param {Object} data
 *  @param {String} data.ImageBase64 图片base64 
 *  @param {String} data.ImageUrl 图片url
 * @returns {Promise}
 */
export const recognizeApi = (data) => {
    return request.post('/api/recognize', data);
};
