describe('App component', () => {

    beforeEach(() => cy.visit('http://localhost:3000/'))

    it('starts with spinning logo', () => {
        cy.get('.loading-container')
        .should('exist')

        cy.get('.header-container ')
        .should('not.exist')
    })

    it('header is visible', () => {
        cy.get('.header-container > .header-container_logo > img')
        .should('exist')
        .should('have.attr', 'src', 'http://www.xxxlutz.com/wp-content/uploads/2018/07/xxxlutz.jpg')
    })

    it('filter form modifies results order', () => {
        cy.get('.filterForm-container__select')
        .should('exist')
        .select('Fler kriterier')
        .should('have.value', 'Fler kriterier')
        .get('.products-container > :nth-child(1) > .products-container__product-data > h2')
        .should('have.text', 'Smith-Bins')
        
        cy.get('.filterForm-container__select')
        .select('Pris stigande')
        .should('have.value', 'Pris stigande')
        .get('.products-container > :nth-child(1) > .products-container__product-data > h2')
        .should('have.text', 'Miller LLC')
        
        cy.get('.filterForm-container__select')
        .select('Pris fallande')
        .should('have.value', 'Pris fallande')
        .get('.products-container > :nth-child(1) > .products-container__product-data > h2')
        .should('have.text', 'Bergnaum-Bartoletti')      
        
        cy.get('.filterForm-container__select')
        .select('Stigande (A till Z)')
        .should('have.value', 'Stigande (A till Z)')
        .get('.products-container > :nth-child(1) > .products-container__product-data > h2')
        .should('have.text', 'Kautzer-Hessel')
        
        cy.get('.filterForm-container__select')
        .select('Descending (Z till A)')
        .should('have.value', 'Descending (Z till A)')
        .get('.products-container > :nth-child(1) > .products-container__product-data > h2')
        .should('have.text', 'Reynolds, Conroy and Bernhard')
    })

    it('footer is visible', () => {
        cy.get('.footer-container > .footer-container__links > a')
        .should('exist')
        .should('have.text', 'IMPRESSUM / ANVÄNDARVILLKOR')
        .should('have.attr', 'href', 'https://www.xxxlutz.se/c/impressum', 'https://www.xxxlutz.se/c/privacy')
        .click({ multiple: true })
        cy.url().should('include', 'localhost:3000')

        cy.get('.footer-container > .footer-container__media > a')
        .should('exist')
        .should('have.attr', 'href', 'https://www.facebook.com/xxxlutz.se/?fref=ts', 'https://www.instagram.com/xxxlutzsverige/')
        .click({ multiple: true })
        cy.url().should('include', 'localhost:3000')

    })
})
