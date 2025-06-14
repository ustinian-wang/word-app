export function set_session_cache(key, value, defaultValue) {
    try {
        return JSON.parse(sessionStorage.getItem(key)) || defaultValue;
    } catch (e) {
        return defaultValue;
    }
}

export function get_session_cache(key, defaultValue) {
    try {
        return JSON.parse(sessionStorage.getItem(key)) || defaultValue;
    } catch (e) {
        return defaultValue;
    }
}
