export default {
    namespaced: true,
    state: {
        currentBookIdx: 0,
        wordBooks: [],
        words: [],
    },
    getters: {
        bookName: state => {
            return state.wordBooks[state.currentBookIdx]?.name || '';
        },
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
    },
    actions: {},
};
