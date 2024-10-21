beforeEach(() => {
  cy.AcessaCotacaoLocal();
});

describe('Teste de Endosso de Inclusão', () => {
 
  for (let i = 0; i < 5; i++) {
  it('Cancela Apolice Pessoa Fisica', () => {
    cy.TransmitePF();
    cy.CancelaApolice();
    cy.SelecionaPrimeiraOferta();
    cy.FormaPagamentoEndossoExclusao()
    cy.validaCancelamento()
  });

  it('Cancela Apolice Pessoa Juridica', () => {
    cy.TransmitePJ();
    cy.CancelaApolice();
    cy.SelecionaPrimeiraOferta();
    cy.FormaPagamentoEndossoExclusao()
    cy.validaCancelamento()
  });
}

  after(() => {
    cy.log('Documentos Gerados:');
    documentosGerados.forEach(doc => {
      cy.log(`${doc.tipo}: ${doc.numero}`);
    });
    cy.wrap({ documentosGerados });
  });
});
