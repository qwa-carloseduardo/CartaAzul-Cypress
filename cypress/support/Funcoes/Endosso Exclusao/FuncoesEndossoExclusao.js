Cypress.Commands.add('PesquisaEmitidaExclusao', () => {
  cy.get('button[aria-haspopup="menu"] mat-icon')
    .contains('more_vert')
    .click({ force: true });  
    cy.get('button[role="menuitem"]')
    .contains('Endosso Exclusão')
    .click({ force: true });
  cy.get('input[type="file"]').attachFile('IMPORTACAO-CORRETA03.xlsx');
  cy.contains('Iniciar carga').click()
  cy.get(':nth-child(4) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix')
  cy.get('#input-linha-inicial').type('2',{ force: true })
  cy.contains('button', 'Importar').should('be.disabled')
  cy.get('#input-linha-final').type('5',{ force: true } )
  cy.contains('button', 'Importar').should('be.disabled')
  cy.get('#input-ano-fabricacao').type('4')
  cy.contains('button', 'Importar').should('be.disabled')
  cy.get('#input-ano-modelo').type('5')
  cy.contains('button', 'Importar').should('be.disabled')
  cy.get('#input-placa').type('7')
  cy.contains('button', 'Importar').should('be.disabled')
  cy.get('#input-chassi').type('8')
  cy.contains('button', 'Importar').should('be.disabled')
  cy.get('#input-veiculo').type('3')
  cy.contains('button', 'Importar').should('be.disabled')
  cy.get('#input-tipo-uso').type('6')
  cy.contains('button', 'Importar').should('be.visible')
  cy.contains('button', 'Importar').click();
  cy.get(':nth-child(1) > .cdk-column-selecao > .mat-icon',{ timeout: 480000 }).click({ timeout: 480000 })
  cy.contains('Concluir').click()

});

Cypress.Commands.add('TransmiteEndossoExclusao', () => {
  cy.get('#span-numero-orcamento', { timeout: 480000 })
  .invoke('text')
  .then(($numeroOrcamento) => {
    cy.log($numeroOrcamento);
  cy.get('#btn-salvar').click();
  cy.get('#transmitir').click();
  cy.get('#checkbox-transmitir-input').click();
  cy.get('#btn-transmitir-proposta').click({ force: true });

  cy.get('#input-numero-orcamento', { timeout: 480000 }).type($numeroOrcamento.trim(), { force: true });
  cy.get('#btn-pesquisar').click({ force: true });
  cy.get('#tipo-negocio-doc-0', { timeout: 480000 }).should('have.text', 'Endosso de Exclusão'); 
});
});

Cypress.Commands.add('FormaPagamentoEndossoExclusao', () => {
  cy.get('mat-select[formcontrolname="formaPagamento"]').click({ force: true }, { timeout: 480000 });
  cy.get('#option-forma-pagamento-0').click({force: true})
  cy.get('mat-select[formcontrolname="valorSeguro"]').click({ force: true });
  cy.get('#option-valor-seguro-0').click()
});
