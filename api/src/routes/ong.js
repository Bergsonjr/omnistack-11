const ong = require('express').Router()
const ongController = require('../controllers/ong')
const { ongStoreValidator } = require('../middlewares/validators')

ong.route('/')
    .get(ongController.index)
    .post(ongStoreValidator, ongController.store)

module.exports = ong