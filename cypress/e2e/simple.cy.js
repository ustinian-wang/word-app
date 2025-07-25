import { setToken } from "./config";
context('首页', () => {
    beforeEach(() => {
        setToken();
    });
    it('should have the correct page title', () => {
        cy.visit('http://www.dict.wang/#/');
        cy.title().should('eq', '图片识别 Demo');
    });
});
