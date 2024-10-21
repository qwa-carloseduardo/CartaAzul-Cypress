beforeEach(() => {
  cy.AcessaCotacaoLocal();
});

describe('Teste de Endosso de Inclusão', () => {
 
  it('Exclui veiculos', () => {
   cy.TransmitePF();
   cy.PesquisaEmitidaExclusao();
   cy.SelecionaPrimeiraOferta();
   cy.FormaPagamentoEndossoExclusao();
   cy.TransmiteEndossoExclusao()

  });
  
});
