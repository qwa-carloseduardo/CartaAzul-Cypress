beforeEach(() => {
  cy.AcessaCotacaoLocal();
});

describe('Teste de Campo', () => {
  describe('Verifica descrições de campo', () => {  
    for (let i = 0; i < 1; i++) {
    it.only(`Pessoa Fisica - Execução ${i + 1}`, () => {
     cy.buscaOferta('PF','');
      cy.SelecionaPrimeiraOferta()
      cy.ValidaQtdCaracteres()
      cy.ValidaValoresPresentes()
      cy.ValidaEndereco()
    });
  }
    it('Pessoa Juridica', () => {
      cy.buscaOferta()
      cy.SelecionaPrimeiraOferta()
      cy.ValidaValoresPresentesPJ()
      cy.ValidaQtdCaracteresPJ()
    });


  })

});
