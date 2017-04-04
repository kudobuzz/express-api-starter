'use strict'
const bunyan = require('bunyan')
const morgan = require('morgan')
const config = require('../config')

const customSerializers = {}

const bunyanConfig = {
  name: 'serviceName',
  serializers: Object.assign(bunyan.stdSerializers, customSerializers),
  streams: [{
    stream: process.stdout,
    level: config('LOG_LEVEL')
  }]
}

const logger = bunyan.createLogger(bunyanConfig)

const morganLogFormat = [
  'type/:type',
  'requestId/:req-id',
  'remoteAddress/:remote-addr',
  'remoteUser/:remote-user',
  'httpVersion/:http-version',
  'date/:date[web]',
  'referrer/:referrer',
  'userAgent/:user-agent',
  'requestMethod/:method',
  'requestUrl/:url',
  'requestHeader/:req[header]',
  'responstTime/:response-time',
  'responseHeader/:res[header]',
  'resContentLength/:res[content-length]',
  'resStatus/:status'
]

morgan.token('type', req => 'reqResLogger')

morgan.token('req-id', req => req.id)

/**
 * This allows morgan to use bunyan for logging
 * @return {Object} Describes write field that will passed to morgan stream.
 */
const bunyanMorganStream = _ => {
  const log = logger.child({type: 'requestLogger'})
  const write = log.info
  return {write}
}

/**
   * A simple middleware function to attach a log field to each req.
   * @param  {Object}   req
   * @param  {Object}   res
   * @param  {Function} next
   */
const attachLogToReq = routeName => {
  if (!routeName) {
    throw new Error('Feature tag is required')
  }

  const log = logger.child({type: routeName})

  return (req, res, next) => {
    if (log) {
      req.log = log
      log.info(`insider route ${routeName}`)
    }
    next()
  }
}

module.exports = {
  logger,
  reqResLogger: morgan(morganLogFormat.join(' '), {stream: bunyanMorganStream}),
  attachLogToReq
}
