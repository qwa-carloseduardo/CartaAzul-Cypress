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

Cypress.Commands.add('ValidaEndereco', () => {
  cy.ValidarNaoSeiCepConvencional()
  cy.ValidarNaoSeiCepEspecial()
  cy.ValidaCepConvencional()
  cy.ValidaCepEspecial()
  cy.ValidarCampoLogradouroVazio()
  cy.NaoSeiCepEspecialResponsavelFinanceiro()
  cy.NaoSeiCepConvecionalResponsavelFinanceiro()
  cy.CepConvencionalResponsavelFinanceiro()
  cy.CepConvencionalResponsavelFinanceiroDiferenteSegurado()
  cy.CepEspecialResponsavelFinanceiro()
  cy.CepIgualSeguradoResponsavelFinanceiro()
  cy.TrocadeOferta()
  cy.GerarPdF()
  cy.teste()
});


Cypress.Commands.add('ValidaCepConvencional', () => {
  cy.log('[INFO] - Validando Cep Convencional')
  cy.dadosPropostaPF()
  cy.CepComun()
  cy.InsereEmail();
  cy.InserirWhatsapp();
  cy.FormaPagamento();
});

Cypress.Commands.add('ValidaCepEspecial', () => {
  cy.log('[INFO] - Validando Cep Especial')
  console.log('[INFO] validação cep especial')
  cy.dadosPropostaPF()
  cy.CepEspecial()
  cy.InsereEmail()
  cy.InserirWhatsapp()
  cy.FormaPagamento()
  cy.get('#btn-salvar').click()
});

Cypress.Commands.add('ValidarNaoSeiCepConvencional', () => {
  cy.log('[INFO] - Validando não sei o cep convencional')
  console.log('[INFO] validação cep Convencional')
  cy.dadosPropostaPF()
  cy.NaoSeiCepConvencional()
  cy.InsereEmail()
  cy.InserirWhatsapp()
  cy.FormaPagamento()
  cy.get('#btn-salvar').click()
});

Cypress.Commands.add('ValidarNaoSeiCepEspecial', () => {
  cy.log('[INFO] - Validando não sei o cep especial')
  console.log('[INFO] validação não sei o cep especial')
  cy.dadosPropostaPF()
  cy.NaoSeiCepEspecial()
  cy.InsereEmail()
  cy.InserirWhatsapp()
  cy.FormaPagamento()
  cy.get('#btn-salvar').click();
});

Cypress.Commands.add('ValidarCampoLogradouroVazio', () => {
  cy.log('[INFO] - Validando  campo logradouro vazio')
  console.log('[INFO] validação preenchimento formulario')
  cy.dadosPropostaPF()
  cy.CampoLogradouroVazio()
  cy.InsereEmail()
  cy.InserirWhatsapp()
  cy.FormaPagamento()
  cy.get('#btn-salvar').should('be.disabled');
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
  cy.get('#input-pais-nascimento', { timeout: 480000 })
    .should('have.value', 'Brasil');
});

Cypress.Commands.add('DataNascimento', () => {
  cy.insereNumLetraEspecial('#input-data-nascimento')
});

Cypress.Commands.add('Profissao', () => {
  cy.insereNumLetraEspecial('#input-profissao')
});

Cypress.Commands.add('FaixaRendaMensal', () => {
  cy.get('#select-faixa-renda').click({ force: true })
  cy.get('#option-faixa-renda-0').should('contain.text', 'Até 2.500');
  cy.get('#option-faixa-renda-1').should('contain.text', 'De 2.501 a 5.000');
  cy.get('#option-faixa-renda-2').should('contain.text', 'De 5.001 a 10.000');
  cy.get('#option-faixa-renda-3').should('contain.text', 'Acima de 10.000').click({ force: true })
});


Cypress.Commands.add('Sexo', () => {
  cy.get('#select-sexo').click({ force: true })
  cy.get('#optin-sexo-0').should('contain.text', 'Masculino');
  cy.get('#optin-sexo-1').should('contain.text', 'Feminino').click({ force: true });
});


