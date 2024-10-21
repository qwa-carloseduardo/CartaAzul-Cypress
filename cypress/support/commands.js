// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

let LOCAL_STORAGE_MEMORY = {};

// Comando para salvar o localStorage
Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

// Comando para restaurar o localStorage
Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});


import ExcelJS from 'exceljs';
import 'cypress-file-upload';
import 'cypress-plugin-tab';
import 'cypress-real-events/support';




Cypress.Commands.add('readExcel', (filePath) => {
  cy.readFile(filePath, 'binary').then((fileContent) => {
    const workbook = new ExcelJS.Workbook();

    return workbook.xlsx.load(fileContent).then(() => {
      const worksheet = workbook.worksheets[0]; 
      const jsonData = [];

      worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
        jsonData.push(row.values);
      });
      jsonData.shift();
      cy.wrap(jsonData); 
    });
  });
});


