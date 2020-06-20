const express = require('express');

const cliente = require('./controllers/clienteController');
const produto = require('./controllers/produtoController')
const pedidos = require('./controllers/pedidosController')
const categorias = require('./controllers/categoriasController')

const routes = express.Router()

// Rotas aqui.

routes.get('/clientes', cliente.index);

routes.post('/add_cliente', cliente.create);

routes.get('/produtos', produto.index);

routes.post('/add_produto', produto.create);

routes.get('/pedidos', pedidos.index);

routes.post('/add_pedido', pedidos.create);

routes.get('/categorias', categorias.index);

routes.post('/add_categoria', categorias.create);

module.exports = routes;