const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '.')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
    console.log('Aplicación escuchando en el puerto 3000');
});
