export default {
    namespaced: true,
    state: {
        showDictionary: false,
        autoPlayAudio: false,
        enableShortcuts: false,
        groupSize: 10
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
        // groupSize: state => state.groupSize,
        setGroupSize(state) {
            return size => {
                console.log('[size]', size);
                state.groupSize = size;
            };
        }
    }
};
