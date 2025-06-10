const js = require('@eslint/js');
const vue = require('eslint-plugin-vue');
const prettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
    js.configs.recommended,
    {
        files: ['**/*.js', '**/*.vue'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                // 浏览器环境
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                // Node.js环境
                process: 'readonly',
                Buffer: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                global: 'readonly',
                module: 'readonly',
                require: 'readonly',
                exports: 'readonly',
            },
        },
        plugins: {
            vue,
            prettier,
        },
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
            // Prettier集成
            'prettier/prettier': 'error',
        },
    },
    {
        files: ['**/*.vue'],
        rules: {
            // Vue特定规则
            'vue/valid-template-root': 'error',
            'vue/no-unused-vars': 'warn',
            'vue/no-unused-components': 'warn',
        },
    },
    prettierConfig,
]; 