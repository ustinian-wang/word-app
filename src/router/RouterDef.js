import Index from '@/views/Index.vue';
import Recognize from '@/views/Recognize.vue';
import Words from '@/views/Words/Words.vue';
import ReviewWords from '@/views/Words/ReviewWords.vue';
import WordBooks from '@/views/WordBooks/WordBooks.vue';
import RecordView from '@/views/RecordView.vue';
import Redirect from '@/views/Redirect.vue';
import Settings from '@/views/Settings.vue';

export const RouterDef = {
    Index: { path: '/', component: Index, name: '首页', title: '首页' },
    Recognize: { path: '/recognize', component: Recognize, name: 'AI识词', title: 'AI识词' },
    Words: { path: '/words', component: Words, name: '背单词', title: '背单词' },
    ReviewWords: {
        path: '/reviewWords',
        component: ReviewWords,
        name: '复习单词',
        title: '复习单词'
    },
    WordBooks: { path: '/wordbooks', component: WordBooks, name: '词库', title: '词库' },
    Records: { path: '/records', component: RecordView, name: '学习记录', title: '学习记录' },
    Redirect: { path: '/redirect/:path(.*)', component: Redirect },
    Settings: { path: '/settings', component: Settings, name: '设置', title: '设置' }
};
