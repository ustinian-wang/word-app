context('首页测试', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    // it('标题应包含"单词学习"', () => {
    //     cy.title().should('include', '单词学习');
    // });

    it('点击悬浮菜单中的 "recognize" 按钮', () => {
        cy.get('[data-test="fabMenu"]').click();
        cy.get('[data-test="recognize"]').click();
        // 你可以在这里添加断言来验证点击后的行为
    });

    it('点击悬浮菜单中的 "records" 按钮', () => {
        cy.get('[data-test="fabMenu"]').click();
        cy.get('[data-test="records"]').click();
        // 你可以在这里添加断言来验证点击后的行为
    });

    it('点击悬-浮菜单中的 "settings" 按钮', () => {
        cy.get('[data-test="fabMenu"]').click();
        cy.wait(100);
        cy.get('[data-test="settings"]').click();
        // 你可以在这里添加断言来验证点击后的行为
    });

    it.skip('点击悬浮菜单中的 "fullscreen" 按钮', () => {
        cy.get('[data-test="fabMenu"]').click();
        cy.wait(1000);
        cy.get('[data-test="fullscreen"]').click();
        // 你可以在这里添加断言来验证点击后的行为
    });
}); 