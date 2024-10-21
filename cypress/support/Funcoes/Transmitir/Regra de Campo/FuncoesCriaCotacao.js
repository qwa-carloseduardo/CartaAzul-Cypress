Cypress.Commands.add('Transmitir', (tipo,renovacao) => {
  cy.log('Criando Orcamento')
  cy.buscaOferta(tipo,renovacao);
  cy.AcessaImportacao();
  cy.FazImportacao(tipo);
  cy.get('#span-numero-orcamento', { timeout: 480000 })
    .invoke('text')
    .then(($numeroOrcamento) => {
      Cypress.env('numeroOrcamentoGerado', $numeroOrcamento.trim());
      console.log('[Info] Numero orcamento coletado');
      cy.log($numeroOrcamento);
      if(tipo=='PF'){
        cy.dadosPropostaPF();
      }
      cy.InsereEndereco();
      cy.InsereEmail()
      cy.FormaPagamento();
      cy.get('#btn-salvar').click();
      cy.get('#transmitir').click();
      cy.get('#checkbox-transmitir-input').click();
      cy.get('#btn-transmitir-proposta').click({ force: true });
      
      cy.get('#input-numero-orcamento').type($numeroOrcamento.trim(), { force: true }, { timeout: 48000 });
      cy.get('#btn-pesquisar').click({ force: true });
      cy.Emitir().then(() => {
        return $numeroOrcamento.trim();
      });
    });
});

Cypress.Commands.add('buscaOferta', (tipo,renovacao) => {
  cy.intercept('GET', 'https://apphubtst.portoseguro.brasil/api/frota/cartaazul/v1/pessoas/*').as('cpfRequest'); 
  cy.log(renovacao)
  if(renovacao){
    cy.AdicionaRenovacao(renovacao);
  }
  if (tipo == 'PF') {
    cy.log('Pessoa Fisica')
    cy.get('#input-cpfCnpj').type(gerarCPF());
    cy.realPress('Tab');
    cy.wait('@cpfRequest', { timeout: 10000 });
    
  } else if (tipo == 'PJ') {
    cy.log('Pessoa Juridica')
    cy.get('#input-cpfCnpj').type(gerarCNPJ())
    cy.realPress('Tab');
    cy.get('#input-atividade-empresa').clear({ timeout: 480000 }).type('Software', { force: true });
    cy.get('.mdc-list-item__primary-text', { timeout: 480000 }).then(($el) => { 
      cy.wrap($el).click();
    });
  }

  cy.get('#input-razao-social').type(gerarNomeCompleto(), { timeout: 480000 });
  cy.get('#qtd-carga-comum').type('1', { force: true });
  cy.get('#btn-buscar-oferta').click();
});


Cypress.Commands.add('AcessaImportacao', () => {
  cy.SelecionaPrimeiraOferta()
  cy.contains('Incluir/Editar Itens').click()
});

Cypress.Commands.add('FazImportacao', () => {
  cy.get('#input-placa-0').clear().type(gerarPlaca(), { timeout: 480000 });
  cy.realPress('Tab');
  cy.get('#input-chassi-0', { timeout: 480000 }).clear().type(gerarChassi());
  cy.realPress('Tab');
  cy.get('#input-fabricacao-0', { timeout: 480000 }).invoke('val').then((fabricacao) => {
    if (fabricacao) {
      cy.get('#input-placa-0').clear().type(gerarPlaca(), { timeout: 480000 });
      cy.get('#input-chassi-0', { timeout: 480000 }).clear().type(gerarChassi());
      cy.realPress('Tab');
    }

    cy.get('#input-fabricacao-0').clear({ force: true }).type('2021');
    cy.get('#input-modelo-0').clear({ force: true }).type('2022');
    cy.get('#input-veiculo-0').clear({ force: true }).type('1803');
    cy.realPress('Tab');
    cy.contains('Concluir').click();
  });
});


