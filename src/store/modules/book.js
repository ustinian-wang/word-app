import { getBookProgress, getCurrentWords, getWordBooks } from "@/kits/words";

export default {
    namespaced: true,
    state: {
        currentBookIdx: 0,
        wordBooks: [],
        words: [],

        GROUP_SIZE: 10,
        progress: {
            currentGroup: 0,
            learnedArr: []
        }
    },
    getters: {
        bookName: state => {
            return state.wordBooks[state.currentBookIdx]?.name || '';
        },
        bookId: state => {
            return state.wordBooks[state.currentBookIdx]?.id || 0;
        },
        groupCount: state => {
            return Math.ceil(state.words.length / state.GROUP_SIZE);
        },
        // progress: (state, getters) => {
        //     const progress = getBookProgress(getters.bookId)
        //     return {
        //         currentGroup: progress.group || 0,
        //         learnedArr: progress.learned || []
        //     }
        // }
        progressPercent: (state) => {
            return state.progress.learnedArr.length > 0
                ? Math.round((state.progress.learnedArr.length / state.words.length) * 100)
                : 0
        },
        // 当前学习进度文本
        progressText: (state, getters) => {
            return state.words.length > 0
                ? `${state.progress.currentGroup + 1} / ${getters.groupCount}`
                : ''
        }
    },
    mutations: {
        setCurrentBookIdx(state, idx) {
            state.currentBookIdx = idx;
        },
        setWordBooks(state, books) {
            state.wordBooks = books;
        },
        setWords(state, words) {
            state.words = words;
        },
        setGroupSize(state, size) {
            state.GROUP_SIZE = size;
        },
    },
    actions: {
        loadBook({ commit, getters, state }, bookId) {
            commit('setCurrentBookIdx', bookId)
            commit('setWordBooks', getWordBooks())
            commit('setWords', getCurrentWords())

            const progress = getBookProgress(getters.bookId)
            state.progress.currentGroup = progress.group || 0
            state.progress.learnedArr = progress.learned || []
        }
    },
};
