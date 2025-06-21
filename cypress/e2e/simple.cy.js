/// <reference types="cypress" />

describe('Simple Test', () => {
    it('should have the correct page title', () => {
        cy.visit('/');
        cy.title().should('eq', '图片识别 Demo');
    });
});
