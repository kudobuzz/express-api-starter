'use strict'
const bunyan = require('bunyan')
const morgan = require('morgan')
const config = require('../config')

const customSerializers = {}

const defaultBunyanConfig = {
  name: 'unamed service',
  serializers: Object.assign(customSerializers, bunyan.stdSerializers),
  streams: [{
    stream: process.stdout,
    // Set level to something more than Fatal if log is disabled
    level: config('LOG_ENABLED') ? config('LOG_LEVEL') : bunyan.FATAL + 1
  }]
}

const morganLogFormat = [
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

morgan.token('req-id', req => req.id)

/**
* This allows morgan to use bunyan for logging
* @return {Object} Describes write field that will passed to morgan stream.
*/
const morganStream = ({log, streamName = 'requestLogger'}) => _ => ({write: log.child({type: streamName}).info})

module.exports = function logger (options) {
  const config = Object.assign({}, defaultBunyanConfig, options)

  const log = bunyan.createLogger(config)

  /**
   * Log req and res based on a specific log format
   * @return Express midlleware.
   */
  log.reqResLogger = morgan(morganLogFormat.join(' '), {stream: morganStream(log)})

  /**
   * Attaches log to a request. To log where the req is available, you can
   * access a bunyan log from req.log.
   *
   * @param {String} routeName The name of a route. Usually the resource name.
   * @return {function} Express middleware
   */
  log.attachLogToReq = function attachLog (routeName) {
    if (!routeName) throw new Error('RouteName is required')

    return function routeLogMiddleware (req, res, next) {
      req.log = log.child({type: routeName})
      next()
    }
  }

  return log
}
