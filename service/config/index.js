'use strict'
const NODE_ENV = process.env.NODE_ENV || 'development'
const processType = process.env.PROCESS_TYPE || 'api'

let config

if (NODE_ENV === 'development') {
  require('dotenv').config()
}


try {
  config = require('./api')
} catch (error) {
  if (error.code === 'MODULE_NOT_FOUND') {
    throw new Error(`No config for process type: ${processType}`)
  }
  throw error
}

module.exports = env => config[env]
