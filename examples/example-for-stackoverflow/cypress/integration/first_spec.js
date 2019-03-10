describe('Test', function() {
    it('testMe', function() {
        cy.visit('cypress/test-entrypoint.html');
        cy.window().then(window => window.testLib.testMe());
    });
});