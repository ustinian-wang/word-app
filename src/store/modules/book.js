import { getWordBooks, setCurrentBookIndex } from '@/kits/words';

export default {
    namespaced: true,
    state: {
        // currentBookIdx: 0,
        wordBooks: getWordBooks(),

        progress: {
            // currentGroup: 0,
            learnedArr: []
        }
    },
    getters: {
        currentGroup: (state, getters, rootState, rootGetters) => {
            let learnedArr = rootGetters['cache/usr_learned_no_arr'];
            return Math.floor(learnedArr.length / rootState.setting.groupSize);
        },
        words: (state, getters, rootState) => {
            return rootState.cache.wordBooks[getters.currentBookIdx]?.words || []; // 当前书本全部单词
        },
        currentBookIdx: (state, getters, rootState, rootGetters) => {
            let bookId = rootGetters['cache/usr_bookId'];
            let idx = rootState.cache.wordBooks.findIndex(book => book.id === bookId);
            if (idx === -1) {
                return 0;
            }
            return idx;
        },
        bookName: (state, getters, rootState, rootGetters) => {
            return rootState.cache.wordBooks[getters.currentBookIdx]?.name || '';
        },
        bookId: (state, getters, rootState, rootGetters) => {
            return rootState.cache.wordBooks[getters.currentBookIdx]?.id || 0;
        },
        groupCount: (state, getters, rootState, rootGetters) => {
            return Math.ceil(getters.words.length / rootState.setting.groupSize);
        },
        progressPercent: (state, getters, rootState, rootGetters) => {
            let learnedArr = rootGetters['cache/usr_learned_no_arr'];
            return learnedArr.length > 0
                ? Math.round((learnedArr.length / getters.words.length) * 100)
                : 0;
        },
        // 当前学习进度文本
        progressText: (state, getters) => {
            return getters.words.length > 0
                ? `${getters.currentGroup + 1} / ${getters.groupCount}`
                : '';
        },

        groupStart: (state, getters, rootState, rootGetters) => {
            return getters.currentGroup * rootState.setting.groupSize;
        },
        groupEnd: (state, getters, rootState, rootGetters) => {
            return Math.min(
                getters.currentGroup * rootState.setting.groupSize + rootState.setting.groupSize,
                getters.words.length
            );
        },
        getGroupWords: (state, getters, rootState, rootGetters) => {
            return () => {
                let usr_learned_no_arr = rootGetters['cache/usr_learned_no_arr'];
                const groupStart = getters.groupStart;
                const groupEnd = getters.groupEnd;
                const groupWords = [];
                for (let i = groupStart; i < groupEnd; i++) {
                    // 找到目标组，然后过滤掉已经学习过的
                    if (!usr_learned_no_arr.includes(i)){
                        groupWords.push(i);
                    }
                }
                console.log('[groupWords]', groupWords, groupStart, groupEnd, usr_learned_no_arr);
                return groupWords;
            };
        },
        getRvGroupWords: (state, getters, rootState, rootGetters) => {
            return () => {
                // 这里先不分组，有多少复习多少
                return rootGetters['cache/usr_learned_no_arr'];
            };
        }
    },
    mutations: {
        setCurrentBookIdx(state, idx) {
            // console.trace();
            // console.log('[setCurrentBookIdx]', idx);
            // state.currentBookIdx = idx;
            // setCurrentBookIndex(idx);
        },
        setWordBooks(state, books, rootState) {
            rootState.cache.wordBooks = books;
        },
        // setWords(state, words) {
        //     // getters.words = words;
        // },
        // setGroupSize(state, size) {
        //     state.groupSize = size;
        // }
    },
    actions: {
        moveToNextGroup({ getters, state }) {
            // state.progress.currentGroup = state.progress.currentGroup + 1;
            // setBookProgress(getters.bookId, {
            //     group: state.progress.currentGroup,
            //     learned: state.progress.learnedArr,
            //     percent: getters.progressPercent / 100
            // });
        }
    }
};
