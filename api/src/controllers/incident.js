const connection = require('../database/connection');

module.exports = {
    index: async (req, res) => {
        try {
            const { page = 1 } = req.query

            const [count] = await connection('incidents').count()

            const incidents = await connection('incidents')
                .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
                .limit(5)
                .offset((page - 1) * 5)
                .select(['incidents.*',
                    'ongs.name',
                    'ongs.email',
                    'ongs.whatsapp',
                    'ongs.city',
                    'ongs.uf'])

            res.header('X-Total-Count', count['count(*)'])

            return res.status(200).json(incidents);
        }
        catch (error) {
            return res.status(400).json(error)
        }
    },
    store: async (req, res) => {
        try {
            const { title, description, value } = req.body
            const ong_id = req.headers.authorization

            const [id] = await connection('incidents').insert({ title, description, value, ong_id })

            return res.status(201).json({ id })
        }
        catch (error) {
            return res.status(400).json(error)
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params
            const ong_id = req.headers.authorization

            const incident = await connection('incidents')
                .where('id', id)
                .select('ong_id')
                .first()

            if (incident.ong_id !== ong_id) {
                return res.status(401).json({ error: 'Unauthorized' })
            }

            await connection('incidents').where('id', id).delete()

            return res.status(204).send('Ok');
        }
        catch (error) {
            return res.status(400).json(error)
        }
    }
}