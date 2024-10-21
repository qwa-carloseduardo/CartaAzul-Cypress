beforeEach(() => {
  cy.AcessaCalculoLocal();
});

describe('Teste de Campo', () => {
  describe('Verifica descrições de campo', () => {  
    it('Pessoa Fisica', () => {
    cy.NumeroOrcamento();
    cy.Oferta();
    cy.ModalDesconto();
    cy.Percentual();
    cy.TipoDeDesconto();
    cy.RemoverAjustes();
    cy.FecharModal()
    cy.AplicarDescontoSobreAgravo()
      cy.FormaPagamentoCalculo()
    cy.testaSlider()
    cy.VerificaPDF()
    cy.GerarPDF()
  })
});
});
