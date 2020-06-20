const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        const pedidos = await connection('pedidos').select('*');

        return res.json(pedidos);
    },

    async create(req, res) {
        const {data_emissao, data_aprovacao, descricao, parcelas, cliente_id, produto_id} = req.body;

        const id = crypto.randomBytes(4).toString('HEX');
            
        await connection('pedidos').insert({
            id,
            data_emissao,
            data_aprovacao,
            descricao,
            parcelas,
            cliente_id,
            produto_id
        });

        return res.send({id});
    }
}