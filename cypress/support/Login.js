// Cypress.Commands.add('Login', () => {
//   cy.visit('https://apphubhml.portoseguro.brasil/autofrota/cartaazul', { timeout: 480000 });
//   cy.get(':nth-child(1) > :nth-child(2) > input').type('P0650050');
//   cy.get(':nth-child(2) > :nth-child(2) > input').type('chQW@_01');
//   cy.get('[type="button"]').click();
//   cy.wait(5000);
//   cy.get('body').then(($body) => {
//     if ($body.find('button:contains("Ir para Home")').length > 0) {
//       cy.contains('button', 'Ir para Home', { timeout: 480000 }).click();
//       cy.contains('Informe a SUSEP do Corretor').type('COL10J', { timeout: 480000 });
//       cy.contains('Acessar o sistema').click();
//       cy.contains('Novo Orçamento').click();
//     } else {
//       cy.contains('Informe a SUSEP do Corretor').type('COL10J', { timeout: 480000 });
//       cy.contains('Acessar o sistema').click();
//     }
//   });
// });

// Cypress.Commands.add('AcessaCotacao', () => {
//   cy.Login();
//   cy.contains('button', 'Novo Orçamento', { timeout: 10000 }).click();
// });

// Cypress.Commands.add('AcessaCalculo', () => {
//   cy.AcessaCotacao();
//   cy.buscaOferta()
// });
