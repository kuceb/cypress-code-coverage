describe('Test', function() {
    it('testMe', function() {
        cy.visit('http://localhost:3000');
        cy.window().then(window => window.testLib.testMe());
    });
});