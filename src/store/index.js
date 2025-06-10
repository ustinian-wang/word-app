import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const STUDY_STATUS_DEF = {
    DEFAULT: 0,
    LEARNING: 1,
    LEARNED: 2,
    FORGOT: 3,
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
