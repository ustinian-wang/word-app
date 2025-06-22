describe('设置页面', () => {
    beforeEach(() => {
        // 带上 _debug=true 参数以确保所有调试相关的设置项都可见
        cy.visit('/?_debug=true#/settings');
    });

    it('应成功加载并显示设置项', () => {
        // 验证URL
        cy.location('hash').should('include', '/settings');
        
        // 验证标题
        cy.contains('.settings-title', '通用').should('be.visible');

        // 验证至少有一个设置项被渲染
        cy.get('.setting-item').should('have.length.greaterThan', 0);
    });

    it('应能修改每组单词数量', () => {
        const groupSizeInput = '[data-test="setting-group-size"] input';

        // 验证初始值，这里假设默认值是10
        cy.get(groupSizeInput)
          .should('have.value', '10');

        // 使用 .clear() 清空输入框，然后输入新值
        cy.get(groupSizeInput)
          .clear()
          .type('15');

        // 验证新值
        cy.get(groupSizeInput)
          .should('have.value', '15');
    });

    const debugSwitch = '[data-test="wa-switch-debug"]';
    const clipboardFailSwitch = '[data-test="wa-switch-dbgClipboardFail"]';

    it('应能正确开启和关闭调试模式', () => {
        // 初始状态：调试模式关闭，剪切板失败开关不可见
        cy.get(debugSwitch).should('have.attr', 'aria-checked', 'false');
        cy.get(clipboardFailSwitch).should('not.exist');

        // 开启调试模式
        cy.get(debugSwitch).click();
        cy.get(debugSwitch).should('have.attr', 'aria-checked', 'true');
        cy.get(clipboardFailSwitch).should('be.visible');

        // 关闭调试模式
        cy.get(debugSwitch).click();
        cy.get(debugSwitch).should('have.attr', 'aria-checked', 'false');
        cy.get(clipboardFailSwitch).should('not.exist');
    });

    it('在调试模式下，应能切换"测试剪切板复制失败"开关', () => {
        // 准备工作：先开启调试模式
        cy.get(debugSwitch).click();
        cy.get(debugSwitch).should('have.attr', 'aria-checked', 'true');

        // 验证剪切板失败开关的初始状态并切换
        cy.get(clipboardFailSwitch).should('be.visible').and('have.attr', 'aria-checked', 'false');
        cy.get(clipboardFailSwitch).click();
        cy.get(clipboardFailSwitch).should('have.attr', 'aria-checked', 'true');
        cy.get(clipboardFailSwitch).click();
        cy.get(clipboardFailSwitch).should('have.attr', 'aria-checked', 'false');
    });

    it.only('每组学习单词数: 从10修改到11，单词对应的组数从10修改到11', () => {
        // 先访问words页面，
        cy.visit('/?_debug=true#/words');
        // 点击菜单展开
        cy.get('[data-test="fabMenu"]').click();
        // 点击设置跳转到设置中心，
        cy.get('[data-test="settings"]').click();
        // 修改每组学习单词数为11
        cy.get('[data-test="setting-group-size"] input').clear().type('11');
        // 点击左上角返回
        cy.get('[data-test="back-btn"]').click();
        // 返回到words页面, 检查url对不对
        cy.location('hash').should('include', '/words');
        // 看进度条文本progress-text，里面是否包含了 1/11
        cy.get('.progress-text').should('contain', '11');
    });
});

describe('清理缓存', () => {
    beforeEach(() => {
        cy.visit('/?_debug=true#/settings');
    });

    it('清理缓存', () => {
        // 清理所有数据
        clearAllCache();
        generateCache();
        // 访问设置页面
        cy.visit('/?_debug=true#/settings');
        // 清理缓存
        cy.get('[data-test="clearCache"]').click();
        // // // 导出数据
        // cy.get('[data-test="export"]').click({ force: true }); // 点击导出
        // cy.get('[data-test="confirm"]').click({ force: true }); // 点击确认
        // // // 预期数据为空
        // cy.get('[data-test="export"]').click({ force: true }); // 点击导出
        // // cy.get('[data-test="confirm"]').click({ force: true }); // 点击确认
        // cy.get('[data-test="toast-message"]').should('contain', '没有需要导出的学习记录。');
    });

    it('导出数据： 没有需要导出的学习记录', () => {
        clearAllCache();

        cy.get('[data-test="export"]').click({ force: true }); // 点击导出
        // cy.get('[data-test="confirm"]').click({ force: true }); // 点击确认
        cy.get('[data-test="toast-message"]').should('contain', '没有需要导出的学习记录。');
    });

    it('导出数据： 有需要导出的学习记录', () => {
        clearAllCache();
        generateCache();
        cy.visit('/?_debug=true#/settings');
        cy.get('[data-test="export"]').click({ force: true }); // 点击导出
        // 由于剪切板不可用，这个时候会走确认弹窗的逻辑
        // cy.get('[data-test="confirm"]').click({ force: true }); // 点击确认
        cy.get('[data-test="toast-message"]').should('contain', '导出成功');
    });
});


async function clearAllCache() {
    // 清理所有浏览器缓存
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.clearCookies();
    cy.visit('/?_debug=true#/settings').then(win => {
        if (indexedDB.databases) {
            indexedDB.databases().then(dbs => {
                dbs.forEach(db => {
                    if (db.name) indexedDB.deleteDatabase(db.name);
                });
            });
        }
    });
    cy.wait(500);
    // cy.clearDB();
}

async function generateCache() {
    cy.visit('/?_debug=true#/records');

    // 找到并点击"生成测试数据"按钮
    cy.contains('button', '生成测试数据').should('be.visible').click();

    // 验证空状态提示已经消失
    cy.get('.empty-state').should('not.exist');

    // 验证图表容器已出现，并且其内部成功渲染了 canvas 元素
    cy.get('.chart-container').should('be.visible').find('canvas').should('be.visible');
}
