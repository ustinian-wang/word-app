import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
/**
 * @description
 */
export const STUDY_STATUS_DEF = {
    DEFAULT: 0, // 默认
    LEARNING: 1, // 学习中
    LEARNED: 2, // 学习结束
    REVIEWING: 3, // 复习中
    REVIEWED: 4, // 复习结束
};

export default new Vuex.Store({
    state: {
        // 在这里定义你的状态
        study_status: STUDY_STATUS_DEF.DEFAULT,
    },

    mutations: {
        // 在这里定义你的mutations
        setStudyStatus(state, status) {
            state.study_status = status;
        },
    },

    actions: {
        // 在这里定义你的actions
    },

    getters: {
        // 在这里定义你的getters
    },

    modules: {
        // 在这里定义你的模块
    },
});
