module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        '@vue/prettier'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {
        // 缩进设置为4个空格
        'indent': ['error', 4],
        // Vue模板中的缩进也设置为4个空格
        'vue/html-indent': ['error', 4],
        // Vue script标签中的缩进设置为4个空格
        'vue/script-indent': ['error', 4, {
            'baseIndent': 0,
            'switchCase': 1,
            'ignores': []
        }],
        // 其他常用规则
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-unused-vars': 'warn',
        'no-console': 'warn',
        'no-debugger': 'warn',
        'vue/multi-word-component-names': 'off',
        'vue/no-unused-vars': 'warn',
        'vue/no-unused-components': 'warn',
    },
    globals: {
        // 添加全局变量
        'process': 'readonly',
    },
}; 