Cypress.Commands.add('EstadoCivil', () => {
  cy.get('#mat-select-value-23 > .mat-mdc-select-placeholder').click({ force: true })
  cy.get('#option-estado-civil-0').should('contain.text', 'Solteiro (a)');
  cy.get('#option-estado-civil-1').should('contain.text', 'Casado (a)');
  cy.get('#option-estado-civil-2').should('contain.text', 'Separado (a)');
  cy.get('#option-estado-civil-3').should('contain.text', 'Divorciado (a)');
  cy.get('#option-estado-civil-4').should('contain.text', 'Viúvo (a)');
  cy.get('#option-estado-civil-5').should('contain.text', 'União estável').click({ force: true });
});

Cypress.Commands.add('DadosContato', () => {
  cy.insereNumLetra('#input-cep', 8)
  cy.insereNumLetraEspecial('#input-numero')
  cy.insereNumLetraEspecial('#input-complemento')
  cy.insereNumLetraEspecial('#input-email-segurado')
  // cy.insereNumLetraEspecial('#input-email-corretor')
  cy.insereNumLetraEspecial('#input-whats-app-corretor')
});

Cypress.Commands.add('TipoTelefone', () => {
  cy.get('#select-tipo-telefone').click({ force: true })
  cy.get('#option-tipo-telefone-0').should('contain.text', 'Celular ');
  cy.get('#option-tipo-telefone-1').should('contain.text', 'Residencial');
  cy.get('#option-tipo-telefone-2').should('contain.text', 'Comercial');
  cy.get('#option-tipo-telefone-3').should('contain.text', 'Recado').click({ force: true });
});

Cypress.Commands.add('FormasPagamento', () => {
  cy.get('#mat-select-value-15').click({ force: true });
  cy.get('#option-forma-pagamento-0').should('contain.text', 'Boleto a prazo').click({ force: true });

  cy.get('#mat-select-value-17 > .mat-mdc-select-placeholder').click({ force: true });

  const limparTexto = (texto) => texto.replace(/\s+/g, ' ').trim();

  cy.get('#option-valor-seguro-0')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '1x de US$ 269,57')

  cy.get('#option-valor-seguro-1')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '2x de US$ 134,79')

  cy.get('#option-valor-seguro-2')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '3x de US$ 89,86')

  cy.get('#option-valor-seguro-3')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '4x de US$ 67,39')

  cy.get('#option-valor-seguro-4')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '5x de US$ 53,91')


  cy.get('#option-valor-seguro-5')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '6x de US$ 44,93')

  cy.get('#option-valor-seguro-6')
    .invoke('text')
    .then(limparTexto)
    .should('eq', '7x de US$ 38,51')

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


Cypress.Commands.add('InsereEndereco', () => {
  cy.get('#input-cep').clear().type('01141030')
  console.log('[Info] Cep inserido');
  cy.get('#input-numero').clear().type('157')
  console.log('[Info] Numero do endereco inserido');
  cy.get('#input-complemento', { timeout: 48000 }).clear().click();
  cy.get('#select-tipo-telefone').click({ force: true });
  cy.get('#option-tipo-telefone-0').click()
  console.log('[Info] Tipo telefone selecionado');
  cy.get('#input-numero-telefone').clear().type('1234567890', { force: true })
  console.log('[Info] Numero telefone inserido');
});

Cypress.Commands.add('CepComun', () => {
  cy.get('#mat-mdc-checkbox-2-input').click({ force: true });
  console.log('[Info] Fleg Não sei o Cep');
  cy.get('#input-cep').clear().type('04923110')
  console.log('[Info] Cep inserido');
  cy.get('#input-numero').clear().type('157')
  console.log('[Info] Numero do endereco inserido');
  cy.get('#input-complemento', { timeout: 48000 }).clear().click();
  cy.get('#select-tipo-telefone').click({ force: true });
  cy.get('#option-tipo-telefone-0').click()
  console.log('[Info] Tipo telefone selecionado');
  cy.get('#input-numero-telefone').type('1234567890', { force: true })
  console.log('[Info] Numero telefone inserido');
});

