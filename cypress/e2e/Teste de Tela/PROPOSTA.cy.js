beforeEach(() => {
  cy.AcessaCotacaoLocal();
});

describe('Teste de Campo', () => {
  describe('Verifica descrições de campo', () => {  
    it('Pessoa Fisica', () => {
      cy.buscaOfertaPF()
      cy.SelecionaPrimeiraOferta()
      cy.ValidaQtdCaracteres()
      cy.ValidaValoresPresentes()
    });

    it('Pessoa Juridica', () => {
      cy.buscaOferta()
      cy.SelecionaPrimeiraOferta()
      cy.ValidaValoresPresentesPJ()
      cy.ValidaQtdCaracteresPJ()
    });


  })

});
