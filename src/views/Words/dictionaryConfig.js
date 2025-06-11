// 权威词典配置 - 国内可直接访问的词典网站
export const dictionaryConfig = {
    // 有道词典 - 国内可直接访问
    youdao: {
        name: '有道词典',
        nameEn: 'Youdao Dictionary',
        url: 'https://dict.youdao.com/result?word=',
        icon: 'mdi:book-open-variant',
        color: '#1e88e5',
        description: '网易有道词典'
    },
    // 金山词霸 - 国内可直接访问
    iciba: {
        name: '金山词霸',
        nameEn: 'iCIBA',
        url: 'https://www.iciba.com/word?w=',
        icon: 'mdi:book-open-variant',
        color: '#1976d2',
        description: '金山词霸在线词典'
    },
    // 百度翻译 - 国内可直接访问
    baidu: {
        name: '百度翻译',
        nameEn: 'Baidu Translate',
        url: 'https://fanyi.baidu.com/#en/zh/',
        icon: 'mdi:book-open-variant',
        color: '#388e3c',
        description: '百度翻译词典'
    },
    // 搜狗翻译 - 国内可直接访问
    sogou: {
        name: '搜狗翻译',
        nameEn: 'Sogou Translate',
        url: 'https://fanyi.sogou.com/text?keyword=',
        icon: 'mdi:book-open-variant',
        color: '#7b1fa2',
        description: '搜狗翻译词典'
    },
    // 腾讯翻译 - 国内可直接访问
    tencent: {
        name: '腾讯翻译',
        nameEn: 'Tencent Translate',
        url: 'https://fanyi.qq.com/translate?source=auto&target=zh&text=',
        icon: 'mdi:book-open-variant',
        color: '#ff6f00',
        description: '腾讯翻译词典'
    },
    // 必应词典 - 国内可直接访问
    bing: {
        name: '必应词典',
        nameEn: 'Bing Dictionary',
        url: 'https://cn.bing.com/dict/search?q=',
        icon: 'mdi:book-open-variant',
        color: '#c2185b',
        description: '微软必应词典'
    },
    // 海词词典 - 国内可直接访问
    dictcn: {
        name: '海词词典',
        nameEn: 'Dict.cn',
        url: 'https://dict.cn/',
        icon: 'mdi:book-open-variant',
        color: '#d32f2f',
        description: '海词在线词典'
    },
    // 爱词霸 - 国内可直接访问
    aiciba: {
        name: '爱词霸',
        nameEn: 'AiCIBA',
        url: 'https://www.aiciba.com/word?w=',
        icon: 'mdi:book-open-variant',
        color: '#f57c00',
        description: '爱词霸在线词典'
    },
    // 剑桥词典 (可能无法访问)
    cambridge: {
        name: '剑桥词典',
        nameEn: 'Cambridge Dictionary',
        url: 'https://dictionary.cambridge.org/dictionary/english/',
        icon: 'mdi:book-open-variant',
        color: '#1e88e5',
        description: '剑桥大学权威英语词典',
        mayFail: true,
        requiresVPN: true
    },
    // 韦氏词典 (可能无法访问)
    merriam: {
        name: '韦氏词典',
        nameEn: 'Merriam-Webster',
        url: 'https://www.merriam-webster.com/dictionary/',
        icon: 'mdi:book-open-variant',
        color: '#388e3c',
        description: '美国韦氏词典',
        mayFail: true,
        requiresVPN: true
    }
};

// 获取词典URL
export function getDictionaryUrl(dictType, word) {
    const config = dictionaryConfig[dictType];
    if (!config) {
        throw new Error(`未知的词典类型: ${dictType}`);
    }
    return config.url + encodeURIComponent(word);
}

// 获取词典名称
export function getDictionaryName(dictType) {
    const config = dictionaryConfig[dictType];
    return config ? config.name : '未知词典';
}

// 获取词典英文名称
export function getDictionaryNameEn(dictType) {
    const config = dictionaryConfig[dictType];
    return config ? config.nameEn : 'Unknown Dictionary';
}

// 获取词典图标
export function getDictionaryIcon(dictType) {
    const config = dictionaryConfig[dictType];
    return config ? config.icon : 'mdi:book-open-variant';
}

// 获取词典颜色
export function getDictionaryColor(dictType) {
    const config = dictionaryConfig[dictType];
    return config ? config.color : '#666';
}

// 获取词典描述
export function getDictionaryDescription(dictType) {
    const config = dictionaryConfig[dictType];
    return config ? config.description : '';
}

// 获取所有词典类型
export function getAllDictionaryTypes() {
    return Object.keys(dictionaryConfig);
}

// 获取推荐的词典列表
export function getRecommendedDictionaries() {
    return ['youdao', 'iciba', 'baidu', 'bing', 'sogou'];
} 