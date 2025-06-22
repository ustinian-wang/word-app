describe('词库页面', () => {
    beforeEach(() => {
        cy.visit('/#/wordbooks');
    });

    it('应成功加载并显示词库列表', () => {
        // 验证URL
        cy.location('hash').should('include', '/wordbooks');
        
        // 验证标题
        cy.contains('.title', '词库管理').should('be.visible');

        // 验证词库列表已渲染，并且包含多个项目
        cy.get('[data-test="book-list"]').should('be.visible');
        cy.get('[data-test="book-list"] li').should('have.length.greaterThan', 1);
    });

    it('应能成功切换当前选择的词库', () => {
        // 初始状态：第一个词库是当前词库，没有切换按钮
        cy.get('[data-test="book-list"] li').first().as('firstBook');
        cy.get('@firstBook').should('contain.text', '当前');
        cy.get('@firstBook').find('[data-test="switch-btn"]').should('not.exist');
        
        // 点击第二个词库的"切换"按钮
        cy.get('[data-test="book-list"] li').eq(1).as('secondBook');
        cy.get('@secondBook').find('[data-test="switch-btn"]').click();

        // 验证成功提示
        cy.contains('已切换词库').should('be.visible');

        // 新状态：第二个词库变为当前词库
        cy.get('@secondBook').should('contain.text', '当前');
        cy.get('@secondBook').find('[data-test="switch-btn"]').should('not.exist');

        // 第一个词库现在应该有"切换"按钮了
        cy.get('@firstBook').find('[data-test="switch-btn"]').should('be.visible');
    });
});
