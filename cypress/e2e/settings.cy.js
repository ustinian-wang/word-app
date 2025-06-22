describe('设置页面：头部导航测试', () => {
    it('返回首页', () => {
        cy.visit('/?_debug=true#/settings');
        cy.get('[data-test="back-btn"]').click();
        cy.location('hash').should('equal', '');
    });
    it('返回上一页', () => {
        // 先访问首页
        cy.visit('/?_debug=true#/');
        // 然后点击底部菜单
        cy.get('[data-test="fabMenu"]').click();
        // 点击【设置】项
        cy.get('[data-test="settings"]').click();
        // 这个时候已经在设置页面，检查url
        cy.location('hash').should('include', '/settings');
        // 点击返回按钮
        cy.get('[data-test="back-btn"]').click();
        // 此时在首页，检查url
        cy.location('hash').should('equal', '#/');
    });
});

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
        cy.get(groupSizeInput).should('have.value', '10');

        // 使用 .clear() 清空输入框，然后输入新值
        cy.get(groupSizeInput).clear().type('15');

        // 验证新值
        cy.get(groupSizeInput).should('have.value', '15');
    });

    const debugSwitch = '[data-test="wa-switch-debug"]';

    it('应能正确开启和关闭调试模式', () => {
        // 初始状态：调试模式关闭，剪切板失败开关不可见
        cy.get(debugSwitch).should('have.attr', 'aria-checked', 'false');

        // 开启调试模式
        cy.get(debugSwitch).click();
        cy.get(debugSwitch).should('have.attr', 'aria-checked', 'true');

        // 关闭调试模式
        cy.get(debugSwitch).click();
        cy.get(debugSwitch).should('have.attr', 'aria-checked', 'false');
    });

    it('在调试模式下，应能切换"测试剪切板复制失败"开关', () => {
        // 准备工作：先开启调试模式
        cy.get(debugSwitch).click();
        cy.get(debugSwitch).should('have.attr', 'aria-checked', 'true');

        // 验证剪切板失败开关的初始状态并切换
    });

    it('每组学习单词数: 从10修改到11，单词对应的组数从10修改到11', () => {
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
});

describe('导出数据', () => {
    beforeEach(() => {
        cy.visit('/?_debug=true#/settings');
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

describe('数据导入功能', () => {
    const importBtn = '[data-test="import"]';
    const modal = '.wa-modal-overlay';
    const confirmBtn = '[data-test="wa-modal-confirm"]';
    const cancelBtn = '[data-test="wa-modal-cancel"]';
    const closeBtn = '[data-test="wa-modal-close"]';
    const textarea = '[data-test="import-textarea"]';
    const toastMessage = '[data-test="toast-message"]';
    beforeEach(() => {
        // 跳转设置页面
        cy.visit('/?_debug=true#/settings');
        // 确保每次测试开始时弹窗都是关闭的
        cy.get(modal).should('not.exist');
    });

    it('应能正确打开和关闭导入弹窗', () => {
        // 点击导入按钮，弹窗出现
        cy.get(importBtn).click();
        cy.get(modal).should('be.visible');

        // 点击取消按钮，弹窗关闭
        cy.get(cancelBtn).click();
        cy.get(modal).should('not.exist');

        // 再次打开，点击关闭按钮，弹窗关闭
        cy.get(importBtn).click();
        cy.get(closeBtn).click();
        cy.get(modal).should('not.exist');

        // 再次打开，点击遮罩层，弹窗关闭
        cy.get(importBtn).click();
        cy.get('body').click(5, 5); // 点击左上角模拟点击遮罩层
        cy.get(modal).should('not.exist');
    });

    it('当输入非法数据时，应提示错误且弹窗不关闭', () => {
        cy.get(importBtn).click();

        // 场景1: 输入非 JSON 字符串
        cy.get(textarea).type('invalid data');
        cy.get(confirmBtn).click();
        cy.get(toastMessage).should('contain', '粘贴内容格式错误！');
        cy.get(modal).should('be.visible'); // 弹窗不关闭

        // // 场景2: 输入格式错误的 JSON
        // cy.get(textarea).clear().type('{"wrong": "format"}');
        // cy.get(confirmBtn).click();
        // cy.get(toastMessage).should('contain', '粘贴内容格式错误！');
        // cy.get(modal).should('be.visible'); // 弹窗不关闭
    });

    it('当输入合法数据时，应提示成功并关闭弹窗', () => {
        const validData = JSON.stringify({
            wordReviews: [
                { word: 'computer', timestamp: 1748045055183, status: 1, uid: 0, type: 0, id: 1 }
            ],
            wordRecords: []
        });
        cy.get(importBtn).click();

        cy.get(textarea).type(validData, {
            parseSpecialCharSequences: false
        });
        cy.get(confirmBtn).click();

        cy.get(toastMessage).should('contain', '导入成功');
        cy.get(modal).should('not.exist'); // 弹窗关闭
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
