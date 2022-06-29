

describe('My First Test', () => {
    it('finds the content "[..., Code Clubs Dashboard ]"', () => {
      cy.visit('localhost:3000')
  
      cy.contains('[..., Code Clubs Dashboard ]')
    })
    it('Clicking button and add item', function (){
      // - Type something into the text box
      const newItem = 'Gabor'
      cy.get('.student--input')
      .type(`${newItem}`)
  // - Click the submit button
      cy.get('.addstudent').click()
      cy.get('li')
       //.should('have.length', 5)
       .last()
       .should('have.text', newItem)
  })
})