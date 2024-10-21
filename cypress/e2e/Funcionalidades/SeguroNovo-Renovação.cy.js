let documentosGerados = [];
let statusDocumento = '';

beforeEach(() => {
    cy.AcessaCotacaoLocal();
    console.log('[Info] Acessando sistema Carta Azul');
});

describe('[Info] Criando Apolice do tipo:', () => {
        console.log('[Info] Pessoa Fisica');
        for (let i = 0; i < 1; i++) {
            it(`Pessoa Fisica - Execução ${i + 1}`, () => {
                const tipo = 'PF';
                const renovacao = 953413609;
                cy.Transmitir(tipo,renovacao).then((docNumeroPF) => {
                    statusDocumento = Cypress.env('statusDocumento');
                    documentosGerados.push({ tipo: tipo, numero: docNumeroPF, status: statusDocumento });
                });
            });
        }
});
