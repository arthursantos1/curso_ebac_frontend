/// <reference types="cypress" />

describe("Deverá excluir um contato", () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app')
    })

    it("Excluindo um contato da lista", () => {
        cy.get('.delete').first().click()
    })
})