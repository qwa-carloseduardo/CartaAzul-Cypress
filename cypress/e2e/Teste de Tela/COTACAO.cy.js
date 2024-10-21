beforeEach(() => {
  cy.AcessaCotacaoLocal();
});

describe('Teste de Tela', () => {

  it('Verifica Campos', () => {
   cy.verificaEstado();
   cy.testeModalDistribuicao();
   cy.TipoDeVigencia();
   cy.IniicoDaVigencia();
   cy.FinalDaVigencia();
   cy.CpfCnpj();
   cy.NomeRazaoSocial();
   cy.ToolTipNomeSocial();
   cy.botaoClientePossuiNomeSocial();
   cy.NomeSocial();
   cy.AtividadeDaEmpresa();
   cy.CargaComum();
   cy.Turismo();
   cy.Semirreboque()
   cy.ToolTipCargaComum();
   cy.ToolTipTurismo();
   cy.ToolTipSemirreboque();
   cy.TesteBuscarOferta();
  }); 
});