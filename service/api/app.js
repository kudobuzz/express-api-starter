'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

module.exports = function server () {
  app.use(bodyParser.json())
  app.use(cors())

  return app
}
