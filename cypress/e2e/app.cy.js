describe('App Test', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    cy.intercept('GET', 'http://localhost:3001/api/v1/tricks', {fixture: 'tricks.json'}).as('getTricks')
    cy.intercept('POST', 'http://localhost:3001/api/v1/tricks', {fixture: 'post.json'}).as('postTrick')
  })
  
  it('As a user I should see a list of tricks, fill out the form, click the send button, and see the updated tricks with the appropriate information.  As a user I should be able to click a tricks delete button and see the trick removed from the dashboard', () => {
    cy.wait('@getTricks')
      .get('.tricks')
      .find('.card').should('have.length', 3)
      .get('.card').first().contains("p", "regular treflip")
      .get('.card').first().contains("p", "flat ground")
      .get('.card').first().contains("a", "https://www.youtube.com/watch?v=XGw3YkQmNig")
      .get('.form--stance').select('regular')
      .get('.form--stance').should('have.value', 'regular')
      .get('.form--name').type('kickflip')
      .get('.form--name').should('have.value', 'kickflip')
      .get('.form--obstacle').select('ledge')
      .get('.form--obstacle').should('have.value', 'ledge')
      .get('.form--tutorial').type('https://www.youtube.com/shorts/7MqNsrwZVZE')
      .get('.form--tutorial').should('have.value', 'https://www.youtube.com/shorts/7MqNsrwZVZE')
      .get('.form--send').click()
      .get('.tricks')
      .find('.card').should('have.length', 4)
      .get('.card').first().contains("p", "regular treflip")
      .get('.card').first().contains("p", "flat ground")
      .get('.card').first().contains("a", "https://www.youtube.com/watch?v=XGw3YkQmNig")
      .get('.card').last().contains("p", "regular kickflip")
      .get('.card').last().contains("p", "ledge")
      .get('.card').last().contains("a", "https://www.youtube.com/shorts/7MqNsrwZVZE")
      .get('.delete').last().click()
      .get('.tricks')
      .find('.card').should('have.length', 3)
      .get('.card').first().contains("p", "regular treflip")
      .get('.card').first().contains("p", "flat ground")
      .get('.card').first().contains("a", "https://www.youtube.com/watch?v=XGw3YkQmNig")
  })
})