function formatarData(data) {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0'); 
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}
     Cypress.Commands.add('testeModalDistribuicao', () => {
      cy.SUSEP2()
      cy.SUSEP3()
      cy.PorcentagemSusep2()
      cy.PorcentagemSusep3()
      cy.get('#btn-cancelar-distribuicao').click()
     });

     Cypress.Commands.add('verificaEstado', () => {
      cy.AcessaModalDistribuicao();
      cy.SusepLider();
      cy.PorcentagemSusepLider();
      cy.SeguroNovo();
     });

     Cypress.Commands.add('SeguroNovo', () => {
      cy.verificaEstadoBotao('#tipo-Seguro-1-input');
     });

     Cypress.Commands.add('TipoDeVigencia', () => {
      cy.get('#select-tipo-vigencia')
      .invoke('text') 
      .should('equal', 'Anual'); 
    

     });

     Cypress.Commands.add('IniicoDaVigencia', () => {
      const dataHoje = formatarData(new Date());
      cy.get('#input-inicio-vigencia')
        .invoke('val')
        .then((valor) => {
          expect(valor).to.equal(dataHoje);
        });
        cy.TestaCampoInicioDaVigencia();
     });

     Cypress.Commands.add('TestaCampoInicioDaVigencia', () => {
      cy.insereNumLetra('#input-inicio-vigencia', 10);
      const hoje = new Date();
      const dataMenor = new Date(hoje.getFullYear(), hoje.getMonth() - 1, hoje.getDate() + 1);
      const dataMaior = new Date(hoje.getFullYear(), hoje.getMonth() + 1, hoje.getDate() - 1);
    
      const dataMenorFormatada = formatarData(dataMenor);
      const dataMaiorFormatada = formatarData(dataMaior);
    
      cy.get('#input-inicio-vigencia').clear().type(dataMenorFormatada);
    });

     Cypress.Commands.add('FinalDaVigencia', () => {
      cy.get('#input-inicio-vigencia')
        .invoke('val')
        .then((valor1) => {
          const [dia1, mes1, ano1] = valor1.split('/');
          const dataInicial = new Date(`${ano1}-${mes1}-${dia1}`);
    
          cy.get('#input-final-vigencia')
            .invoke('val')
            .then((valor2) => {
              const [dia2, mes2, ano2] = valor2.split('/');
              const dataFinal = new Date(`${ano2}-${mes2}-${dia2}`);
    
              const dataEsperada = new Date(dataInicial);
              dataEsperada.setFullYear(dataInicial.getFullYear() + 1);
    
              expect(dataFinal.getTime()).to.equal(dataEsperada.getTime());
            });
        });
        cy.get('#input-final-vigencia').should('be.disabled');
    });

    Cypress.Commands.add('CpfCnpj', () => {
      cy.insereNum('#input-cpfCnpj',14)
      cy.validaRegraCpf();
    });

    Cypress.Commands.add('validaRegraCpf', () => {
      const cpf = gerarCPF();  
      cy.get('#input-cpfCnpj').clear().type('82816545000135')
      cy.get('body').click(100, 200);
      cy.get('input[formcontrolname="nome"]').should('not.have.value', '');

      cy.get('#input-cpfCnpj').clear().type('12345678123233')
      cy.get('body').click(100, 200);
          cy.get('mat-error').each(($el) => {
        cy.wrap($el).should('contain.text', 'Serviço para consulta de segurado indisponível');
      });
      cy.get('#input-cpfCnpj').clear().type(cpf)
      cy.get('body').click(100, 200);
      cy.get('mat-error').each(($el) => {
        cy.wrap($el).should('contain.text', 'CPF/CNPJ não encontrado. Preencha os dados adicionais');
      });

    });

    Cypress.Commands.add('NomeRazaoSocial', () => {
      cy.insereNumLetra('#input-nome-razaoSocial',14)
    });

    Cypress.Commands.add('ToolTipNomeSocial', () => {
      cy.get('.mat-icon').eq(1).should('exist')
    });

    Cypress.Commands.add('botaoClientePossuiNomeSocial', () => {
      cy.get('#input-cpfCnpj').clear().type('41262887755')
      cy.get('#checkbox-nomeSocial-input').click();
      cy.get(':nth-child(1) > .col > .mat-mdc-form-field > .mat-mdc-text-field-wrapper');
    });

    Cypress.Commands.add('NomeSocial', () => {
      cy.get('#input-nomeSocial').type('1a2b3c4d5e6f7g', { force: true });
      cy.get('.col > mat-label').contains('O nome social será utilizado em todas as propostas, apólices, certificados, títulos e documentos contratuais emitidos pela Porto. Os dados fornecidos são de responsabilidade do(a) Corretor(a).')
    });

    Cypress.Commands.add('AtividadeDaEmpresa', () => {
      const cnpj = gerarCNPJ();  
      cy.get('#input-cpfCnpj').clear().type(cnpj)
      cy.DaClickNaTela()
      cy.wait(2000)
      cy.insereNumLetra('#input-atividade-empresa',10);
    });

    Cypress.Commands.add('CargaComum', () => {
      cy.get('#qtd-carga-comum').type('1234', { force: true });
    });

    Cypress.Commands.add('Turismo', () => {
      cy.get('#qtd-turismo').type('1234', { force: true });
    });

    Cypress.Commands.add('Semirreboque', () => {
      cy.get('#input-semirreboque').type('1234', { force: true });
    });
    
    Cypress.Commands.add('ToolTipCargaComum', () => {
      cy.get('mat-icon[mattooltip="Para caminhões ou rebocadores destinados a transporte de bens e mercadorias."]', { timeout: 10000 }).should('exist');
    });
    

    Cypress.Commands.add('ToolTipTurismo', () => {
      cy.get('mat-icon[mattooltip="Para ônibus, vans e micro-ônibus, destinados a transporte de pessoas com finalidade turística (passeios)."]', { timeout: 10000 })
      .should('exist');
    });

    Cypress.Commands.add('ToolTipSemirreboque', () => {
      cy.get('mat-icon[mattooltip="Destinado a transporte de carga, sem tração própria, necessário estar atrelado a um veículo automotor (Rebocador)."]', { timeout: 10000 })
    .should('exist');  
    });
    
    
    

     



   // modal distribuicao
   Cypress.Commands.add('AcessaModalDistribuicao', () => {
    cy.get('.mdc-button__label').contains('Alterar').click();
   });
   
   Cypress.Commands.add('SUSEP2', () => {
    cy.insereNum('#Susep-2',6);
   });

   Cypress.Commands.add('PorcentagemSusep2', () => {
    cy.get('#Porcentagem-Susep2')
      .clear({ force: true })
      .type('10', { force: true }).focus();
      cy.realPress('Tab'); 
  
    cy.get('#Porcentagem-Suseplider')
      .invoke('val')
      .then(value => {
        cy.log('Valor atual do campo:', value); 
        expect(value).to.eq('90%'); 
      });
  });
  

   Cypress.Commands.add('SUSEP3', () => {
    cy.insereNum('#Susep-3',6);
   });

   Cypress.Commands.add('PorcentagemSusep3', () => {
    cy.get('#Porcentagem-Susep3').clear({ force: true }).type('10', { force: true });
    cy.get('body').realPress('Tab');
    cy.get('#Porcentagem-Suseplider')
      .invoke('val')
      .then(value => {
        cy.log('Valor atual do campo:', value);
        expect(value).to.eq('80%');
   });
  });

   Cypress.Commands.add('SusepLider', () => {
    cy.get('#Susep-Lider').should('be.disabled');
   });

   Cypress.Commands.add('PorcentagemSusepLider', () => {
    cy.get('#Porcentagem-Suseplider').should('be.disabled');
   });

   Cypress.Commands.add('BuscarOferta', () => {
    const cpf = gerarCPF();  
      cy.get('#input-cpfCnpj').clear().type('82816545000135')
    cy.get('#input-nome-razaoSocial').type('Teste')
    cy.get('#input-atividade-empresa').clear().type('Software', { force: true });
    cy.get('#input-atividade-empresa').click()
    cy.get('.mdc-list-item__primary-text').click()
    cy.get('#qtd-carga-comum').type('1', {force: true})
    cy.get('#btn-buscar-oferta ').click()
  });

   Cypress.Commands.add('TesteBuscarOferta', () => {
    cy.get('#input-nome-razaoSocial').type('Teste')
    cy.get('#input-atividade-empresa').clear().type('Software', { force: true });
    cy.get('#mat-mdc-form-field-label-32 > .ng-tns-c1205077789-26').type('1')
    cy.get('#input-atividade-empresa').click()
    cy.get('.mdc-list-item__primary-text').click()
    cy.get('#qtd-carga-comum').clear()
    cy.get('#input-semirreboque').clear().type('1')
    cy.get('#qtd-turismo').clear().type('1')
    cy.get('#btn-buscar-oferta ').click()
    cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label')
  .invoke('text')
  .then((text) => {
    const cleanedText = text.replace(/\s+/g, ' ').trim(); 
    expect(cleanedText).to.equal('Para contratação do semirreboque, obrigatório contratação de rebocador');
  });
  
    cy.get('#qtd-carga-comum').type('1', { force: true });
    cy.get('#input-semirreboque').clear().type('100')
    cy.contains('Buscar ofertas').click()
    cy.get('div.mat-mdc-snack-bar-label').should('contain.text', 'Só é permitido 2(dois) semirreboques para cada 1(um) carga comum/inflamável');

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