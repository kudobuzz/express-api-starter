'use strict'

const { Router } = require('express')
const v1Router = new Router()
const todoRoutes = require('./todos')()

v1Router.use('/todos', todoRoutes)

function v1 () {
  return v1Router
}

module.exports = v1
