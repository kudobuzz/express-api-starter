'use strict'

'use strict'

const asyncPipe = require('@kudobuzz/asyncpipe')
const httpStatus = require('@kudobuzz/http-status')()

const logger = require('../../lib/log')().child({ type: 'health/check-health' })
const isConnected = require('../../lib/resources/mongodb/mongodb').isConnected

const isDbAvailable = () => {
  if (!isConnected()) throw Error('db is not connected')
}

const checkHealth = async (req, res) => {
  asyncPipe(
    _ => logger.info('health check'),
    isDbAvailable,
    _ => logger.info('database is healthy'),
    _ => res.sendStatus(httpStatus.OK)
  )().catch(_ => res.sendStatus(httpStatus.SERVICE_UNAVAILABLE))
}

module.exports.checkHealth = checkHealth