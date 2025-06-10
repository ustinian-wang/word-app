import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Icon } from '@iconify/vue2';
import { registerSW } from 'virtual:pwa-register';
import VConsole from 'vconsole';

// 导入Less样式
import './styles/main.less';

Vue.component('Icon', Icon);

// 注册 service worker
const updateSW = registerSW({
    onNeedRefresh() {
        // 当有新版本时，可以在这里显示更新提示
        if (confirm('有新版本可用，是否更新？')) {
            updateSW();
        }
    },
    onOfflineReady() {
        console.log('应用已准备就绪，可以离线使用');
    },
});

if (process.env.NODE_ENV !== 'production') {
    new VConsole();
}

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
