const session = require('express').Router()
const sessionController = require('../controllers/session')
const { sessionStoreValidator } = require('../middlewares/validators')

session.route('/')
    .post(sessionStoreValidator, sessionController.store)

module.exports = session