let documentosGerados = [];
const apoliceStatus = Cypress.env('apoliceStatus') || 'Transmitida';
const tipo = Cypress.env('tipo') || 'PF';
const quantidade = Number(Cypress.env('qtdApolices')) || 1;
const renovacao = Cypress.env('numeroApolice') || null; 

beforeEach(() => {
    cy.AcessaCotacaoLocal();
    console.log('[Info] Acessando sistema Carta Azul');
});

describe('[Info] Criando Apolice do tipo:', () => {
        console.log('[Info] Pessoa Fisica');
        for (let i = 0; i < quantidade; i++) {
            it(`Pessoa Fisica - Execução ${i + 1}`, () => {
                cy.Transmitir(tipo,renovacao).then((docNumeroPF) => {
                    documentosGerados.push({ tipo: tipo, numero: docNumeroPF, status: statusDocumento });
                });
            });
        }
        after(() => {
            const output = JSON.stringify(documentosGerados, null, 2);
            cy.writeFile('cypress/documentosGerados.json', output);
            cy.log('Documentos gerados salvos em documentosGerados.json');
            console.log('Documentos gerados:', documentosGerados);
        });
    });
