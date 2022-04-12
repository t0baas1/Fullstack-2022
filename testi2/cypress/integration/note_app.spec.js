describe('Note app', function() {
    beforeEach(function() {
        cy.visit('http://localhost:3000')
    })
    it('front page can be opened', function() {
        cy.contains('Notes')
        cy.contains('Note app, Department of Computer Sience, University of Helsinki 2022')
    })

    it('login form can be opened', function() {
        cy.contains('login').click()
        cy.get('#username').type('Testikäyttäjä1')
        cy.get('#password').type('12345')
        cy.get('#login-button').click()

        cy.contains('Testi Testinen logged in')
    })

    it.only('login fails with wrong password', function() {
        cy.contains('login').click()
        cy.get('#username').type('mluukkai')
        cy.get('#password').type('wrong')
        cy.get('#login-button').click()
    
        cy.get('.error')
          .should('contain', 'wrong credentials') 
          .and('have.css', 'color', 'rgb(255, 0, 0)')
          .and('have.css', 'border-style', 'solid')
        
        cy.get('html').should('not.contain', 'Matti Luukkainen logged in')
      })

    describe('when logged in', function() {
        beforeEach(function() {
            cy.contains('login').click()
            cy.get('#username').type('Testikäyttäjä1')
            cy.get('#password').type('12345')
            cy.get('#login-button').click()
        })

        it('a new note can be created', function() {
            cy.contains('new note').click()
            cy.get('input').type('a note created by cypress')
            cy.get('#save-button').click()
            cy.contains('a note created by cypress')
        })

        describe('and a note exists', function() {
            beforeEach(function () {
                cy.contains('new note').click()
                cy.get('input').type('another note cypress')
                cy.contains('save').click()
            })

            it('it can be made important', function () {
                cy.contains('another note cypress')
                  .contains('make important')
                  .click()
                
                cy.contains('another note cypress')
                  .contains('make not important')
            })
        })
    })
})