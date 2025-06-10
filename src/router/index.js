import Vue from 'vue';
import Router from 'vue-router';
import Recognize from '../views/Recognize.vue';
import Words from '../views/Words/Words.vue';
import WordBooks from '../views/WordBooks.vue';
import Index from '../views/Index.vue';

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: Index, name: '首页' },
        { path: '/recognize', component: Recognize, name: '图片识别' },
        { path: '/words', component: Words, name: '背单词' },
        { path: '/wordbooks', component: WordBooks, name: '词库' },
    ],
});
