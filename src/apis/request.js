import { cloneRequest } from '@ustinian-wang/kit';
import store from '@/store';

let request = cloneRequest();
request.defaults.baseURL = VITE_API;
request.defaults.timeout = 60000;
request.defaults.withCredentials = true;

// 请求拦截器：自动带token
request.interceptors.request.use(config => {
    // 优先从store获取token，没有则从localStorage
    let token = store.state.user?.token || localStorage.getItem('token');
    console.log('token', token);
    if (token) {
        config.headers = config.headers || {};
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
});

export { request };
