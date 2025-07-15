import { cloneRequest } from '@ustinian-wang/kit';
import { getLoginToken } from '@/core/token';
import router from '@/router';
import { $message } from '@/kits/toast';

let request = cloneRequest();
request.defaults.baseURL = VITE_API;
request.defaults.timeout = 60000;
request.defaults.withCredentials = true;

// 请求拦截器：自动带token
request.interceptors.request.use(config => {
    // 优先从store获取token，没有则从localStorage
    let token = getLoginToken();
    if (token) {
        config.headers = config.headers || {};
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
});

// 响应拦截器：处理401自动跳转登录并toast
request.interceptors.response.use(response => {
    // 兼容后端rt=401但http状态码为200的情况
    if (response && response.data && response.data.rt === 401) {
        router.push('/login');
        $message.error('登录过期，请重新登录');
        return Promise.reject({
            isCustom401: true,
            response
        });
    }
    return response;
});

export { request };
