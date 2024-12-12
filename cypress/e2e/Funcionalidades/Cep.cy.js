let documentosGerados = [];
const quantidade = Cypress.env('quantidade') || 1;
const cep = Cypress.env('cep') || '04923110';

beforeEach(() => {
    cy.AcessaCotacaoLocal();
    console.log('[Info] Acessando sistema Carta Azul');
});

describe(`Execução com cep: ${cep}`, () => {
    for (let i = 0; i < quantidade; i++) {
        it.only(`${i + 1} - Cep ${cep} - Execução ${i + 1}`, () => {
            cy.buscaOferta('PF', '');
            cy.SelecionaPrimeiraOferta();
            cy.teste(cep);
        });
    }
    after(() => {
        const output = JSON.stringify(documentosGerados, null, 2);
        cy.writeFile('cypress/documentosGerados.json', output);
        cy.log('Documentos gerados salvos em documentosGerados.json');
        console.log('Documentos gerados:', documentosGerados);
    });
});
