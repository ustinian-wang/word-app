import Vue from 'vue';
import { setup } from '@ustinian-wang/js-monitor';

window.Vue = Vue;

setup({
    appId: 'word-app',
    api: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=3dfe1462-813c-4c48-845d-8e5bf7cfd9eb', // 或自定义函数
    debug: true,
    // filter: (data) => false, // 返回 true 则不上报
    // transform: (data) => data, // 可自定义数据转换
});