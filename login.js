const express = require('express');
const app = express();
const port = 3000; // Porta em que o servidor será executado

// Rota para exibir a página index.html
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Rota para exibir a página outra_pagina.html
app.get('/outra_pagina', (req, res) => {
    res.sendFile(__dirname + '/outra_pagina.html');
});

app.get('/pm', (req, res) => {
    res.sendFile(__dirname + '/medico.html');
});


app.get('/loginesenha', (req, res) => {
    res.sendFile(__dirname + '/login e senha.html');
});

app.get('/consulta', (req, res) => {
    res.sendFile(__dirname + '/consulta.html');
});
// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor Express está rodando na porta ${port}`);
});
