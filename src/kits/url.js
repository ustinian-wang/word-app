/**
 * 检查URL是否返回404状态
 * @param {string} url - 要检查的URL
 * @returns {Promise<boolean>} - 如果URL返回404则返回true，否则返回false
 */
export async function isUrl404(url) {
    try {
        const response = await fetch(url, {
            method: 'HEAD', // 只获取响应头，不下载内容
            // mode: 'no-cors', // 允许跨域请求
        });
        console.log('jser url 404', response.status, url);
        // 如果响应状态是404，返回true
        return response.status === 404;
    } catch (error) {
        // 如果请求失败，返回false
        console.error('检查URL状态时发生错误:', error);
        return false;
    }
}