Cypress.Commands.add('CepComunPreencher', () => {
  cy.get('#mat-mdc-checkbox-2-input').click({ force: true });
  console.log('[Info] Fleg Não sei o Cep');
  cy.get('#input-cep').clear().type('04923110')
  console.log('[Info] Cep inserido');
  cy.get('#input-numero').clear().type('157')
  console.log('[Info] Numero do endereco inserido');
  cy.get('#input-complemento', { timeout: 48000 }).clear().click();
  cy.get('#select-tipo-telefone').click({ force: true });
  cy.get('#option-tipo-telefone-0').click()
  console.log('[Info] Tipo telefone selecionado');
  cy.get('#input-numero-telefone').type('1234567890', { force: true })
  console.log('[Info] Numero telefone inserido');
});

Cypress.Commands.add('CepEspecial', () => {
  cy.get('#input-cep').clear().type('96255000', { timeout: 48000 })
  cy.get('#mat-select-value-39').click({ force: true });
  cy.get('#option-tipo-logradouro-13').click({ force: true });
  console.log('[Info] Selecionei tipo Logradouro no campo');
  cy.realPress('Tab');
  cy.get('#input-cep-generico').clear({ timeout: 480000 }).type('Teste');
  cy.realPress('Tab');
  console.log('[Info] Selecionei Logradouro no campo');
  cy.get('#input-complemento', { timeout: 48000 }).clear().click();
  cy.get('#input-numero').clear().type('157')
  console.log('[Info] Numero do endereco inserido');
  cy.get('#select-tipo-telefone').click({ force: true });
  cy.get('#option-tipo-telefone-0').click()
  console.log('[Info] Tipo telefone selecionado');
  cy.get('#input-numero-telefone').type('11234567890', { force: true })
  console.log('[Info] Numero telefone inserido');
});

Cypress.Commands.add('NaoSeiCepConvencional', () => {
  cy.get('#mat-mdc-checkbox-2-input').click({ force: true });
  console.log('[Info] Fleg Não sei o Cep');
  cy.get('#mat-select-value-25 > .mat-mdc-select-placeholder').click({ force: true });
  cy.get('#option-estado-24').click({ force: true });
  console.log('[Info] Selecionei estado no campo');
  cy.get('#input-cidade').clear().type('São paulo', { force: true });
  cy.get('#option-cidade-1', { timeout: 48000 }).click({ force: true });
  console.log('[Info] Selecionei cidade no campo');
  cy.get('#mat-select-value-27 > .mat-mdc-select-placeholder').click({ force: true });
  cy.get('#option-tipo-logradouro-13').click({ force: true });
  console.log('[Info] Selecionei tipo Logradouro no campo');
  cy.realPress('Tab');
  cy.get('#input-logradouro').clear().type('Jupuruva',);
  cy.get('#option-logradouro-0').click({ force: true });
  console.log('[Info] Selecionei Logradouro no campo');
  cy.get('#input-numero').clear().type('157')
  console.log('[Info] Numero do endereco inserido');
  cy.get('#select-tipo-telefone').click({ force: true });
  cy.get('#option-tipo-telefone-0').click()
  console.log('[Info] Tipo telefone selecionado');
  cy.get('#input-numero-telefone').type('11234567890', { force: true })
  console.log('[Info] Numero telefone inserido');
});

