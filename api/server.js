'use strict'

const { start } = require('@kudobuzz/resource-manager')

const app = require('./app')()
const db = require('../lib/resources/mongodb/mongodb')
const config = require('../config')
const log = require('../lib/log')().child({ type: 'api/server' })


let server
const PORT = config('PORT')

const onReady = _ => {
  if (server) return server

  server = app.listen (PORT, _ => log.info(`server running on port ${PORT}`))
}

const onShutDown = _ => {
  if (server) {
    log.info('shutting down server on port 3000')
    return server.close
  }
}
start ({ resources:  [db()],  onReady ,onShutDown})
