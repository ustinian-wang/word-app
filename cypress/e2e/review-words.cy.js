context('复习单词页面', () => {
    beforeEach(() => {
        // 访问复习单词页面
        cy.visit('/#/reviewWords');
    });

    it('应成功加载并显示第一个单词', () => {
        // 验证URL是否正确
        cy.location('hash').should('include', '/reviewWords');
        // 验证单词卡片是否可见
        cy.get('.word-en').should('be.visible');
    });
}); 