const profile = require('express').Router()
const profileController = require('../controllers/profile')
const { profileIndexValidator } = require('../middlewares/validators')

profile.route('/')
    .get(profileIndexValidator, profileController.index)

module.exports = profile