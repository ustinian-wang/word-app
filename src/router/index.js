import Vue from 'vue';
import Router from 'vue-router';
// views start
import Recognize from '../views/Recognize.vue';
import Words from '../views/Words/Words.vue'; // test: ok
import ReviewWords from '../views/Words/ReviewWords.vue'; // test: ok
import WordBooks from '../views/WordBooks/WordBooks.vue'; // test: ok
import Index from '../views/Index.vue'; // test: ok
import Redirect from '@/views/Redirect.vue';
import Settings from '@/views/Settings.vue'; // test: ok
import RecordView from '@/views/RecordView.vue';
// views end

Vue.use(Router);

const router = new Router({
    routes: [
        { path: '/', component: Index, name: '首页' },
        { path: '/recognize', component: Recognize, name: '图片识别' },
        { path: '/words', component: Words, name: '背单词' },
        { path: '/reviewWords', component: ReviewWords, name: '复习单词' },
        { path: '/wordbooks', component: WordBooks, name: '词库' },
        { path: '/records', component: RecordView, name: '学习记录' },
        { path: '/redirect/:path(.*)', component: Redirect },
        { path: '/settings', component: Settings, name: '设置' }
    ]
});

export default router;

export function gotoIndex() {
    router.push('/');
}

export function gotoWords() {
    router.push('/words');
}

export function gotoReviewWords() {
    console.log('[gotoReviewWords]');
    router.push('/reviewWords');
}

export function gotoWordBooks() {
    router.push('/wordbooks');
}

export function gotoRecognize() {
    router.push('/recognize');
}

export function gotoRedirect(path) {
    router.push(`/redirect/${path}`);
}

export function gotoSettings() {
    router.push('/settings');
}

export function gotoRecords() {
    router.push('/records');
}