import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Icon } from '@iconify/vue2';
// import { registerSW } from 'virtual:pwa-register';
import { test } from './directives/test';
// import './styles/index.less';
import 'vconsole';

// import './kits/monitor.js'; // 加载监控
window.Vue = Vue;

// 导入Less样式
import './styles/main.less';
Vue.component('Icon', Icon);

// // 注册 service worker
// const updateSW = registerSW({
//     onNeedRefresh() {
//         // 当有新版本时，可以在这里显示更新提示
//         if (confirm('有新版本可用，是否更新？')) {
//             updateSW();
//         }
//     },
//     onOfflineReady() {
//         console.log('应用已准备就绪，可以离线使用');
//     }
// });

// eslint-disable-next-line no-undef
let urlObj = new URL(location.href);
let _debug = urlObj.searchParams.get('_debug') === 'true';
store.getters['setting/setDebugSetup'](_debug);

// 注册 v-test 指令
Vue.directive('test', test);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

window.$router = router;
window.$store = store;
