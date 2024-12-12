Cypress.Commands.add('LoginLocal', () => {
  cy.visit('https://apphubhml.portoseguro.brasil/autofrota/cartaazul', { timeout: 480000 });
  // cy.visit('http://localhost:4200/autofrota/cartaazul', { timeout: 480000 });
  cy.get(':nth-child(1) > :nth-child(2) > input').type('P0650050', { timeout: 480000 });
  // cy.get('#username').type('P0650050', { timeout: 480000 });
  cy.get(':nth-child(2) > :nth-child(2) > input').type('chQW@_01', { timeout: 480000 });
  // cy.get('#password').type('chQW@_01', { timeout: 480000 });
  cy.get('[type="button"]').click(); 
  // cy.get('#kc-login').click();
  // cy.contains('Informe a SUSEP do Corretor').type('COL10J', { timeout: 480000 });
  cy.contains('Informe a SUSEP do Corretor').type('COL10J', { timeout: 480000 });
  cy.contains('Informe a SUSEP do Corretor').type('COL10J', { timeout: 480000 });
  cy.contains('Acessar o sistema').click();
});

Cypress.Commands.add('AcessaCotacaoLocal', () => {
  cy.LoginLocal();
  cy.contains('button', 'Novo Orçamento', { timeout: 10000 }).click();// voltar ao normal
  // cy.get('#btn-pesquisar > .mdc-button__label').click({force : true})
  // cy.get('#btn-menu-doc-0>.mat-mdc-button-touch-target').click({force:true})
  // cy.get('#btn-item-menu-doc-0').click({force:true})
  // cy.SelecionaPrimeiraOferta()
  // cy.wait(1000); 
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
 
 
 