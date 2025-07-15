/**
 * @description 设置登录token
 * 同时设置进入cookie和localStorage，是为了方便测试所以双写
 * @param {string} token 登录token
 */
export function setLoginToken(token) {
    const expires = new Date();
    expires.setDate(expires.getDate() + 7); // 7天过期
    localStorage.setItem('token', token); // 本地存储
    document.cookie = `token=${token}; expires=${expires.toUTCString()}; path=/; ${process.env.NODE_ENV === 'production' ? 'secure; ' : ''}samesite=strict`; // cookie
}

/**
 * @description 获取登录token
 * @returns {string} 登录token
 */
export function getLoginToken() {
    return (
        localStorage.getItem('token') ||
        document.cookie
            ?.split('; ')
            ?.find(row => row.startsWith('token='))
            ?.split('=')?.[1] || null
    );
}