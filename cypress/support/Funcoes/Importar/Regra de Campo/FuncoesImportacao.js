 Cypress.Commands.add('Veiculos', () => {
  cy.wait(2000)
  cy.get('#select-veiculos', { timeout: 480000 }).click()
  cy.contains('Todos').click()
 });

  Cypress.Commands.add('TipoUso', () => {
    cy.get('#select-tipo-uso').click()
    cy.get('#option-tipo-uso-1').contains('C. Comum')
    cy.get('#option-tipo-uso-2').contains('C. Inflamável')
    cy.get('#option-tipo-uso-3').contains('Turismo')
    cy.get('#option-tipo-uso-4').contains('Semirreboque')
    cy.get('#option-tipo-uso-0').contains('Todos').click()
  });

  Cypress.Commands.add('Placa', () => {
    cy.insereNumLetra('#input-placa-0',7)
    cy.realPress('Tab'); 
    
   }); 

  Cypress.Commands.add('Chassi', () => {
    cy.wait(2000)
    cy.insereNumLetra('#input-chassi-0',17)
     cy.realPress('Tab'); 
  });

  Cypress.Commands.add('Fabricacao', () => {
    cy.insereNum('#input-ano-fabricacao-0',4);
     cy.realPress('Tab'); 
  });

  Cypress.Commands.add('Modelo', () => {
    cy.insereNum('#input-ano-modelo-0',4)
     cy.realPress('Tab'); 
  });

  Cypress.Commands.add('Veiculo', () => {
    cy.insereNumLetra('#input-veiculo-0',20)
     cy.realPress('Tab'); 
  });

  Cypress.Commands.add('TipoUsoTabela', () => {
    cy.get('#select-tipoUso').click()
    cy.get('#option-tipo-uso-0').contains('C. Comum')
    cy.get('#option-tipo-uso-1').contains('C. Inflamável')
    cy.get('#option-tipo-uso-2').contains('Turismo')
    cy.get('#option-tipo-uso-3').contains('Semirreboque')
  });

  Cypress.Commands.add('FuncionalidadeImportar', () => {
    cy.contains('button', 'Importar').click({ force: true });
    cy.get('.w-100 > .align-self-center > :nth-child(1)').contains('Arraste o arquivo para este box')
    cy.get('.w-100 > .align-self-center > :nth-child(2)').contains('ou')
    cy.get('.align-self-center > :nth-child(3)').contains('selecione no seu computador')
  });

  
  Cypress.Commands.add('SelecionaArquivo', () => {
    cy.get('input[type="file"]').attachFile('Arquivo_Invalido.txt');
    cy.contains('Iniciar carga').click()
    cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
    cy.get('input[type="file"]').attachFile('IMPORTACAO-CORRETA03.xlsx');
    cy.contains('Iniciar carga').click()
    cy.get(':nth-child(4) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix')
    cy.get('#input-linha-inicial').type('2',{ force: true })
    cy.contains('button', 'Importar').should('be.disabled')
    cy.get('#input-ano-fabricacao').type('5',{ force: true })
    cy.contains('button', 'Importar').should('be.disabled')
    cy.get('#input-ano-fabricacao').type('4')
    cy.contains('button', 'Importar').should('be.disabled')
    cy.get('#input-ano-modelo').type('5')
    cy.contains('button', 'Importar').should('be.disabled')
    cy.get('#input-placa').type('7')
    cy.contains('button', 'Importar').should('be.disabled')
    cy.get('#input-chassi').type('8')
    cy.contains('button', 'Importar').should('be.disabled')
    cy.get('#input-veiculo').type('3')
    cy.contains('button', 'Importar').should('be.disabled')
    cy.get('#input-tipo-uso').type('6')
    cy.contains('button', 'Importar').should('be.visible')
    cy.contains('button', 'Importar').click();
  });

  Cypress.Commands.add('ValidaBotoes', () => {
    cy.get('#adicionar').click();
    cy.get('#input-placa-4')
    cy.get('#input-chassi-4')
    cy.get('#input-ano-fabricacao-4')
    cy.get('#input-ano-modelo-4')
    cy.get('#input-veiculo-4')

    cy.get('#mat-mdc-checkbox-13-input').click()
    cy.get('#duplicar').click();
    cy.get('#input-placa-5')
    cy.get('#input-chassi-5')
    cy.get('#input-ano-fabricacao-5').should('have.value','1999')
    cy.get('#input-ano-modelo-5').should('have.value','1999')
    cy.get('#input-veiculo-5')

    cy.get('#remover').click();
    cy.get('#mat-mdc-checkbox-13-input').should('not.exist');

    cy.get('#mat-mdc-checkbox-11-input').click()
    cy.get('#mat-mdc-checkbox-12-input').click()

    cy.get('#editar-grupo ').click();
    cy.get('#input-ano-fabricacao-edicaoGrupo').type('2016', { force: true })
    cy.get('#input-ano-modelo-edicaoGrupo').type('2016', { force: true })
    cy.get('#select-veiculo-edicaoGrupo').click()
    cy.get('#option-veiculo-edicaoGrupo').contains('Todos').click()
    cy.get('#select-tipoUso-edicaoGrupo').click({ force: true });
    cy.get('#option-tipoUso-edicaoGrupo').contains('C. Comum').click()

    cy.get('#salvar-edicaoGrupo').click();

    cy.get('#input-ano-fabricacao-1').should('have.value','2016')
    cy.get('#input-ano-fabricacao-2').should('have.value','2016')
    cy.get('#input-ano-modelo-1').should('have.value','2016')
    cy.get('#input-ano-modelo-2').should('have.value','2016')

    cy.get('#mat-select-value-67').contains('C. Comum')
    cy.get('#mat-select-value-69').contains('C. Comum')

  });

  Cypress.Commands.add('ValidarInfoArquivo', () => {
    cy.get('#input-placa-0', { timeout: 480000 }).should('have.value','AUM5602')
    cy.get('#input-chassi-0').should('have.value','9BWAB45U3CT115315')
    cy.get('#input-ano-fabricacao-0').should('have.value','2001')
    cy.get('#input-ano-modelo-0').should('have.value','2002')
    cy.get('#input-veiculo-0').should('have.value','')
    cy.get('mat-select[formcontrolname="tipoUso"] .mat-mdc-select-value-text span').eq(0).should('have.text', 'C. Comum');
 
    cy.get('#input-placa-1').should('have.value','UTK1332')
    cy.get('#input-chassi-1').should('have.value','OIY475UJHRTY123DH')
    cy.get('#input-ano-fabricacao-1').should('have.value','2001')
    cy.get('#input-ano-modelo-1').should('have.value','2001')
    cy.get('#input-veiculo-1').should('have.value','')
    cy.get('mat-select[formcontrolname="tipoUso"] .mat-mdc-select-value-text span').eq(1).should('have.text', 'C. Inflamável');

    cy.get('#input-placa-2').should('have.value','MWK5731')
    cy.get('#input-chassi-2').should('have.value','8EgRAuBAr9c637533')
    cy.get('#input-ano-fabricacao-2').should('have.value','2016')
    cy.get('#input-ano-modelo-2').should('have.value','2016')
    cy.get('#input-veiculo-2').should('have.value','')
    cy.get('mat-select[formcontrolname="tipoUso"] .mat-mdc-select-value-text span').eq(2).should('have.text', 'Turismo');
 
    cy.get('#input-placa-3').should('have.value','HTJ6755')
    cy.get('#input-chassi-3').should('have.value','2dkPdPxxAC1zm0962')
    cy.get('#input-ano-fabricacao-3').should('have.value','1999')
    cy.get('#input-ano-modelo-3').should('have.value','1999')
    cy.get('#input-veiculo-3').should('have.value','')
    cy.get('mat-select[formcontrolname="tipoUso"] .mat-mdc-select-value-text span').eq(3).should('have.text', 'C. Comum');
   
  });
  
   