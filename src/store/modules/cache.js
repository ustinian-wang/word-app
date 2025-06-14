import { getWordBooks } from '@/kits/words';
import { safeJsonParse, isJSON, getter, setter, debounce, deepAssign, cloneDeep } from '@ustinian-wang/kit';

const CACHE_PRE = 'wpv_';
// 获取所有版本号
function get_ver_list() {
    let ver_list = Object.keys(window.localStorage).filter(key => key.startsWith(CACHE_PRE));
    return ver_list;
}
// 加载所有版本号，如果没有，就插入一条
function load_ver_list() {
    let ver_list = get_ver_list();
    if (ver_list.length === 0) {
        let new_ver = `${CACHE_PRE}_${Date.now()}`;
        window.localStorage.setItem(new_ver, '{}');
        ver_list = get_ver_list();
    }
    return ver_list;
}
function get_curr_ver_key() {
    let ver_list = get_ver_list();
    if (ver_list.length === 0) {
        return `${CACHE_PRE}_${Date.now()}`;
    }
    return ver_list[ver_list.length - 1] || `${CACHE_PRE}_${Date.now()}`;
}

function get_ver_data(ver_key) {
    let ver_data = window.localStorage.getItem(ver_key) || '{}';
    if (!isJSON(ver_data)) {
        ver_data = '{}';
    }
    ver_data = JSON.parse(ver_data);
    return ver_data;
}

/**
 * @return {{
 *     usr_bookId: number,
 *     progress: {
 *         [bookId1: string]: {
 *             learned_no_arr: number[]
 *         }
 *     }
 * }}
 */
function get_usr_data(cache_key) {
    const cache_data = safeJsonParse(window.localStorage.getItem(cache_key) || '{}');
    return cache_data;
}
/**
 * @description 同步用户数据到本地存储，但是做了防抖处理
 */
const sync_usr_data = debounce((key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data));
}, 100);

const USR_BOOK_ID = 'usr_bookId';
const USR_PROGRESS = 'usr_progress';
const USR_LEARNED_NO_ARR = 'learned_no_arr';

export default {
    namespaced: true,
    state: {
        ver_list: load_ver_list(),
        curr_ver_key: get_curr_ver_key(),
        usr_data: get_usr_data(get_curr_ver_key()),
        wordBooks: getWordBooks()
    },
    getters: {
        usr_bookIdx: (state, getters) => {
            let bookId = getters.usr_bookId;
            let idx = state.wordBooks.findIndex(book => book.id === bookId);
            if (idx === -1) {
                return 0;
            }
            return idx;
        },
        set_usr_bookIdx: (state, getters) => {
            return bookIdx => {
                console.log('[bookIdx]', bookIdx);
                let bookId = state.wordBooks[bookIdx].id || 0;
                getters.set_usr_bookId(bookId);
            };
        },
        usr_bookId: state => {
            return getter(state.usr_data, USR_BOOK_ID, state.wordBooks[0].id);
        },
        usr_progress: state => {
            return getter(state.usr_data, USR_PROGRESS, {});
        },
        usr_learned_no_arr(state, getters) {
            let progress = getters.usr_progress;
            console.log('[getters.usr_bookId]', getters.usr_bookId);
            console.log('[progress]', progress);
            return progress[getters.usr_bookId]?.learned_no_arr || [];
        },
        usr_learned_words(state, getters) {
            let learned_no_arr = getters.usr_learned_no_arr;
            let bookId = getters.usr_bookId;
            let book = state.wordBooks.find(book => book.id === bookId);
            let learned_words = book.words.filter((word, index) => learned_no_arr.includes(index));
            console.log('[cache learned_words]', learned_words, bookId, book, learned_no_arr, state.wordBooks);
            return learned_words;
        },
        set_usr_bookId(state, getters) {
            return bookId => {
                setter(state.usr_data, USR_BOOK_ID, bookId);
                console.log('[set_usr_bookId state.usr_data]', state.usr_data);
                getters.set_usr_data(state.usr_data);
            };
        },
        set_usr_progress(state, getters) {
            return progress => {
                setter(state.usr_data, USR_PROGRESS, progress);
                getters.set_usr_data(state.usr_data);
            };
        },
        add_usr_learned_no(state, getters) {
            return learned_no => {
                let learned_no_arr = getters.usr_learned_no_arr;
                learned_no_arr.push(learned_no);
                getters.set_usr_learned_no_arr(learned_no_arr);
            };
        },
        set_usr_learned_no_arr(state, getters) {
            return learned_no_arr => {
                let usr_data = cloneDeep(state.usr_data);
                usr_data = deepAssign(usr_data, {
                    [USR_BOOK_ID]: getters.usr_bookId,
                    [USR_PROGRESS]: {
                        [getters.usr_bookId]: {
                            learned_no_arr
                        }
                    }
                });
                getters.set_usr_data(usr_data);
            };
        },
        set_usr_data(state, getters) {
            return data => {
                state.usr_data = data;

                // USR_BOOK_ID
                // USR_PROGRESS
                // USR_LEARNED_NO_ARR
                // let usr_bookId = getters.usr_bookId;
                // let usr_progress = getters.usr_progress;
                // let usr_learned_no_arr = getters.usr_learned_no_arr;
                // deepAssign({

                // }, )
                sync_usr_data(state.curr_ver_key, data);
            };
        }
    },
    mutations: {
        set_usr_data(state, data) {
            state.usr_data = data;
        }
    },
    actions: {
        // save_usr_data({ state }) {
        //     const cache_key = 'wpv_202506141501111';
        //     window.localStorage.setItem(cache_key, JSON.stringify(state.usr_data));
        // }
    }
};
