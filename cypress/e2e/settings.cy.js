context('设置页面', () => {
    beforeEach(() => {
        cy.visit('/#/settings');
    });

    it('应成功加载并显示设置项', () => {
        // 验证URL
        cy.location('hash').should('include', '/settings');

        // 验证标题
        cy.contains('.settings-title', '设置').should('be.visible');

        // 验证至少有一个设置项被渲染
        cy.get('.setting-item').should('have.length.greaterThan', 0);
    });
});
context('清理缓存', () => {
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

    it.only('导出数据： 有需要导出的学习记录', () => {
        clearAllCache();
        generateCache();
        cy.visit('/?_debug=true#/settings');
        cy.get('[data-test="export"]').click({ force: true }); // 点击导出
        // 由于剪切板不可用，这个时候会走确认弹窗的逻辑
        // cy.get('[data-test="confirm"]').click({ force: true }); // 点击确认
        cy.get('[data-test="toast-message"]').should('contain', '导出成功');
    });
});

function trigger_exportData() {
    cy.get('[data-test="export"]').click({ force: true }); // 点击导出
    cy.get('[data-test="confirm"]').click({ force: true }); // 点击确认
}

function expect_exportDataEmpty() {
    cy.get('[data-test="export"]').click({ force: true }); // 点击导出
    // cy.get('[data-test="confirm"]').click({ force: true }); // 点击确认
    cy.get('[data-test="toast-message"]').should('contain', '没有需要导出的学习记录。');
}
function expect_exportDataSuccess() {
    cy.get('[data-test="export"]').click(); // 点击导出
    cy.get('[data-test="confirm"]').click(); // 点击确认
    cy.get('[data-test="toast-message"]').should('contain', '导出成功');
}

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
