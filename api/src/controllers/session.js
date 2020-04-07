const connection = require('../database/connection');

module.exports = {
    store: async (req, res) => {
        try {
            const { id } = req.body

            const ong = await connection('ongs')
                .where('id', id)
                .select('name')
                .first()

            if (!ong) {
                return res.status(404).json({ error: 'not found' })
            }

            return res.status(200).json(ong)
        }
        catch (error) {
            return res.status(400).json(error)
        }
    }
}