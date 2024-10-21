beforeEach(() => {
    cy.AcessaCotacaoLocal();
    console.log('[Info] Acessando sistema Carta Azul');
});

describe('Seguro Novo', () => {
    it('Deve realizar o teste de geração de apólice', () => {
        const tipo = Cypress.env('tipo');
        const quantidade = Number(Cypress.env('qtdApolices')) || 1;
        const renovacao = Cypress.env('numeroApolice') || null; 
        
        let documentosGerados = [];

        function gerarDocumentos(tipo) {
            return cy.Transmitir(tipo, renovacao).then((docNumeroPF) => {
                const statusDocumento = Cypress.env('statusDocumento');
                documentosGerados.push({ tipo: tipo, numero: docNumeroPF, status: statusDocumento });
            });
        }

        function garantirDocumentosGerados(tipo) {
            return new Cypress.Promise((resolve) => {
                function verificarDocumentos() {
                    if (documentosGerados.length < quantidade) {
                        gerarDocumentos(tipo).then(() => {
                            verificarDocumentos(); 
                        });
                    } else {
                        resolve();
                    }
                }
                verificarDocumentos(); 
            });
        }

        garantirDocumentosGerados(tipo).then(() => {
            cy.log('Todos os documentos gerados:');
            console.log(documentosGerados);
        });
    });
});
