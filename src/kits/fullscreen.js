/**
 * 全屏相关操作的工具函数
 */

/**
 * 进入全屏
 * @param {HTMLElement} element - 需要全屏显示的元素，默认为 document.documentElement
 * @returns {Promise} 返回一个 Promise，表示全屏操作的结果
 */
export function enterFullscreen(element = document.documentElement) {
    if (element.requestFullscreen) {
        return element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        // Safari
        return element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        // IE11
        return element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
        // Firefox
        return element.mozRequestFullScreen();
    }
    return Promise.reject(new Error('Fullscreen API is not supported'));
}

/**
 * 退出全屏
 * @returns {Promise} 返回一个 Promise，表示退出全屏操作的结果
 */
export function exitFullscreen() {
    if (document.exitFullscreen) {
        return document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        // Safari
        return document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        // IE11
        return document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        // Firefox
        return document.mozCancelFullScreen();
    }
    return Promise.reject(new Error('Fullscreen API is not supported'));
}

/**
 * 切换全屏状态
 * @param {HTMLElement} element - 需要全屏显示的元素，默认为 document.documentElement
 * @returns {Promise} 返回一个 Promise，表示全屏切换操作的结果
 */
export function toggleFullscreen(element = document.documentElement) {
    if (isFullscreen()) {
        return exitFullscreen();
    } else {
        return enterFullscreen(element);
    }
}

/**
 * 检查当前是否处于全屏状态
 * @returns {boolean} 返回当前是否处于全屏状态
 */
export function isFullscreen() {
    return !!(
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
    );
}

/**
 * 获取当前全屏元素
 * @returns {Element|null} 返回当前全屏的元素，如果没有全屏则返回 null
 */
export function getFullscreenElement() {
    return (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement ||
        null
    );
}
