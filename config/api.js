'use strict'

const mongodb = require('./components/mongodb')
const server = require('./components/server')
const logger = require('./components/logger')

module.exports = Object.assign({}, mongodb, server, logger)
