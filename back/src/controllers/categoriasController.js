const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const categorias = await connection('categorias').select('*');

        return res.json(categorias);
    },

    async create(req, res) {
        const {nome} = req.body;

        const [id] = await connection('categorias').insert({
            nome
        });

        return res.json({ id });
    }
}