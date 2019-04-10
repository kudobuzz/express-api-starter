'use strict'

const { isConnected, mongodb } = require('@kudobuzz/mongodb-utils')
const config = require('../../../config')

module.exports = _ => {
  return mongodb(config('MONGODB_URL'))
}

module.exports.isConnected = isConnected
