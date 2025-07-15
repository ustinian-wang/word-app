import store from '@/store';
import { request } from './request';

export function loginApi(data) {
    return request.get('/api/user/login', { params: data });
}

export function registerApi(data) {
    return request.get('/api/user/register', { params: data });
}

export function meApi() {
    return request.get('/api/user/me');
}

export function changePasswordApi(data) {
    return request.post('/api/user/changePassword', data);
}

export function checkLoginApi() {
    return request.get('/api/user/checkLogin');
}