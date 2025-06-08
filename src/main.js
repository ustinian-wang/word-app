import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { Icon } from '@iconify/vue2';

Vue.component('Icon', Icon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
