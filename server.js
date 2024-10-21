const express = require('express');
const { spawn } = require('child_process');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.get('/seguro-novo', (req, res) => {
    const tipo = req.query.tipo; 
    const qtdApolices = req.query.qtdApolices; 
    const numeroApolice = req.query.numeroApolice; 

    console.log(`Recebido tipo: ${tipo}, quantidade de apólices: ${qtdApolices}${numeroApolice ? ` e número da apólice: ${numeroApolice}` : ''}`);

    const child = spawn('npx', ['cypress', 'run', '--spec', 'C:\\Users\\aliss\\Desktop\\PORTO\\Cypress\\Porto.Cy\\cypress\\e2e\\Funcionalidades\\SeguroNovo.cy.js', '--env', `tipo=${tipo},qtdApolices=${qtdApolices},numeroApolice=${numeroApolice}`], { shell: true });


    child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    child.on('error', (err) => {
        console.error('Erro ao iniciar o processo:', err);
        return res.status(500).json({ error: 'Erro ao iniciar o Cypress' });
    });

    child.on('close', (code) => {
        console.log(`Cypress concluído com o código: ${code}`);

        fs.access('cypress/documentosGerados.json', fs.constants.F_OK, (err) => {
            if (err) {
                console.error('Arquivo não encontrado:', err);
                return res.status(404).json({ error: 'Arquivo de documentos gerados não encontrado' });
            }

            fs.readFile('cypress/documentosGerados.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('Erro ao ler o arquivo:', err);
                    return res.status(500).json({ error: 'Erro ao ler o arquivo de documentos gerados' });
                }

                const documentosGerados = JSON.parse(data);

                fs.writeFile('cypress/documentosGerados.json', JSON.stringify([], null, 2), (err) => {
                    if (err) {
                        console.error('Erro ao limpar o arquivo:', err);
                        return res.status(500).json({ error: 'Erro ao limpar o arquivo de documentos gerados' });
                    }
                });

                res.json({
                    documentosGerados: documentosGerados
                });
            });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
