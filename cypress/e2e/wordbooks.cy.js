context('词库页面', () => {
    beforeEach(() => {
        cy.visit('/#/wordbooks');
    });

    it('应成功加载并显示词库列表', () => {
        // 验证URL
        cy.location('hash').should('include', '/wordbooks');
        
        // 验证标题
        cy.contains('.title-bar .title', '词库').should('be.visible');

        // 验证至少有一个词库项目被渲染
        cy.get('.book-item').should('have.length.greaterThan', 0);
    });
}); 