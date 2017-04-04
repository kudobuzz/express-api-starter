'use strict'
const app = require('./app')()
const config = require('../config')
const db = require('../helpers/services/db')()
const servicesManager = require('../helpers/services/manage-services')

const log = require('../helpers/logger').logger.child({type: 'server'})
let server

const startServer = _ => {
  log.info('Start server on port', config('PORT'))
  server = app.listen(config('PORT'))
}

const stopServer = _ => {
  if (server) {
    log.info('Close server on port', config('PORT'))
    server.close()
  }
}


servicesManager(db)
  .connect()
  .on('services:ready', startServer)
  .on('services:disconnected', stopServer)


