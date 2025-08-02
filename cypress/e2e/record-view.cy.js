import { setToken } from "./config";

context.skip('学习记录页面', () => {
    beforeEach(() => {
        setToken();
        cy.visit('http://www.dict.wang/#/records');
    });

    it('首次访问时，应显示"暂无学习记录"', () => {
        // 验证URL是否正确
        cy.location('hash').should('include', '/records');
        // 验证页面是否显示了空状态的提示文本
        cy.contains('p', '暂无学习记录').should('be.visible');
        // 确认图表容器此时不存在
        cy.get('.chart-container').should('not.exist');
    });

    it('点击"生成测试数据"按钮后，应正确显示图表', () => {

        // 访问学习记录页面

        // 找到并点击"生成测试数据"按钮
        cy.contains('button', '生成测试数据').should('be.visible').click();
        
        // 验证空状态提示已经消失
        cy.get('.empty-state').should('not.exist');
        
        // 验证图表容器已出现，并且其内部成功渲染了 canvas 元素
        cy.get('.chart-container').should('be.visible').find('canvas').should('be.visible');
    });

    it('可以成功切换日期范围', () => {
        // 准备工作：先生成数据以显示图表和日期选择器
        cy.contains('button', '生成测试数据').click();
        cy.get('.chart-container').should('be.visible');

        const dateRangeSelector = '.date-range-picker select';

        // 验证下拉菜单的默认值是"最近7天"
        cy.get(dateRangeSelector).should('have.value', '7');

        // 切换到"最近30天"并验证值已更新
        cy.get(dateRangeSelector).select('30');
        cy.get(dateRangeSelector).should('have.value', '30');
        
        // 切换到"全部"并验证值已更新
        cy.get(dateRangeSelector).select('all');
        cy.get(dateRangeSelector).should('have.value', 'all');
    });
}); 
