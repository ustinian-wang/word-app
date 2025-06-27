export const RouterDef = {
    Index: { path: '/', component: () => import('@/views/Index.vue'), name: '首页', title: '首页' },
    Recognize: {
        path: '/recognize',
        component: () => import('@/views/Recognize.vue'),
        name: 'AI识词',
        title: 'AI识词'
    },
    Words: {
        path: '/words',
        component: () => import('@/views/Words/Words.vue'),
        name: '背一背',
        title: '背一背'
    },
    ReviewWords: {
        path: '/reviewWords',
        component: () => import('@/views/Words/ReviewWords.vue'),
        name: '复习单词',
        title: '复习单词'
    },
    WordBooks: {
        path: '/wordbooks',
        component: () => import('@/views/WordBooks/WordBooks.vue'),
        name: '词库',
        title: '词库'
    },
    Records: {
        path: '/records',
        component: () => import('@/views/RecordView.vue'),
        name: '学习记录',
        title: '学习记录'
    },
    Redirect: { path: '/redirect/:path(.*)', component: () => import('@/views/Redirect.vue') },
    Settings: {
        path: '/settings',
        component: () => import('@/views/Settings.vue'),
        name: '设置',
        title: '设置'
    }
};
