context('首页', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('应成功加载首页并显示所有核心区块', () => {
        // 验证URL是根路径
        cy.location('hash').should('equal', '#/');
        
        // 验证“每日精选单词”和“每日英文句子”区块都可见
        cy.get('[data-test="daily-word-block"]').should('be.visible');
        cy.get('[data-test="daily-sentence-block"]').should('be.visible');
    });

    it('“每日精选”区块应包含所有动态内容', () => {
        // 验证每日单词的各部分都已渲染
        cy.get('[data-test="daily-word-en"]').should('not.be.empty');
        cy.get('[data-test="daily-word-zh"]').should('not.be.empty');
        
        // 验证每日句子的各部分都已渲染
        cy.get('[data-test="daily-sentence-en"]').should('not.be.empty');
        cy.get('[data-test="daily-sentence-zh"]').should('not.be.empty');
    });

    it('点击“背单词”按钮应跳转到单词学习页面', () => {
        cy.get('[data-test="primary"]').click();
        cy.location('hash').should('include', '/words');
    });

    it('点击“复习”按钮应跳转到单词复习页面', () => {
        cy.get('[data-test="secondary"]').click();
        cy.location('hash').should('include', '/reviewWords');
    });

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