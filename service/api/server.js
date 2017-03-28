'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('bodyParser')

const app = express()

module.exports = function server () {
  app.use(bodyParser.json({type: 'application/json'}))
  app.use(cors())
}

