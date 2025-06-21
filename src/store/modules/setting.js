import { displayVConsole } from '@/kits/vconsole';

export default {
    namespaced: true,
    state: {
        showDictionary: false,
        autoPlayAudio: false,
        enableShortcuts: false,
        groupSize: 10,
        debug: false,
        
        /**
         * debug value start
         */
        debugClipboardFail: false
        /**
         * debug value end
         */
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
        },
        setDebug(state) {
            return debug => {
                state.debug = debug;
                displayVConsole(debug);
            };
        },
        isDebugMode(state) {
            // 加多一个中间层, 以后可以扩展
            return state.debug;
        },
        setDebugClipboardFail(state) {
            return debugClipboardFail => {
                state.debugClipboardFail = debugClipboardFail;
            };
        }
    }
};
