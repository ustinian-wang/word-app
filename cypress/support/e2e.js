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

// 在所有测试运行前，通过拦截 Service Worker 的注册来彻底禁用它。
// 这是解决由 Service Worker 缓存策略（如 Workbox）导致的、
// 难以被 Cypress 捕获的网络错误的最佳实践。
// 这能确保所有网络请求都直接由浏览器发出，从而让下面的 'uncaught:exception' 处理器能有效工作。
// cy.intercept('/sw.js', (req) => {
//     req.reply("console.log('Service Worker registration blocked by Cypress');");
// });

// 全局忽略所有源自应用程序的未捕获异常。
// 返回 false 会阻止 Cypress 因为这个异常而使测试失败。
// 这个监听器是完全静默的，不会在控制台或 Cypress 日志中产生任何输出。
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
