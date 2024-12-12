Cypress.Commands.add('insereNumLetraEspecial', (referencia) => {
  cy.get(referencia).type('a1%'.repeat(11),{ force: true });
});

Cypress.Commands.add('insereNum', (referencia,limite) => {
  cy.get(referencia).type('1'.repeat(limite),{ force: true });
});

Cypress.Commands.add('insereNumLetra', (referencia,limite) => {
  cy.get(referencia).type('1a'.repeat(limite),{ force: true });
});

Cypress.Commands.add('insereCaractere', (referencia,caractere,limite) => {
  cy.get(referencia).type('1a'.repeat(limite),{ force: true });
});

Cypress.Commands.add('insereTexto', (referencia,texto) => {
  cy.get(referencia).type(texto,{ force: true });
});

Cypress.Commands.add('verificaEstadoBotao', (referencia) => {
  cy.get(referencia).should('be.checked');
 });

 Cypress.Commands.add('verificaHabilitado', (referencia) => {
  cy.get(referencia).should('be.visible');
 });

 Cypress.Commands.add('verificaContemValor  ', (referencia) => {
  cy.get(referencia).should('not.be.empty'); ;
 });

 Cypress.Commands.add('verificaDesabilitado', (referencia) => {
  cy.get(referencia).should('be.disabled');
 });

 Cypress.Commands.add('verificaValorPresenteNoCampo', (referencia,valor) => {
  cy.get(referencia).should('have.value', valor);
 });

 Cypress.Commands.add('verificaValorNoCampo', (referencia) => {
  cy.get(referencia).should('have.css', 'pointer-events', 'none');
 });

 Cypress.Commands.add('clicaCampo', (referencia) => {
  cy.get(referencia).click();
});

 Cypress.Commands.add('validaItem', (referencia,item) => {
  cy.get(referencia).contains(item).should('exist');
 });

 Cypress.Commands.add('AcessaCampo', (referencia) => {
  cy.get(referencia);
 });

 
 Cypress.Commands.add('PressionaEsc', () => {
  cy.focused().type('{esc}');
 });

 Cypress.Commands.add('PressionaTab', () => {
  cy.type('{tab}');
 });

 
 
 Cypress.Commands.add('DaClickNaTela', () => {
  cy.get('body').click(100, 200);
 });

 Cypress.Commands.add('gerarCPF', () => {
  function gerarDigito(base) {
    let soma = 0;
    for (let i = 0; i < base.length; i++) {
      soma += parseInt(base.charAt(i)) * ((base.length + 1) - i);
    }
    let resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }

  const base = Array.from({ length: 9 }, () => Math.floor(Math.random() * 9)).join('');
  const digito1 = gerarDigito(base);
  const digito2 = gerarDigito(base + digito1);
  return base + digito1 + digito2;
});

