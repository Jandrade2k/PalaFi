const crypto = require('crypto')
const connection = require('../database/connection')
const { listAll, create } = require('./clienteController')

module.exports = {
    async index(req, res) {
        const produtos = await connection('produtos').select('*');

        return res.json(produtos);
    },

    async create(req, res) {
        const {nome, valor_compra, valor_venda, quantidade, status, categoria_id} = req.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('produtos').insert({
            id,
            nome,
            valor_compra,
            valor_venda,
            quantidade,
            status,
            categoria_id
        })

        return res.json({id});
    }
}