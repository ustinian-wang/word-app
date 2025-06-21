import Vue from 'vue';
import { setup } from '@ustinian-wang/js-monitor';

window.Vue = Vue;

setup({
    appId: 'word-app',
    api: VITE_PROXY_API + '/api/report', // 或自定义函数
    debug: true,
    vueConfig: Vue.config
    // filter: (data) => false, // 返回 true 则不上报
    // transform: (data) => data, // 可自定义数据转换
});
