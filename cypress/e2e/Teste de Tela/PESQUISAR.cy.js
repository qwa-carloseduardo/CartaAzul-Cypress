beforeEach(() => {
  cy.LoginLocal();
});

describe('Teste de Campo', () => {
  describe('Verifica descrições de campo', () => {  
    it('Tipo de Busca', () => {
      cy.TipoDeBusca();
      cy.TipoDeNegocio();
      cy.Situacao();
      cy.NomeProponente();
      cy.CpfCnpj();
      cy.NumeroOrcamento();
      cy.Apolice();
      cy.PesquisarOrcamento();
      cy.PesquisarProposta();
      cy.CriaCampoNumeroOrcamento();
      cy.ApenasNumeroPropostaOrcamentoHabildescribeados();
      cy.CriaCampoNumeroProposta();
      cy.CriaCampoNumeroOrcamento();
      cy.InserirCaracterNomeProponenteCPFdesabildescribea()
      cy.InserirCaracterCPFNomeProponentedesabildescribea()
      cy.PesquisaSemFiltro()
      cy.BotaoPesquisarDesabildescribeadoSelecionandoOrcamento();
      cy.BotaoPesquisarDesabildescribeadoSelecionandoProposta();
      cy.AcessaTelaPesquisa();
      cy.Orcamento();
      cy.Proposta();
      cy.BuscaPorNomeProponente();
      cy.BuscarPorCPf();
      cy.BuscarPorTipoSeguroNovo();
      cy.BuscarPorTipoRenovacaoCia();
      cy.EndossoInclusao();
      cy.EndossoExclusao();
      cy.EndossoCancelamento();
      cy.Calculado();
      cy.Sdescribeuacao();
      cy.Transmdescribeida();
      cy.Emdescribeida();
      cy.Pendente();
      cy.Incompleto();
      cy.EndossoNaoCalculado();
      cy.NumeroDeDocumento();
      cy.Apolice();
    });

  })

});
