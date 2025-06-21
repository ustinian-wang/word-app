const js = require('@eslint/js');
const vue = require('eslint-plugin-vue');
const vueParser = require('vue-eslint-parser');
const prettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

// 浏览器环境全局变量
const browserGlobals = {
    // DOM
    window: 'readonly',
    document: 'readonly',
    navigator: 'readonly',
    location: 'readonly',
    history: 'readonly',
    localStorage: 'readonly',
    sessionStorage: 'readonly',
    // 基础对象
    Object: 'readonly',
    Array: 'readonly',
    String: 'readonly',
    Number: 'readonly',
    Boolean: 'readonly',
    Date: 'readonly',
    Math: 'readonly',
    JSON: 'readonly',
    RegExp: 'readonly',
    Error: 'readonly',
    // 定时器
    setTimeout: 'readonly',
    clearTimeout: 'readonly',
    setInterval: 'readonly',
    clearInterval: 'readonly',
    // 浏览器API
    fetch: 'readonly',
    XMLHttpRequest: 'readonly',
    FileReader: 'readonly',
    Audio: 'readonly',
    Video: 'readonly',
    Image: 'readonly',
    Canvas: 'readonly',
    WebSocket: 'readonly',
    // 事件
    Event: 'readonly',
    CustomEvent: 'readonly',
    MouseEvent: 'readonly',
    KeyboardEvent: 'readonly',
    TouchEvent: 'readonly',
    // DOM元素
    Element: 'readonly',
    HTMLElement: 'readonly',
    Node: 'readonly',
    NodeList: 'readonly',
    HTMLCollection: 'readonly',
    // 其他
    confirm: 'readonly',
    alert: 'readonly',
    prompt: 'readonly',
    console: 'readonly',
    // 全局对象
    globalThis: 'readonly',
    self: 'readonly',
    // 你的自定义全局变量
    client: 'readonly',
    __LOCAL_IP__: 'readonly',
    __API_PORT__: 'readonly',
    VITE_API: 'readonly',
    VITE_PROXY_API: 'readonly'
};

// Node.js环境全局变量
const nodeGlobals = {
    process: 'readonly',
    Buffer: 'readonly',
    __dirname: 'readonly',
    __filename: 'readonly',
    global: 'readonly',
    module: 'readonly',
    require: 'readonly',
    exports: 'readonly',
    // Worker环境
    clients: 'readonly',
    // 定时器（Node.js也有）
    setTimeout: 'readonly',
    clearTimeout: 'readonly',
    setInterval: 'readonly',
    clearInterval: 'readonly'
};

// 合并所有全局变量
const allGlobals = { ...browserGlobals, ...nodeGlobals };

module.exports = [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: allGlobals
        },
        plugins: {
            prettier
        },
        rules: {
            indent: ['error', 4],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-unused-vars': 'warn',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-debugger': 'warn',
            'prettier/prettier': 'error'
        }
    },
    {
        files: ['**/*.vue'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            parser: vueParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                parser: require.resolve('@babel/eslint-parser'),
                requireConfigFile: false,
                extraFileExtensions: ['.vue']
            },
            globals: allGlobals
        },
        plugins: {
            vue,
            prettier
        },
        rules: {
            // 基础规则
            indent: ['error', 4],
            quotes: ['error', 'single'],
            semi: ['error', 'always'],
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'no-debugger': 'warn',

            // Vue 模板规则
            'vue/html-indent': ['error', 4],
            'vue/script-indent': [
                'error',
                4,
                {
                    baseIndent: 0,
                    switchCase: 1,
                    ignores: []
                }
            ],
            'vue/valid-template-root': 'error',
            'vue/no-unused-vars': 'warn',
            'vue/no-unused-components': 'warn',
            'vue/multi-word-component-names': 'off',
            'vue/require-v-for-key': 'error',
            'vue/no-duplicate-attributes': 'error',
            'vue/no-parsing-error': 'error',
            'vue/valid-v-for': 'error',
            'vue/valid-v-if': 'error',
            'vue/valid-v-else': 'error',
            'vue/valid-v-else-if': 'error',
            'vue/valid-v-show': 'error',
            'vue/valid-v-model': 'error',
            'vue/valid-v-slot': 'error',
            'vue/valid-v-on': 'error',
            'vue/valid-v-bind': 'error',
            'vue/valid-v-text': 'error',
            'vue/valid-v-html': 'error',
            'vue/valid-v-once': 'error',
            'vue/valid-v-pre': 'error',
            'vue/valid-v-cloak': 'error',
            'vue/valid-v-memo': 'error',

            // Prettier集成
            'prettier/prettier': 'error'
        }
    },
    prettierConfig
];
