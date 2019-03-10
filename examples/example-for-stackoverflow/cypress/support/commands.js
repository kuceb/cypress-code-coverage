// I have absolutely no idea what is going on here
// Adapted from https://github.com/paulfalgout/cypress-coverage-example
afterEach(function() {
    cy.window().then(window => {
        const coverage = window.__coverage__;
        if (!coverage) return;
        cy.task('coverage', coverage).then(map => {
            cy.writeFile(`.nyc_output/out.json`, map);
        });
    });
});