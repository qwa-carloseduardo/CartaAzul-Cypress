Cypress.Commands.add('ValidaValoresPresentes', () => {
  cy.PaisNascimento()
  cy.FaixaRendaMensal()
  cy.Sexo()
  cy.EstadoCivil()
  cy.FormasPagamento()
});

Cypress.Commands.add('ValidaQtdCaracteres', () => {
  cy.DataNascimento()
  cy.Profissao()
  cy.DadosContato()
});

Cypress.Commands.add('ValidaValoresPresentesPJ', () => {
cy.AtividadeEmpresa()
cy.TipoEmpresa()
cy.PatrimonioLiquido()
cy.ReceitaOperacional()
});

Cypress.Commands.add('ValidaQtdCaracteresPJ', () => {

});


Cypress.Commands.add('AtividadeEmpresa', () => {
  cy.get('#input-atividade-empresa')
  .invoke('val')
  .then((valor) => {
    expect(valor.trim().toLowerCase()).to.equal('reprodução de software em qualquer suporte');
  });
});

Cypress.Commands.add('TipoEmpresa', () => {
  cy.get('#select-tipoEmpresa').click({ force: true })
  cy.get('#option-tipoEmpresa-0').should('contain.text', 'Empresa Privada').click({ force: true });

});

Cypress.Commands.add('PatrimonioLiquido', () => {
  cy.get('#select-patrimonioLiquido').click({ force: true })
  cy.get('[ng-reflect-value="1"]').should('contain.text', 'Sem Patrimônio Líquido');
  cy.get('[ng-reflect-value="2"]').should('contain.text', 'Até 1.199.999');
  cy.get('[ng-reflect-value="3"]').should('contain.text', 'De 1.200.000 Até 10.499.999');
  cy.get('[ng-reflect-value="4"]').should('contain.text', 'De 10.500.000 Até 59.999.999');
  cy.get('[ng-reflect-value="5"]').should('contain.text', 'Acima De 60.000.000').click({ force: true });;
});

Cypress.Commands.add('ReceitaOperacional', () => {
  cy.get('#select-receitaOperacional').click({ force: true })
  cy.get('[ng-reflect-value="1"]').should('contain.text', 'Sem Patrimônio Líquido');
  cy.get('[ng-reflect-value="2"]').should('contain.text', 'Até 1.199.999 ');
  cy.get('[ng-reflect-value="3"]').should('contain.text', 'De 1.200.000 Até 10.499.999');
  cy.get('[ng-reflect-value="4"]').should('contain.text', 'De 10.500.000 Até 59.999.999');
  cy.get('[ng-reflect-value="5"]').should('contain.text', 'Acima De 60.000.000').click({ force: true });;

});












Cypress.Commands.add('PaisNascimento', () => {
  cy.get('#input-paisNascimento', { timeout: 480000 }) 
    .should('have.value', 'Brasil');
});

Cypress.Commands.add('DataNascimento', () => {
  cy.insereNumLetraEspecial('#input-dataNascimento')
});

Cypress.Commands.add('Profissao', () => {
  cy.insereNumLetraEspecial('#input-profissao')
});

Cypress.Commands.add('FaixaRendaMensal', () => {
  cy.get('#select-faixa-renda').click({ force: true })
  cy.get('#faixa-renda-2').should('contain.text', 'Até 2.500');
  cy.get('#faixa-renda-3').should('contain.text', 'De 2.501 a 5.000');
  cy.get('#faixa-renda-4').should('contain.text', 'De 5.001 a 10.000');
  cy.get('#faixa-renda-5').should('contain.text', 'Acima de 10.000').click({ force: true })
});


Cypress.Commands.add('Sexo', () => {
  cy.get('#select-sexo').click({ force: true })
  cy.get('#option-sexo-0').should('contain.text', 'Masculino');
  cy.get('#option-sexo-1').should('contain.text', 'Feminino').click({ force: true });
});


Cypress.Commands.add('EstadoCivil', () => {
  cy.get('#select-estadoCivil').click({ force: true })
  cy.get('#option-estadoCivil-0').should('contain.text', 'Solteiro (a)');
  cy.get('#option-estadoCivil-1').should('contain.text', 'Casado (a)');
  cy.get('#option-estadoCivil-2').should('contain.text', 'Separado (a)');
  cy.get('#option-estadoCivil-3').should('contain.text', 'Divorciado (a)');
  cy.get('#option-estadoCivil-4').should('contain.text', 'Viúvo (a)');
  cy.get('#option-estadoCivil-5').should('contain.text', 'União estável').click({ force: true });
});

Cypress.Commands.add('DadosContato', () => {
  cy.insereNumLetra('#input-cep',8)
  cy.insereNumLetraEspecial('#input-numero')
  cy.insereNumLetraEspecial('#input-complemento')
  cy.insereNumLetraEspecial('#input-email-segurado')
  cy.insereNumLetraEspecial('#input-email-corretor')
});

Cypress.Commands.add('TipoTelefone', () => {
  cy.get('#select-tipo-telefone').click({ force: true })
  cy.get('#option-tipo-telefone-0').should('contain.text', 'Celular ');
  cy.get('#option-tipo-telefone-1').should('contain.text', 'Residencial');
  cy.get('#option-tipo-telefone-2').should('contain.text', 'Comercial');
  cy.get('#option-tipo-telefone-3').should('contain.text', 'Recado').click({ force: true });
});

Cypress.Commands.add('FormasPagamento', () => {
  cy.get('#select-fomra-pagamento').click({ force: true });
  cy.get('#option-forma-pagamento-0').should('contain.text', 'Boleto a prazo').click({ force: true });

  cy.get('#select-valor-seguro').click({ force: true });

  const limparTexto = (texto) => texto.replace(/\s+/g, ' ').trim();

  cy.get('#option-valor-seguro-0')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '1x de US$ 296,53')

  cy.get('#option-valor-seguro-1')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '2x de US$ 148,26')

  cy.get('#option-valor-seguro-2')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '3x de US$ 98,84')

  cy.get('#option-valor-seguro-3')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '4x de US$ 74,13')

  cy.get('#option-valor-seguro-4')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '5x de US$ 59,31')


  cy.get('#option-valor-seguro-5')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '6x de US$ 49,42')

  cy.get('#option-valor-seguro-6')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '7x de US$ 42,36')
    
    cy.get('#option-valor-seguro-6').click({ force: true });
});


Cypress.Commands.add('VerificaInformacoes', () => {
  const numeroDoc = Cypress.env('numeroDoc');  
  cy.get('#span-numero-orcamento').should('contain.text', numeroDoc);
});


Cypress.Commands.add('Verifica', () => {
  const numeroDoc = Cypress.env('numeroDoc');  
  cy.get('#span-numero-orcamento').should('contain.text', numeroDoc);
});








