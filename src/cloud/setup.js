import cloudbase from '@cloudbase/js-sdk';

// 登录模块
import '@cloudbase/js-sdk/auth';
// 云函数模块
import '@cloudbase/js-sdk/functions';
// 云存储模块
import '@cloudbase/js-sdk/storage';
// 数据库模块
import '@cloudbase/js-sdk/database';
// 实时推送模块，引入前必须首先引入数据库模块
// import '@cloudbase/js-sdk/realtime';
// // 广告上报模块
// import '@cloudbase/js-sdk/analytics';

// let app = null;

let app = null;
let auth = null;

async function initCloud() {
    app = cloudbase.init({
        env: 'cloud1-0g1b3rvpff0d993b'
    });
    auth = app.auth({
        persistence: 'local'
    });
    // 匿名登录
    await auth.signInAnonymously();
}

export async function getApp() {
    if (!app) {
        await initCloud();
    }
    return app;
}

export async function getAuth() {
    if (!auth) {
        await initCloud();
    }
    return auth;
}
