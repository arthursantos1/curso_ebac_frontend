/// <reference types="cypress" />

// Aqui ele vai fazer o teste de renderização do site e apresentação dos contatos
describe("Testando a home inicial do site", () => {
    // Antes de executar os teste ele vai realizar o acesso ao site
    beforeEach(() => {
        cy.visit('http://ebac-agenda-contatos-tan.vercel.app')
    })
    // Ele está verificando se apresenta inicialmente no site 3 contatos salvos
    it("Deve renderiza os 3 contatos", () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 3)
    })
})