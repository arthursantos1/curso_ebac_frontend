/// <reference types="cypress" />

describe("Deverar realizar a alteração de um contato salvo", () => {
    beforeEach(() => {
        cy.visit('http://ebac-agenda-contatos-tan.vercel.app')
    })

    it("Deve preencher um dos campos e salvar", () => {
        cy.get('.edit').first().click()
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('(11) 82989-2879')
        cy.get('.alterar').click()
    })

    it("Deve preencher um dos campos e cancelar", () => {
        cy.get('.edit').first().click()
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('(11) 82939-7070')
        cy.get('.cancelar').click()
    })
})