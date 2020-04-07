const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    store: async (req, res) => {
        try {
            const id = crypto.randomBytes(4).toString('HEX');
            const { name, email, whatsapp, city, uf } = req.body

            await connection('ongs').insert({ id, name, email, whatsapp, city, uf })

            return res.status(201).json({ id })
        }
        catch (error) {
            return res.status(400).json(error)
        }
    },

    index: async () => {
        try {
            const ongs = await connection('ongs').select('*')

            return res.status(200).json(ongs);
        }
        catch (error) {
            return res.status(400).json(error)
        }
    }
}