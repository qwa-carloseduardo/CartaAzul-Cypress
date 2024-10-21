Cypress.Commands.add('CancelaApolice', () => {
  cy.get('button[aria-haspopup="menu"] mat-icon')
    .contains('more_vert')
    .click({ force: true });  
    cy.get('button[role="menuitem"]')
    .contains('Cancelar Apólice')
    .click({ force: true });
  
    cy.get('button')
  .contains('Sim')  
  .click({ force: true });  

});

Cypress.Commands.add('validaCancelamento', () => {
  cy.get('#span-numero-orcamento', { timeout: 480000 })
  .invoke('text')
  .then(($numeroOrcamento) => {
    Cypress.env('numeroOrcamentoGerado', $numeroOrcamento.trim());
    cy.log($numeroOrcamento);
  cy.get('#btn-salvar').click();
  cy.get('#transmitir').click();
  cy.get('#checkbox-transmitir-input').click();
  cy.get('#btn-transmitir-proposta').click({ force: true });
  
  cy.get('#input-numero-orcamento').type($numeroOrcamento.trim(), { force: true });
  cy.get('#btn-pesquisar').click({ force: true });
  cy.get('#tipo-negocio-doc-0', { timeout: 480000 })
  .invoke('text')
  .then((text) => {
    expect(text.trim()).to.eq('Endosso de Cancelamento');
  });
});
});