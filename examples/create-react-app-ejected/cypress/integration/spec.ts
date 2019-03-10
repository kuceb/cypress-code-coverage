describe('Homepage', () => {
  beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

  it('works', () => {
    cy.get('.btn')
      .should('have.text', 'click me')
      .click()
      .should('have.text', 'click me again')
      .click()
  })

  it('works 2', () => {
		cy.get('.btn').click().click().click().click()

	})
})
