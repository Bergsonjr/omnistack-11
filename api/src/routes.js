const ong = require('./controllers/ong');
const incident = require('./controllers/incident');
const profile = require('./controllers/profile');
const session = require('./controllers/session');
const express = require('express');
const routes = express.Router();

routes.get('/ongs', ong.index)
routes.post('/ongs', ong.store)

routes.get('/profile', profile.index)

routes.post('/session', session.store)

routes.get('/incidents', incident.index)
routes.post('/incidents', incident.store)
routes.delete('/incidents/:id', incident.delete)

module.exports = routes;