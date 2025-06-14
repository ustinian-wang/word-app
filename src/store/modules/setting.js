export default {
    namespaced: true,
    state: {
        showDictionary: false,
        autoPlayAudio: false,
        enableShortcuts: false,
        fontSize: 28
    },
    mutations: {
        setShowDictionary(state, show) {
            state.showDictionary = show;
        }
    },
    getters: {
        showDictionary: state => state.showDictionary,
        autoPlayAudio: state => state.autoPlayAudio,
        enableShortcuts: state => state.enableShortcuts,
        fontSize: state => state.fontSize
    }
};
