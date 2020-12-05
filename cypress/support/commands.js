Cypress.Commands.add('login', ({ username, password }) => {
  cy.xpath('', { timeout: 3000 }).type(username);
  cy.xpath('').type(password);
  cy.xpath('').click();
  cy.wait(4000);
});
