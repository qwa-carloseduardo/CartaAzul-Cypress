  Cypress.Commands.add('NomeProponente', () => {
    cy.insereNumLetraEspecial('#mat-input-1');
    cy.get('#mat-input-1').clear();
  });

  Cypress.Commands.add('CpfCnpj', () => {
    cy.insereNum('#mat-input-2',14).clear();
  });

  Cypress.Commands.add('NumeroOrcamento', () => {
    cy.insereNumLetraEspecial('.col-3.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').clear();
  });

  Cypress.Commands.add('Apolice', () => {
    cy.insereNum('#mat-input-3',12).clear();;
  });

  Cypress.Commands.add('TipoDeBusca', () => {
    cy.clicaCampo('form.ng-pristine > :nth-child(1) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper')
    cy.validaItem('#mat-option-0','Selecione');
    cy.validaItem('#mat-option-3','Orçamento');
    cy.validaItem('#mat-option-4','Proposta');
    cy.PressionaEsc();
  });

  Cypress.Commands.add('TipoDeNegocio', () => {
    cy.clicaCampo(':nth-child(2) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper');
    cy.validaItem('#mat-option-1','Selecione');
    cy.validaItem('#mat-option-5','Seguro Novo');
    cy.validaItem('#mat-option-6','Renovação Cia');
    cy.validaItem('#mat-option-7','Endosso de Inclusão Item');
    cy.validaItem('#mat-option-8','Endosso de Exclusão Item');
    cy.validaItem('#mat-option-9','Endosso de Cancelamento');
    cy.PressionaEsc();
  });

  Cypress.Commands.add('Situacao', () => {
    cy.clicaCampo(':nth-child(2) > :nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper');
    cy.validaItem('#mat-option-2','Selecione');
    cy.validaItem('#mat-option-10','Calculado');
    cy.validaItem('#mat-option-11','Erro no cálculo');
    cy.validaItem('#mat-option-12','Expirado');
    cy.validaItem('#mat-option-13','Transmitida');
    cy.validaItem('#mat-option-14','Transmitida com erro');
    cy.validaItem('#mat-option-15','Emitida');
    cy.validaItem('#mat-option-16','Recusado');
    cy.validaItem('#mat-option-17','Aguardando pagamento');
    cy.validaItem('#mat-option-18','Pendente');
    cy.validaItem('#mat-option-19','Completo');
    cy.validaItem('#mat-option-20','Incompleto');
    cy.validaItem('#mat-option-21','Endosso não calculado');
    cy.PressionaEsc();
  });

  Cypress.Commands.add('PesquisarOrcamento', () => {
    cy.SelecionaOrcamento();
    cy.verificaDesabilitado('.mat-mdc-unelevated-button[disabled]');
    cy.insereNum('.col-3.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper',1);
    cy.verificaHabilitado('.mat-mdc-button .mat-mdc-button-touch-target, .mat-mdc-unelevated-button .mat-mdc-button-touch-target, .mat-mdc-raised-button .mat-mdc-button-touch-target, .mat-mdc-outlined-button .mat-mdc-button-touch-target');
  });

  Cypress.Commands.add('PesquisarProposta', () => {
    cy.SelecionaProposta();
    cy.verificaDesabilitado('.mat-mdc-unelevated-button[disabled]');
    cy.insereNum('.col-3.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper',1);
    cy.verificaHabilitado('.mat-mdc-button .mat-mdc-button-touch-target, .mat-mdc-unelevated-button .mat-mdc-button-touch-target, .mat-mdc-raised-button .mat-mdc-button-touch-target, .mat-mdc-outlined-button .mat-mdc-button-touch-target');
  });

  Cypress.Commands.add('SelecionaOrcamento', () => {
    cy.clicaCampo('form.ng-pristine > :nth-child(1) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper');
    cy.clicaCampo('#mat-option-3').contains('Orçamento');
    cy.PressionaEsc();
  });

  Cypress.Commands.add('SelecionaProposta', () => {
    cy.clicaCampo('form.ng-pristine > :nth-child(1) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper');
    cy.clicaCampo('.ng-touched.ng-invalid > :nth-child(1) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix');
    cy.PressionaEsc();
  });

  
  Cypress.Commands.add('CriaCampoNumeroOrcamento', () => {
    cy.SelecionaOrcamento();
    cy.contains('Número Orçamento');
  });

  Cypress.Commands.add('CriaCampoNumeroProposta', () => {
    cy.SelecionaProposta();
    cy.contains('Número Proposta');
  });

  Cypress.Commands.add('ApenasNumeroPropostaOrcamentoHabilitados', () => {
    cy.SelecionaProposta();
    cy.verificaDesabilitado('input[formcontrolname="nomeProponente"]');
    cy.verificaDesabilitado('input[formcontrolname="cpfCnpj"]');
    cy.verificaDesabilitado('input[formcontrolname="apolice"]');
    cy.verificaHabilitado('.col-3.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper');
    cy.clicaCampo('.ng-touched.ng-invalid > :nth-child(1) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper');
    cy.clicaCampo('#mat-option-3');
    cy.verificaHabilitado('.col-3.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper');
  });
  
  Cypress.Commands.add('InserirCaracterNomeProponenteCPFdesabilita', () => {
    cy.insereNum('#mat-input-1',1);
    cy.verificaDesabilitado('input[formcontrolname="cpfCnpj"]');
  });

  Cypress.Commands.add('InserirCaracterCPFNomeProponentedesabilita', () => {
    cy.insereNum('input[formcontrolname="cpfCnpj"]',1);
    cy.verificaDesabilitado('#mat-input-1');
  });

  Cypress.Commands.add('PesquisaSemFiltro', () => {
    cy.get('button[mat-flat-button]').eq(0).click();
    cy.verificaHabilitado('tr.mat-mdc-row');
  });

  Cypress.Commands.add('BotaoPesquisarDesabilitadoSelecionandoOrcamento', () => {
    cy.SelecionaOrcamento();
    cy.verificaDesabilitado('button[mat-flat-button]').eq(0);
  });

  Cypress.Commands.add('BotaoPesquisarDesabilitadoSelecionandoProposta', () => {
    cy.SelecionaProposta();
    cy.verificaDesabilitado('button[mat-flat-button]').eq(0);
  });

  Cypress.Commands.add('BuscaEndossoInclusaoItem', () => {
    cy.clicaCampo(':nth-child(2) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper');
    cy.clicaCampo('#mat-option-7');
    cy.PressionaEsc();
    cy.get('button[mat-flat-button]').eq(0).click();
  });

  Cypress.Commands.add('ClicaSeVisivel', (selector) => {
    cy.get(selector).then(($element) => {
      if ($element.is(':visible')) {
        cy.wrap($element).click();
        cy.ClicaSeVisivel(selector);
      }
    });
  });

  Cypress.Commands.add('SetaPaginacao', () => {
    cy.BuscaEndossoInclusaoItem();
    cy.ClicaSeVisivel('button.mat-mdc-paginator-navigation-next');
    cy.verificaDesabilitado('button.mat-mdc-paginator-navigation-next');
  });

  Cypress.Commands.add('AcessaTelaPesquisa', () => {
    cy.verificaValorPresenteNoCampo('#mat-mdc-form-field-label-2 > .ng-tns-c1205077789-3','');
    cy.verificaValorPresenteNoCampo('#mat-mdc-form-field-label-4 > .ng-tns-c1205077789-5','');
    cy.verificaValorPresenteNoCampo('#mat-mdc-form-field-label-6 > .ng-tns-c1205077789-6','');
    cy.verificaValorPresenteNoCampo('#mat-select-value-3 > .mat-mdc-select-placeholder','');
    cy.verificaValorPresenteNoCampo('#mat-mdc-form-field-label-10 > .ng-tns-c1205077789-9','');
    cy.verificaValorPresenteNoCampo('#mat-mdc-form-field-label-14 > .ng-tns-c1205077789-12','');
    cy.verificaValorPresenteNoCampo('#mat-mdc-form-field-label-12 > .ng-tns-c1205077789-11','');
  });

  Cypress.Commands.add('FazBusca', (referencia,) => {
    cy.clicaCampo(':nth-child(2) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper');
    cy.clicaCampo(referencia);
    cy.get('button[mat-flat-button]').eq(0).click();
    cy.verificaHabilitado('tr.mat-mdc-row');
  });

  Cypress.Commands.add('BuscarPorTipoSeguroNovo', () => {
    cy.FazBusca('#mat-option-6');
  });

  Cypress.Commands.add('BuscarPorTipoRenovacaoCia', () => {
    cy.FazBusca('#mat-option-5');
  });

  
  Cypress.Commands.add('EndossoInclusao', () => {
    cy.FazBusca('#mat-option-7');
  });

  Cypress.Commands.add('EndossoExclusao', () => {
    cy.FazBusca('#mat-option-8');
  });

  
  Cypress.Commands.add('EndossoCancelamento', () => {
    cy.FazBusca('#mat-option-9');
  });

  Cypress.Commands.add('Calculado', () => {
    cy.FazBusca('#mat-option-10');
  });

  Cypress.Commands.add('ErroNoCalculado', () => {
    cy.FazBusca('#mat-option-11');
  });

  Cypress.Commands.add('Expirado', () => {
    cy.FazBusca('#mat-option-12');
  });

  Cypress.Commands.add('Transmitida', () => {
    cy.FazBusca('#mat-option-13');
  });

  Cypress.Commands.add('TransmitidaComErro', () => {
    cy.FazBusca('#mat-option-14');
  });

  Cypress.Commands.add('Emitida', () => {
    cy.FazBusca('#mat-option-15');
  });

  Cypress.Commands.add('Recusado', () => {
    cy.FazBusca('#mat-option-16');
  });

  Cypress.Commands.add('AguardandoPagamento', () => {
    cy.FazBusca('#mat-option-17');
  });

  Cypress.Commands.add('Pendente', () => {
    cy.FazBusca('#mat-option-18');
  });

  Cypress.Commands.add('Completo', () => {
    cy.FazBusca('#mat-option-19');
  });

  Cypress.Commands.add('Incompleto', () => {
    cy.FazBusca('#mat-option-20');
  });

  Cypress.Commands.add('EndossoNaoCalculado', () => {
    cy.FazBusca('#mat-option-20');
  });

  Cypress.Commands.add('NumeroDeDocumento', () => {
    cy.insereTexto('.col-3.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper','4000908');
    cy.get('button[mat-flat-button]').eq(0).click();
    cy.verificaHabilitado('tr.mat-mdc-row');
  });

  Cypress.Commands.add('Apolice', () => {
    cy.insereTexto(':nth-child(4) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper','34 7470918 ');
    cy.get('button[mat-flat-button]').eq(0).click();
    cy.verificaHabilitado('tr.mat-mdc-row');
  });
  
  Cypress.Commands.add('BuscarPorCPf', () => {
    cy.insereTexto('input[formcontrolname="cpfCnpj"]','272.683.029-32');
    cy.get('button[mat-flat-button]').eq(0).click();
    cy.verificaHabilitado('tr.mat-mdc-row');
  });

  Cypress.Commands.add('BuscaPorNomeProponente', () => {
    cy.insereTexto('input[formcontrolname="nomeProponente"]','JOÃO RICARDO BERNARDO DA CRUZ');
    cy.get('button[mat-flat-button]').eq(0).click();
    cy.verificaHabilitado('tr.mat-mdc-row');
  });

  Cypress.Commands.add('Proposta', () => {
    cy.clicaCampo('form.ng-pristine > :nth-child(1) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper');
    cy.clicaCampo('#mat-option-3');
    cy.insereTexto('.col-3.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper','4000904');
    cy.get('button[mat-flat-button]').eq(0).click();
    cy.verificaHabilitado('tr.mat-mdc-row');
  });

  Cypress.Commands.add('Orcamento', () => {
    cy.clicaCampo('form.ng-pristine > :nth-child(1) > :nth-child(1) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper');
    cy.clicaCampo('#mat-option-4');
    cy.insereTexto('.col-3.ng-star-inserted > .mat-mdc-form-field > .mat-mdc-text-field-wrapper','4000905');
    cy.get('button[mat-flat-button]').eq(0).click();
    cy.verificaHabilitado('tr.mat-mdc-row');
  });