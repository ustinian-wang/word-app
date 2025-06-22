context('图片识别页面', () => {
    beforeEach(() => {
        cy.visit('/#/recognize');
    });

    it('应成功加载并显示核心功能', () => {
        // 验证URL
        cy.location('hash').should('include', '/recognize');
        
        // 验证标题
        cy.contains('h1', '图片识别').should('be.visible');

        // 验证上传区域可见
        cy.get('.upload-area').should('be.visible');
    });
}); 