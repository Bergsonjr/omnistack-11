const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    store: async (req, res) => {
        try {
            const id = crypto.randomBytes(4).toString('HEX');
            const { name, email, whatsapp, city, uf } = req.body

            await connection('ongs').insert({ id, name, email, whatsapp, city, uf })

            res.status(201).json({ id }).end()
        }
        catch (error) {
            res.status(400).json(error).end()
        }
    },

    index: async (req, res) => {
        try {
            const ongs = await connection('ongs').select('*')

            res.status(200).json(ongs).end()
        }
        catch (error) {
            res.status(400).json(error).end()
        }
    }
}