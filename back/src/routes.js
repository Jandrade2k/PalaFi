const express = require('express');

const cliente = require('./controllers/clienteController');
const produto = require('./controllers/produtoController')

const routes = express.Router()

// Rotas aqui.

routes.get('/clientes', cliente.index);

routes.post('/add_cliente', cliente.create);

routes.get('/produtos', produto.index);

routes.post('/add_produto', produto.create);

module.exports = routes;