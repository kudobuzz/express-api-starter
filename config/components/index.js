'use strict'

const mongodb = require('./mongodb')
const server = require('./server')
const config = require('./logger')

module.exports = {
  mongodb,
  server,
  config
}
