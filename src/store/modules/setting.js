import { displayVConsole } from '@/kits/vconsole';

const orginDebugSetting = {
    clipboardFail: false
};

export default {
    namespaced: true,
    state: {
        showDictionary: false,
        autoPlayAudio: false,
        enableShortcuts: false,
        groupSize: 10,
        debug: false,
        debugSetup: false,
        /**
         * debug value start
         */
        debugSetting: {
            ...orginDebugSetting
        }
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
        setDebug(state, getters) {
            return debug => {
                state.debug = debug;
                displayVConsole(debug);
                if (!debug) {
                    getters.rollDbgSetting();
                }
            };
        },
        isDebugMode(state) {
            // 加多一个中间层, 以后可以扩展
            return state.debug;
        },
        setDebugSetup(state) {
            return value => {
                state.debugSetup = value;
                state.debug = value;
            };
        },
        dbgClipboardFail(state) {
            return state.debugSetting.clipboardFail;
        },
        setDbgClipboardFail(state) {
            return value => {
                state.debugSetting.clipboardFail = value;
            };
        },
        rollDbgSetting(state) {
            return () => {
                state.debugSetting = {
                    ...orginDebugSetting
                };
            };
        }
    }
};
