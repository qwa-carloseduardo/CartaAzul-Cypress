Cypress.Commands.add('InsereTresNovosItens', () => {
    cy.get('button[aria-haspopup="menu"] mat-icon')
    .contains('more_vert')
    .click({ force: true });
    cy.get('button[role="menuitem"]')
    .contains('Endosso Inclusão')
    .click({ force: true });

    cy.get('#qtd-carga-comum').type('2',{force: true})
    cy.get('#qtd-turismo').type('1',{force: true})
    cy.get('#btn-buscar-oferta').click({force: true})
    cy.SelecionaPrimeiraOferta()
    cy.contains(' Incluir/Editar Itens ', { timeout: 480000 }).click()
    cy.get('#input-placa-0').type(gerarPlaca(), { timeout: 480000 })
    cy.realPress('Tab'); 
    cy.get('#input-chassi-0', { timeout: 480000 }).type(gerarChasse())
    cy.realPress('Tab'); 
    cy.get('#input-fabricacao-0', { timeout: 480000 }).type('20021')
    cy.get('#input-modelo-0', { timeout: 480000 }).type('20022')
    cy.get('#input-veiculo-0', { timeout: 480000 }).type('3694')
    cy.realPress('Tab'); 

    cy.get('#input-placa-1').type(gerarPlaca(), { timeout: 480000 })
    cy.realPress('Tab'); 
    cy.get('#input-chassi-1', { timeout: 480000 }).type(gerarChasse())
    cy.realPress('Tab'); 
    cy.get('#input-fabricacao-1', { timeout: 480000 }).type('20021')
    cy.get('#input-modelo-1', { timeout: 480000 }).type('20022')
    cy.get('#input-veiculo-1', { timeout: 480000 }).type('11460')
    cy.realPress('Tab'); 

    cy.get('#input-placa-2').type(gerarPlaca(), { timeout: 480000 })
    cy.realPress('Tab'); 
    cy.get('#input-chassi-2', { timeout: 480000 }).type(gerarChasse())
    cy.realPress('Tab'); 
    cy.get('#input-fabricacao-2', { timeout: 480000 }).type('20021')
    cy.get('#input-modelo-2', { timeout: 480000 }).type('20022')
    cy.get('#input-veiculo-2', { timeout: 480000 }).type('116')
    cy.realPress('Tab'); 
    cy.wait(3000)
    cy.get('#btn-concluir').click({ force: true })
   
   cy.FormaPagamento();
   cy.get('#span-numero-orcamento', { timeout: 480000 })
   .invoke('text')
   .then(($numeroOrcamento) => {
     Cypress.env('numeroOrcamentoGerado', $numeroOrcamento.trim());
     cy.log($numeroOrcamento);
   cy.get('#btn-salvar').click();
   cy.get('#transmitir').click();
   cy.get('#checkbox-transmitir-input').click();
   cy.get('#btn-transmitir-proposta').click({ force: true });
   cy.get('#input-numero-orcamento').type($numeroOrcamento.trim(), { force: true });
   cy.get('#btn-pesquisar').click({ force: true });
   cy.get('#tipo-negocio-doc-0', { timeout: 480000 })
   .invoke('text')
   .then((text) => {
     expect(text.trim()).to.eq('Endosso de Exclusão');
     return $numeroOrcamento.trim();
    });
   });
});


  function gerarChasse() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; 
    let codigo = '';
    
    for (let i = 0; i < 17; i++) {
      codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    
    return codigo;
  }

  function gerarPlaca() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
    const numeros = '0123456789'; 
    let codigo = '';

    for (let i = 0; i < 3; i++) {
        codigo += letras.charAt(Math.floor(Math.random() * letras.length));
    }

    for (let i = 0; i < 4; i++) {
        codigo += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }

    return codigo;
}

  