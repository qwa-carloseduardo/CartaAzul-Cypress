beforeEach(() => {
  cy.AcessaTelaImportacao();
});

describe('Teste da tela Importacao', () => {
    it('Tipo de Busca', () => {
      cy.Veiculos();
      cy.TipoUso();
      cy.Placa();
      cy.Chassi()
      cy.Fabricacao()
      cy.Modelo()
      cy.Veiculo()
      cy.TipoUsoTabela()
      cy.FuncionalidadeImportar()
      cy.SelecionaArquivo()
      cy.ValidarInfoArquivo();
      cy.ValidaBotoes()
    });

    
});
