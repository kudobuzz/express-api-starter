
'use strict'

const logger = require('@kudobuzz/logger')
const config = require('../config')

exports = module.exports = function () {
  return logger({
    serviceName: config('SERVICE_NAME'),
    enabled: config('LOG_ENABLED')
  })
}

exports.logger = logger