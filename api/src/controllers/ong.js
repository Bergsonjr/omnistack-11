const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
    store: async (req, res) => {
        try {
            const id = generateUniqueId()
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