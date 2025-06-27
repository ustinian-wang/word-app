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

let app = null;

function setupCloud() {
    return cloudbase.init({
        env: VITE_CLOUD_ENV,
        clientId: VITE_CLOUD_CLIENT_ID // 应用 ID，选填
    });
}

export function getCloudApp() {
    if (!app) {
        app = setupCloud();
    }
    return app;
}
