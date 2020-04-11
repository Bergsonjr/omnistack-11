const incident = require('express').Router()
const incidentController = require('../controllers/incident')
const { incidentIndexValidator, incidentStoreValidator, incidentsDeleteValidator } = require('../middlewares/validators')

incident.route('/')
    .get(incidentIndexValidator, incidentController.index)
    .post(incidentStoreValidator, incidentController.store)

incident.delete('/:id', incidentsDeleteValidator, incidentController.delete)

module.exports = incident