Cypress.Commands.add('dadosPropostaPF', () => {
  cy.get('#input-data-nascimento', { timeout: 480000 }).type('28072003',{ force: true })
  console.log('[Info] Data Nascimento Inserida');
  cy.get('#input-profissao').type('caminhoneiro', { force: true })
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

Cypress.Commands.add('InsereEndereco', () => {
  cy.get('#input-cep').type('01141030')
  console.log('[Info] Cep inserido');
  cy.get('#input-numero').type('157')
  console.log('[Info] Numero do endereco inserido');
  cy.get('#select-tipo-telefone').click({ force: true });
  cy.get('#option-tipo-telefone-0').click()
  console.log('[Info] Tipo telefone selecionado');
  cy.get('#input-numero-telefone').type('1234567890', { force: true })
  console.log('[Info] Numero telefone inserido');
});


Cypress.Commands.add('InsereEmail', () => {
  cy.get('#input-email-segurado').type('testes@teste.com.br');
  console.log('[Info] E-mail inserido');
});

Cypress.Commands.add('FormaPagamento', () => {
  cy.get('#select-forma-pagamento', { timeout: 480000 }).click({ force: true }, { timeout: 480000 });
  cy.get('#option-forma-pagamento-0').click({ force: true })
  console.log('[Info] Forma pagamento selecionada');
  cy.get('#select-valor-seguro').click({ force: true });
  cy.get('#option-valor-seguro-0').click({ force: true })
  console.log('[Info] Valor Seguro selecionado');
});

Cypress.Commands.add('Emitir', () => {
  const maxTime = 10000; 
  const startTime = Date.now(); 

  const clicarMenuUpdate = () => {
    cy.log('Tentando clicar no menu para atualizar...');
    cy.get('#btn-menu-doc-0', { timeout: 10000 }).click({ force: true });
    cy.get('#btn-item-menu-doc-1', { timeout: 10000 }).click({ force: true });
  };

  const verificarTransmitir = () => {
    const currentTime = Date.now();
    const tempoDecorrido = currentTime - startTime;

    if (tempoDecorrido > maxTime) {
      cy.log('Tempo limite de 30 segundos atingido, saindo do loop.');
      return;
    }

    cy.get('.lbl-class-azul').invoke('text').then((statusDocumento) => {
      statusDocumento = statusDocumento.trim();
      Cypress.env('statusDocumento', statusDocumento); 

      cy.log(`Status atual do documento: "${statusDocumento}"`);
      
      if (statusDocumento === 'Transmitida') {
        clicarMenuUpdate();
        cy.intercept('GET', 'https://apphubtst.portoseguro.brasil/api/frota/cartaazul/v1/cotacoes?numeroDocumento=*&susep=*&page=0&size=5').as('emissaoRequest');
        cy.wait('@emissaoRequest', { timeout: 48000 })
        cy.wait(1000)
        verificarTransmitir();
      } else {
        cy.log(`Status do documento: "${statusDocumento}".`);
      }
    });
  };

  verificarTransmitir();
});

Cypress.Commands.add('AdicionaRenovacao', (renovacao) => {
  renovacao = String(renovacao);
  cy.get(':nth-child(2) > .mdc-form-field > .mdc-radio > #btn-seguro-novo-input').click({ timeout: 480000 });
  cy.get('#input-sucursal').type(renovacao.slice(0, 2));
  cy.get('#input-numero-apolice').type(renovacao.slice(2),{ force: true });
});




  Cypress.Commands.add('AcessaImportacao', () => {
    cy.get('#span-numero-orcamento', { timeout: 480000 })
    .invoke('text')
    .then((numeroOrcamento) => {
      Cypress.env('numeroDoc', numeroOrcamento);
      cy.log('Número do orçamento:', numeroOrcamento);
    });
  
    cy.SelecionaPrimeiraOferta()
    cy.contains('Incluir/Editar Itens').click()
    console.log('[Info] Importacao acessada');
  });
  

  Cypress.Commands.add('SelecionaPrimeiraOferta', () => {
    cy.get(':nth-child(1) > app-resultado-card-oferta > .mat-mdc-card > .mat-mdc-card-content > .mt-4 > .d-block > .mdc-button__label', { timeout: 480000 }).click();
    console.log('[Info] Primeira Oferta Selecionada');
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
  
  function gerarCNPJ() {
    function gerarDigito(base, multiplicadores) {
      let soma = 0;
      for (let i = 0; i < base.length; i++) {
        soma += parseInt(base.charAt(i)) * multiplicadores[i];
      }
      let resto = soma % 11;
      return resto < 2 ? 0 : 11 - resto;
    }
  
    const base = Array.from({ length: 8 }, () => Math.floor(Math.random() * 9)).join('') + '0001';
    const multiplicadores1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const multiplicadores2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  
    const digito1 = gerarDigito(base, multiplicadores1);
    const digito2 = gerarDigito(base + digito1, multiplicadores2);
  
    return base + digito1 + digito2;
  }
  
  function gerarChassi() {
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

  
const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Juliana', 'Lucas', 'Mariana', 'Paulo', 'Roberto', 'Bianca', 'Antone', 'Pietro', 'Gabriel', 'Luana', 'Diogo', 'Marcos', 'Roseni', 'Fabricio', 'Pablo', 'Vinicius', 'Godofredo', 'Junior', 'Aline', 'Jonatas', 'Juan', 'Cirilo', 'Miguel', 'Wesley', 'Heryk', 'Henryk', 'Guilherme', 'Mateus', 'Penelope', 'Claudia', 'Fernanda', 'Rafael', 'Eduarda', 'Thiago', 'Bruna', 'Felipe', 'Isabella', 'Hugo', 'André', 'Larissa', 'Rodrigo', 'Camila', 'Diego', 'Sofia', 'Bruno', 'Alice', 'Ricardo', 'Tereza', 'Henrique', 'Vanessa', 'Emerson', 'Daniela', 'Leonardo', 'Sara', 'Antônio', 'Evelyn', 'Luiz', 'Beatriz', 'Fábio', 'Roberta', 'Fernanda', 'Rafael', 'Eduarda', 'Thiago', 'Bruna', 'Felipe', 'Isabella', 'Hugo'];
const sobrenomes = ['Silva', 'Santos', 'Oliveira', 'Pereira', 'Costa', 'Ferreira', 'Almeida', 'Nascimento', 'Honorio', 'Afanasieve', 'Moreira', 'Antunes', 'Salazar', 'Favareto', 'Sousa', 'Ribeiro', 'Moraes', 'Machado', 'Cardoso', 'Barbosa', 'Correia', 'Gomes', 'Lima', 'Azevedo', 'Carvalho', 'Teixeira', 'Monteiro', 'Mendes', 'Freitas', 'Araújo', 'Vieira', 'Rocha', 'Martins', 'Leal', 'Macedo', 'Coelho', 'Siqueira', 'Farias', 'Nogueira', 'Borges', 'Campos', 'Moraes', 'Miranda', 'Fernandes', 'Barros', 'Bittencourt', 'Pinto', 'Andrade', 'Reis', 'Dias', 'Duarte', 'Mello', 'Sampaio', 'Batista', 'Pinheiro', 'Ramos', 'Bastos', 'Tavares', 'Xavier', 'Lopes', 'Cavalcanti', 'Vasconcelos', 'Marques', 'Fonseca', 'Furtado', 'Guimarães', 'Torres', 'Pacheco', 'Rangel', 'Souza', 'Lacerda', 'Gonçalves'];

function gerarNomeCompleto() {
  const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
  const sobrenomeAleatorio = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
  return `${nomeAleatorio} ${sobrenomeAleatorio}`;
}