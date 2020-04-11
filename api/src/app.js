require('dotenv').config()
const express = require('express');
const { errors } = require('celebrate')
const cors = require('cors')

const app = express()

app.use(cors({
    'Access-Control-Allow-Origin': '*'
}));
app.use(express.json());

require('./routes')(app);

app.use(errors());

module.exports = app