Cypress.Commands.add('NaoSeiCepEspecial', () => {
  cy.get('#mat-mdc-checkbox-2-input', { timeout: 55000 }).click({ force: true });
  cy.get('#mat-mdc-checkbox-2-input').click({ force: true });
  console.log('[Info] Fleg Não sei o Cep');
  cy.get('#mat-select-value-29 > .mat-mdc-select-placeholder').click({ force: true });
  cy.get('#option-estado-20').click({ force: true });
  console.log('[Info] Selecionei estado no campo');
  cy.get('#input-cidade').clear().type('Chuí', { force: true });
  cy.wait(1000);
  cy.get('#option-cidade-0', { timeout: 55000 }).click({ force: true });
  console.log('[Info] Selecionei cidade no campo');
  cy.get('#input-complemento').click();
  cy.get('#mat-mdc-form-field-label-84 > .mat-mdc-form-field-required-marker').click({ force: true });
  cy.get('#option-tipo-logradouro-13').click({ force: true });
  console.log('[Info] Selecionei tipo Logradouro no campo');
  cy.realPress('Tab');
  cy.get('#input-logradouro').clear().type('Uruguai');
  cy.wait(1500);
  cy.get('#option-logradouro-0').click({ force: true });
  cy.realPress('Tab');
  cy.get('#input-cep-generico').clear({ timeout: 480000 }).type('Teste');
  cy.realPress('Tab');
  console.log('[Info] Selecionei Logradouro no campo');
  cy.get('#input-numero').clear().type('157')
  console.log('[Info] Numero do endereco inserido');
  cy.get('#select-tipo-telefone').click({ force: true });
  cy.get('#option-tipo-telefone-0').click()
  console.log('[Info] Tipo telefone selecionado');
  cy.get('#input-numero-telefone').type('11234567890', { force: true })
  console.log('[Info] Numero telefone inserido');
});

Cypress.Commands.add('CampoLogradouroVazio', () => {
  cy.get('#mat-mdc-checkbox-2-input').click({ force: true });
  console.log('[Info] Fleg Não sei o Cep');
  cy.get('#mat-mdc-form-field-label-98 > .mat-mdc-form-field-required-marker').click({ force: true });
  cy.get('#option-estado-20').click({ force: true });
  console.log('[Info] Selecionei estado no campo');
  cy.get('#input-cidade').clear().type('Chuí', { force: true }, { delay: 0 });
  cy.get('#option-cidade-0').click({ force: true });
  console.log('[Info] Selecionei cidade no campo');
  cy.get('#input-complemento').click();
  cy.get('#select-tipo-logradouro').click({ force: true });
  cy.get('#option-tipo-logradouro-13').click({ force: true });
  console.log('[Info] Selecionei tipo Logradouro no campo');
  cy.realPress('Tab');
  cy.get('#input-logradouro').clear().type('Uruguai', { delay: 0 });
  cy.get('#option-logradouro-0').click({ force: true });
  cy.realPress('Tab');
  cy.get('#input-cep-generico').clear();
  cy.realPress('Tab');
  console.log('[Info] Selecionei Logradouro no campo');
  cy.get('#input-numero').clear().type('157', { delay: 0 })
  console.log('[Info] Numero do endereco inserido');
  cy.get('#select-tipo-telefone').click({ force: true });
  cy.get('#option-tipo-telefone-0').click()
  console.log('[Info] Tipo telefone selecionado');
  cy.get('#input-numero-telefone').clear().type('11234567890', { force: true }, { delay: 0 })
  console.log('[Info] Numero telefone inserido');
});

Cypress.Commands.add('InsereEmail', () => {
  cy.get('#input-email-segurado').then(($email) => {
    if ($email.val()) {
      cy.wrap($email).clear()
    }
  }).type('Teste@Email.com.br')
  console.log('[Info] E-mail inserido');
});

Cypress.Commands.add('InserirWhatsapp', () => {
  cy.get('#input-whats-app-corretor').then(($whatsapp) => {
    if ($whatsapp.val()) {
      cy.wrap($whatsapp).clear();
    }
  })
  cy.insereNumLetraEspecial('#input-whats-app-corretor');
  console.log('[INFO] Whatsapp inserido');
});

