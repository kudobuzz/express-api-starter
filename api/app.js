'use strict'

const express = require('express')
const todoRouter = require('./todos')
const logger = require('../lib/logger')()
const bodyParser = require('body-parser')
const { sendError } = require('../lib/utils')

const app = express()

app.use(logger.reqResLogger())
app.use(logger.errorLogger())
app.use(bodyParser.json())

app.use('/api/todos/', todoRouter)

app.use(sendError)

module.exports = app
