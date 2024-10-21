// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './Login'
import './LoginLocal'
import './Funcoes/Pesquisa/Regra de Campo/FuncoesPesquisar'
import './Ultils'
import './Funcoes/Cotação/Regra de Campo/FuncoesCotacao'
import './Funcoes/Calculo/Regra de Campo/FuncoesCalcular'
import './Funcoes/Importar/Regra de Campo/FuncoesImportacao'
import './Funcoes/Transmitir/Regra de Campo/FuncoesCriaCotacao'
import './Funcoes/EndossoInclusao/FuncoesEndossoInclusao'
import './Funcoes/Endosso Cancelamento/FuncoesEndossoCancelamento'
import './Funcoes/Endosso Exclusao/FuncoesEndossoExclusao'
import './Funcoes/Proposta/Regra de Campo/FuncoesProposta'

// Alternatively you can use CommonJS syntax:
// require('./commands')