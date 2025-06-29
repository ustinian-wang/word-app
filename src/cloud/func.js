import { getApp, getAuth } from './setup';

/**
 * @description 注册函数（需云函数支持）
 * @param {Object} data 数据
 * @param {string} data.username 用户名
 * @param {string} data.password 密码
 * @returns {Promise<User>} 返回用户对象
 */
export async function customRegister_fun(data) {
    const app = await getApp();
    return await app.callFunction({
        name: 'customRegister',
        data
    });
}

/**
 * @description 登录函数（需云函数支持）
 * @param {string} username 用户名
 * @param {string} password 密码
 * @returns {Promise<User>} 返回用户对象
 */
async function customLogin_fun(username, password) {
    let app = await getApp();
    return app
        .callFunction({
            name: 'customLogin',
            data: {
                username: username,
                password: password // 实际应先加密
            }
        })
        .then(res => {
            // 使用自定义登录凭证登录
            return app.auth().signInWithCustomToken(res.result.token);
        });
}
export async function getAllUsers_fun() {
    const app = await getApp();
    const auth = await getAuth();
    // 匿名登录
    await auth.signInAnonymously();
    await auth.getLoginState();
    return await app.callFunction({
        name: 'getAllUsers',
        data: {}
    });
}
