const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        const clientes = await connection('clientes').select('*');
    
        return res.json(clientes);
    },

    async create(req, res) {
        const {nome, cpf, telefone, celular, whatsapp, cep, endereco, numero, complemento} = req.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('clientes').insert({
        id,
        nome,
        cpf,
        telefone,
        celular,
        whatsapp,
        cep,
        endereco,
        numero,
        complemento
    })

    return res.json({id});
    }
}