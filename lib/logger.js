'use strict'

const loggerMaker = require('@kudobuzz/express-bunyan-logger')

module.exports = (options) => {
  const logger = loggerMaker({ name: 'nodejs-api-starter' })
  return options ? logger(options) : logger
}
