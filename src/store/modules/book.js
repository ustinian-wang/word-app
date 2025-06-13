import {
    getBookProgress,
    getCurrentWords,
    getWordBooks,
    setBookProgress,
    setCurrentBookIndex
} from '@/kits/words';

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
        progressPercent: state => {
            return state.progress.learnedArr.length > 0
                ? Math.round((state.progress.learnedArr.length / state.words.length) * 100)
                : 0;
        },
        // 当前学习进度文本
        progressText: (state, getters) => {
            return state.words.length > 0
                ? `${state.progress.currentGroup + 1} / ${getters.groupCount}`
                : '';
        },

        groupStart: (state, getters) => {
            return state.progress.currentGroup * state.GROUP_SIZE;
        },
        groupEnd: (state, getters) => {
            return Math.min(
                state.progress.currentGroup * state.GROUP_SIZE + state.GROUP_SIZE,
                state.words.length
            );
        },
        getGroupWords: (state, getters) => {
            return () => {
                const groupStart = getters.groupStart;
                const groupEnd = getters.groupEnd;
                const groupWords = [];
                for (let i = groupStart; i < groupEnd; i++) {
                    if (!state.progress.learnedArr.includes(i)) groupWords.push(i);
                }
                return groupWords;
            };
        }
    },
    mutations: {
        setCurrentBookIdx(state, idx) {
            console.trace();
            console.log('[setCurrentBookIdx]', idx);
            state.currentBookIdx = idx;
            setCurrentBookIndex(idx);
        },
        setWordBooks(state, books) {
            state.wordBooks = books;
        },
        setWords(state, words) {
            state.words = words;
        },
        setGroupSize(state, size) {
            state.GROUP_SIZE = size;
        }
    },
    actions: {
        loadBook({ commit, getters, state }, bookIdx) {
            let wordBooks = getWordBooks();
            commit('setCurrentBookIdx', bookIdx);
            commit('setWordBooks', wordBooks);
            commit('setWords', wordBooks[bookIdx]?.words || []);

            const progress = getBookProgress(getters.bookId);
            state.progress.currentGroup = progress.group || 0;
            state.progress.learnedArr = progress.learned || [];
        },
        saveProgress({ getters, state }) {
            const bookId = getters.bookId;
            if (!bookId) {
                return;
            }
            setBookProgress(bookId, {
                group: state.progress.currentGroup,
                learned: state.progress.learnedArr,
                percent: getters.progressPercent / 100
            });
        }
    }
};
