import Vue from 'vue';
import Vuex from 'vuex';
import book from './modules/book';
import { enterFullscreen, exitFullscreen } from '@/kits/fullscreen';
import cache from './modules/cache';
import setting from './modules/setting';

Vue.use(Vuex);
/**
 * @description
 */
export const STUDY_STATUS_DEF = {
    DEFAULT: 0, // 默认
    LEARNING: 1, // 学习中
    LEARNED: 2, // 学习结束
    REVIEWING: 3, // 复习中
    REVIEWED: 4 // 复习结束
};

export default new Vuex.Store({
    state: {
        // 在这里定义你的状态
        study_status: STUDY_STATUS_DEF.DEFAULT,
        cache_frozen: false,
        isFullscreen: false
    },

    mutations: {
        setCacheFrozen(state, frozen) {
            state.cache_frozen = frozen;
        },
        // 在这里定义你的mutations
        setStudyStatus(state, status) {
            state.study_status = status;
        },
        setIsFullscreen(state, isFullscreen) {
            state.isFullscreen = isFullscreen;
            if (isFullscreen) {
                enterFullscreen();
            } else {
                exitFullscreen();
            }
        }
    },

    actions: {
        // 在这里定义你的actions
    },

    getters: {
        // 在这里定义你的getters
        cacheWrapper(state) {
            return function (fn) {
                if (state.cache_frozen) {
                    return;
                }
                fn?.apply?.(this, arguments);
            };
        }
    },

    modules: {
        // 在这里定义你的模块
        book,
        cache,
        setting
    }
});
