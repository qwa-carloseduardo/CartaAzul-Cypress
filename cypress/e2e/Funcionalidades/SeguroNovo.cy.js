const quantidade = Cypress.env('qtdApolices');
const renovacao = Cypress.env('numeroApolice');
let documentosGerados = [];

function gerarDocumentos(tipo) {
    return cy.Transmitir(tipo,renovacao).then((docNumeroPF) => {
        const statusDocumento = Cypress.env('statusDocumento');
        documentosGerados.push({ tipo: tipo, numero: docNumeroPF, status: statusDocumento });
    });
}

function garantirDocumentosGerados(tipo) {
    return new Cypress.Promise((resolve) => {
        function verificarDocumentos() {
            if (documentosGerados.length <= quantidade) {
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

garantirDocumentosGerados('tipoDesejado').then(() => {
    cy.log('Todos os documentos gerados:', documentosGerados);
});
