

describe('My First Test', () => {
    it('finds the content "[..., Code Clubs Dashboard ]"', () => {
      cy.visit('localhost:3000')
  
      cy.contains('[..., Code Clubs Dashboard ]')
    })
  })