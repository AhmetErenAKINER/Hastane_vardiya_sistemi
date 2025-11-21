import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Kullanıcı giriş ekranındadır", () => {
    cy.visit("/");
});

When("{string} adıyla giriş yapar", (name: string) => {
    cy.get('[data-testid="login-btn"]').click();
});

When("{string} bölümünden randevu alır", (department: string) => {
    cy.get('[data-testid="department-select"]').select(department);
    cy.get('[data-testid="book-btn"]').click();
    // Wait for alert or update
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Randevu oluşturuldu!`)
    });
});

Then("Randevularım listesinde {string} görünmelidir", (department: string) => {
    cy.get('[data-testid="appointment-list"]').should('contain', department);
});
