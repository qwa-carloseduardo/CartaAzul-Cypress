let documentosGerados = [];

beforeEach(() => {
  cy.AcessaCotacaoLocal();
});

describe('Teste de Endosso de Inclusão', () => {
  for (let i = 0; i < 1; i++) {
    it('Inclui veiculos Pessoa Fisica', () => {
      cy.TransmitePF();
      cy.InsereTresNovosItens().then((numeroOrcamento) => {
        documentosGerados.push({ tipo: 'PF', numero: numeroOrcamento });
      });
    });

    it('Inclui veiculos Pessoa Juridica', () => {
      cy.TransmitePJ();
      cy.InsereTresNovosItens().then((numeroOrcamento) => {
        documentosGerados.push({ tipo: 'PJ', numero: numeroOrcamento });
      });
    });
  }

  after(() => {
    cy.wrap(documentosGerados).then((docs) => {
      cy.log('Documentos Gerados:');
      docs.forEach(doc => {
        cy.log(`${doc.tipo}: ${doc.numero}`);
      });
    });
  });
});