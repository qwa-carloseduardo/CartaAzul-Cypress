Cypress.Commands.add('LoginLocal', () => {
  cy.visit('https://apphubtst.portoseguro.brasil/autofrota/cartaazul', { timeout: 480000 });
  cy.get(':nth-child(1) > :nth-child(2) > input').type('P0650050', { timeout: 480000 });
  cy.get(':nth-child(2) > :nth-child(2) > input').type('chQW@_01', { timeout: 480000 });
  cy.get('[type="button"]').click();
  // cy.contains('Informe a SUSEP do Corretor').type('COL10J', { timeout: 480000 });
  cy.contains('Informe a SUSEP do Corretor').type('COL10J', { timeout: 480000 });
  cy.contains('Acessar o sistema').click();
});

Cypress.Commands.add('AcessaCotacaoLocal', () => {
  cy.LoginLocal();
  cy.contains('button', 'Novo Orçamento', { timeout: 10000 }).click();
});

Cypress.Commands.add('AcessaCalculoLocal', () => {
  cy.AcessaCotacaoLocal();
  cy.buscaOferta()
  cy.VerificaIntegridadeDados()
});


Cypress.Commands.add('AcessaProposta', () => {
  cy.AcessaCalculoLocal();
  cy.SelecionaPrimeiraOferta()
});

Cypress.Commands.add('AcessaTelaImportacao', () => {
  cy.AcessaProposta();
  cy.contains('button', ' Incluir/Editar Itens ', { timeout: 10000 }).click();
});
 
 
 