Cypress.Commands.add('PreenchendoResponsavelFinanceiro', () => {
  cy.get('#input-cep-generico').then(($logradouro) => {
    if (!$logradouro.val()) {
      cy.wrap($logradouro).clear();
      cy.wrap($logradouro).type('teste', { force: true });
    }
  });
  cy.wait(500);
  cy.get('#btn-outro-input').click({ force: true })
  cy.realPress('Tab')
  cy.wait(500);
  cy.get('#input-cpfCnpj-responsavel-financeiro').type(gerarCPF());
  cy.realPress('Tab')
  cy.get('#input-nome-responsavel-financeiro').type('Teste silva ')
  cy.get('#input-data-nascimento-responsavel-financeiro').then(($dataNascimento) => {
    if ($dataNascimento.val()) {
      cy.wrap($dataNascimento).clear();
    }
  }).type('28071999', { force: true });
  cy.get('#mat-select-value-43').click({ force: true })
  cy.get('#option-sexo-responsavel-financeiro-1').click({ force: true })

});

Cypress.Commands.add('CepConvencionalResponsavelFinanceiro', () => {
  cy.log('[INFO] - Validando cep convencional Responsável Financeiro')
  cy.PreenchendoResponsavelFinanceiro()
  // cy.get('#checkbox-responsavelIsSegurado-input').click({force: true})
  cy.get('#mat-mdc-checkbox-4-input').click()
  cy.get(':nth-child(4) > app-endereco > .ng-dirty > .mt-4 > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix > #input-cep').type('04923110')
  cy.wait(500)
  cy.realPress('Tab')
  cy.realPress('Tab').then(() => { cy.focused().type('123') });
  cy.get('#mat-mdc-form-field-label-112 > .mat-mdc-form-field-required-marker').click()
  cy.get('#option-tipo-telefone-responsavel-0').click()
  cy.get('#mat-mdc-form-field-label-114 > .mat-mdc-form-field-required-marker').type('1111111111')
  cy.get('#input-email-responsavel-financeiro').clear().type('testeFinanceiro@teste.com.br')
  cy.get('#btn-salvar').click()
});
Cypress.Commands.add('CepConvencionalResponsavelFinanceiroDiferenteSegurado', () => {
  cy.log('[INFO] - Validando cep convencional Responsável Financeiro')
  cy.PreenchendoResponsavelFinanceiro()
  // cy.get('#checkbox-responsavelIsSegurado-input').click({force: true})
  // cy.get('#mat-mdc-checkbox-4-input').click()
  cy.get(':nth-child(4) > app-endereco > .ng-dirty > .mt-4 > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix > #input-cep').type('04949120')
  cy.wait(500)
  cy.realPress('Tab')
  cy.realPress('Tab').then(() => { cy.focused().type('123') });
  cy.get('#mat-mdc-form-field-label-112 > .mat-mdc-form-field-required-marker').click()
  cy.get('#option-tipo-telefone-responsavel-0').click()
  cy.get('#mat-mdc-form-field-label-114 > .mat-mdc-form-field-required-marker').type('1111111111')
  cy.get('#input-email-responsavel-financeiro').clear().type('testeFinanceiro@teste.com.br')
  cy.get('#btn-salvar').click()
});

