'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const todoRouter = require('./todos/routes.js')

const app = express()

app.use(bodyParser.json())

app.use('/api/todo/', todoRouter)

module.exports = app
