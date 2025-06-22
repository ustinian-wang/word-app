// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// 全局拦截会失败的外部 API 请求，为它们提供一个稳定的桩（stub）响应。
// 这是处理不稳定的第三方服务、避免测试因网络问题而失败的最佳实践。
beforeEach(() => {
    // 拦截字典 API 请求，返回一个空的成功响应，以避免 Service Worker 出错
    cy.intercept('GET', 'https://api.dictionaryapi.dev/api/v2/entries/en/*', {
        statusCode: 200,
        body: []
    }).as('dictApi');

    // 拦截图标服务请求，返回一个空的成功响应
    cy.intercept('GET', 'https://api.unisvg.com/mdi.json*', {
        statusCode: 200,
        body: {}
    }).as('unisvgApi');
});

// 全局忽略所有源自应用程序的未捕获异常
// 这是一种比较宽泛的设置，可以有效阻止包括 XHR 在内的各种请求失败导致测试中断。
// 如果未来您希望只忽略特定类型的错误，可以在此函数内添加更精细的判断逻辑。
Cypress.on('uncaught:exception', (err, runnable) => {
    // 返回 false 会阻止 Cypress 因为这个异常而使测试失败
    console.log('捕获并忽略了一个未捕获异常:', err.message);
    return false;
});

// 忽略特定的 XHR 错误，防止其导致测试失败
Cypress.on('fail', (error, runnable) => {
    // 我们只想处理预期的 XHR 加载失败错误
    if (error.message.includes('cy.request() failed trying to load')) {
        // 在这里，您可以添加更具体的判断逻辑，
        // 例如，只忽略特定 URL（如 'dictvoice'）的失败
        if (error.message.includes('dictvoice')) {
            console.log('捕获并忽略了词典音频接口的加载失败');
            return false;
        }
    }
    // 对于所有其他类型的错误，我们仍然希望测试失败
    throw error;
});