Cypress.Commands.add('CepEspecialResponsavelFinanceiro', () => {
  cy.log('[INFO] -Validando cep especial Responsável Financeiro')
  cy.PreenchendoResponsavelFinanceiro()
  cy.get(':nth-child(4) > app-endereco > .ng-dirty > .mt-4 > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix > #input-cep').clear().type('96255000')
  //cy.get('#mat-select-value-51').click()
  cy.wait(500)
  // cy.realPress('Tab')
  // cy.realPress('Tab')
  cy.realPress('Tab')
  cy.realPress('Tab')
  cy.realPress(['Shift', 'Tab']).then(() => { cy.focused().type('Rua teste') });
  cy.get(':nth-child(4) > app-endereco > form.ng-touched > :nth-child(3) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type('0000000')
  cy.get('#mat-select-value-41').click()
  cy.get('#option-tipo-telefone-responsavel-1').click()
  cy.get('#input-numero-telefone-responsavel').type('22222222222')
  cy.get('#input-email-responsavel-financeiro').clear().type('testeFinanceiro@teste.com.br')
  cy.get('#btn-salvar').click()
});

Cypress.Commands.add('NaoSeiCepEspecialResponsavelFinanceiro', () => {
  cy.log('[INFO] - Validando não sei o cep especial Responsável Financeiro')
  cy.PreenchendoResponsavelFinanceiro()
  console.log('[INFO] flag endereço do responsável')
  cy.get('#checkbox-responsavelIsSegurado-input').click({ force: true })
  cy.get('#mat-mdc-checkbox-4-input').click()
  cy.get('#mat-mdc-form-field-label-130 > .mat-mdc-form-field-required-marker').click()
  cy.get('#option-estado-20').click()
  cy.realPress('Tab').then(() => { cy.focused().type('chuí', { timeout: 48000 }); });
  cy.wait(1700)
  cy.get('#option-cidade-0').click({ timeout: 48000 })
  cy.get('#mat-mdc-form-field-label-134 > .mat-mdc-form-field-required-marker', { timeout: 4000 }).click()
  cy.get('#option-tipo-logradouro-13').click()
  cy.get('#mat-mdc-form-field-label-136 > .mat-mdc-form-field-required-marker').type('uruguai')
  cy.get('#option-logradouro-0').click()
  cy.realPress('Tab')
  cy.realPress(['Shift', 'Tab']).then(() => { cy.focused().clear({ timeout: 500000 }).type('teste'); });
  cy.realPress('Tab').then(() => { cy.focused().type('147', { timeout: 48000 }); });
  cy.realPress('Tab').then(() => { cy.focused().click() });
  cy.realPress('Tab').then(() => { cy.focused().click() });
  cy.realPress('Tab').then(() => { cy.focused().type('1234567-8911', { timeout: 48000 }); });
  cy.realPress('Tab').then(() => { cy.focused().clear().type('testeFinanceiro@teste.com.br', { timeout: 48000 }); });
  cy.get('#btn-salvar').click()
});

Cypress.Commands.add('NaoSeiCepConvecionalResponsavelFinanceiro', () => {
  cy.log('[INFO] - Validando não sei o cep convencional Responsável Financeiro')
  cy.PreenchendoResponsavelFinanceiro()
  console.log('[INFO] flag endereço do responsável')
  // cy.get('#checkbox-responsavelIsSegurado-input').click({force: true})
  cy.get('#mat-mdc-checkbox-4-input').click()
  cy.get('#mat-mdc-checkbox-4-input').click()
  cy.get('#mat-mdc-form-field-label-140 > .mat-mdc-form-field-required-marker').click()
  cy.get('#option-estado-24').click()
  cy.realPress('Tab').then(() => { cy.focused().type('Sao paulo') })
  cy.wait(500)
  cy.get('#option-cidade-1').click({ timeout: 48000 })
  cy.get('#mat-mdc-form-field-label-144 > .mat-mdc-form-field-required-marker', { timeout: 4000 }).click()
  cy.get('#option-tipo-logradouro-13').click()
  cy.realPress('Tab').then(() => { cy.focused().type('jupuruva'); })
    .wait(1000).then(() => {
      cy.get('#option-logradouro-0').click();
    });
  cy.realPress('Tab').then(() => { cy.focused().type('147', { timeout: 48000 }); });
  cy.realPress('Tab').then(() => { cy.focused().click() })
  cy.realPress('Tab').then(() => { cy.focused().click() })
  cy.realPress('Tab').then(() => { cy.focused().type('1234567-8911', { timeout: 48000 }); });
  cy.realPress('Tab').then(() => { cy.focused().clear().type('testeFinanceiro@teste.com.br', { timeout: 48000 }); });
  cy.get('#btn-salvar').click()
});

Cypress.Commands.add('CepIgualSeguradoResponsavelFinanceiro', () => {
  cy.log('[INFO] - Validando cep do Responsavel Financeiro com o mesmo do Segurado')
  cy.PreenchendoResponsavelFinanceiro()
  cy.get('#checkbox-responsavelIsSegurado-input').click({ force: true })
  cy.get('#mat-mdc-form-field-label-112 > .mat-mdc-form-field-required-marker').click()
  cy.get('#option-tipo-telefone-responsavel-2').click()
  cy.get('#mat-mdc-form-field-label-114 > .mat-mdc-form-field-required-marker').type('1111111111')
  cy.get('#input-email-responsavel-financeiro').clear().type('testeFinanceiro@teste.com.br - FIM')
  cy.get('#btn-salvar').click()
});

Cypress.Commands.add('TrocadeOferta', () => {
  cy.log('[INFO] - Validando troca de oferta')
  cy.log('Validando troca de oferta com opção 2 ')
  console.log('[INFO] selecionando o pagamento')
  cy.get('#mat-select-value-15').click({ force: true });
  cy.get('#option-forma-pagamento-0').should('contain.text', 'Boleto a prazo').click({ force: true });
  cy.get('#mat-select-value-17 > .mat-mdc-select-value-text > .mat-mdc-select-min-line').click({ force: true });
  cy.get('#option-valor-seguro-2').click()
  cy.get('#btn-salvar').click()
  cy.get('#btn-voltar').click()
  cy.SelecionaSegundaOferta()
  // cy.get('[ _ngcontent-ng-c2847146181=""][novalidate=""]')
  // .should('not.have.value', '');
  cy.get('#input-cep').should('not.have.value', '')
  cy.get('#input-numero').should('not.have.value', '')
});

Cypress.Commands.add('GerarPdF', () => {
  cy.log('[INFO] - Validar PDF')
  console.log('[INFO] selecionando o pagamento')
  cy.get('#mat-select-value-63').click({ force: true });
  cy.get('#option-forma-pagamento-0').should('contain.text', 'Boleto a prazo').click({ force: true });
  cy.get('#mat-select-value-65 > .mat-mdc-select-value-text > .mat-mdc-select-min-line').click({ force: true });
  cy.get('#option-valor-seguro-3').click()
  cy.get('#btn-salvar').click()
  cy.get('#btn-voltar').click()
  cy.SelecionaSegundaOferta()
  cy.get('#input-cep').should('not.have.value', '')
  cy.get('#input-numero').should('not.have.value', '')
  cy.intercept('GET', '**/api/frota/cartaazul/v1/impressoes/gerarPDF**').as('getPdfRequest');
  cy.get('#btn-gerar-pdf > .mat-mdc-button-touch-target').click();
  cy.wait('@getPdfRequest').then((interception) => {
    expect(interception.response.statusCode).to.equal(200);
  });
});

Cypress.Commands.add('teste', (cep) => {
  cy.get('#input-cep').type(cep)
  cy.PreencherDados()
  cy.InsereEmail();
  cy.InserirWhatsapp();
  cy.get('#mat-select-value-15').click({ force: true });
  cy.get('#option-forma-pagamento-0').should('contain.text', 'Boleto a prazo').click({ force: true });
  cy.realPress('Tab').click()
  cy.get('#option-valor-seguro-3').click() //parei aqui
// cy.FormaPagamento();
});


Cypress.Commands.add('PreencherDados', () => {
  cy.get('#input-data-nascimento', { timeout: 480000 }).type('28071999', { force: true })
  console.log('[Info] Data Nascimento Inserida');
  cy.get('#input-profissao').clear().type('caminhoneiro', { force: true })
  console.log('[Info] Profissao Inserida');
  cy.get('#option-profissao-0', { timeout: 480000 }).click()
  cy.get('#select-faixa-renda').click({ force: true })
  cy.get('#option-faixa-renda-1').click({ force: true });
  console.log('[Info] Faixa Renda selecionada');
  cy.get('#select-sexo').click({ force: true })
  cy.get('#optin-sexo-0').click({ force: true });
  console.log('[Info] Sexo selecionado');
  cy.get('#select-estado-civil').click({ force: true })
  cy.get('#option-estado-civil-0').click();
  console.log('[Info] Estado Civil selecionado');

});

function gerarCPF() {
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

}