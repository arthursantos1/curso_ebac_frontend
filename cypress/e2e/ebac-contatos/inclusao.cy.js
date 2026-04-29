/// <reference types="cypress" />

describe("Devera realizar a inclusão de um novo contato", () => {
    beforeEach(() => {
        cy.visit('http://ebac-agenda-contatos-tan.vercel.app')
    })

    it('Deve preencher o formulário de inclusão de novo contato', () => {
        cy.get('input[type="text"]').type('Arthur Santos')
        cy.get('input[type="email"]').type('arthur.vale@teste.com.br')
        cy.get('input[type="tel"]').type('(61)98624-0976')
        cy.get('.adicionar').click()
    })
})