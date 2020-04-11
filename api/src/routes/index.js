const router = require('express').Router()
const incident = require('./incident')
const profile = require('./profile')
const session = require('./session')
const ong = require('./ong')

router.use('/incidents', incident)
router.use('/profile', profile)
router.use('/session', session)
router.use('/ongs', ong)

module.exports = app => app.use('/', router)