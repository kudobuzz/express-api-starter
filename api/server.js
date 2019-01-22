'use strict'

const app = require('./app')
const config = require('../config')
const db = require('../lib/resources/db')()
const { start } = require('@kudobuzz/resource-manager')
const log = require('../lib/logger')().child({ type: 'server' })

let server

const onReady = _ => {
  if (server) return server

  server = app.listen(config('PORT'), _ =>
    log.info(`Server running on port ${config('PORT')}`))
}

const onShutDown = _ => {
  if (server) {
    log.info(`Shutting down server on port ${config('PORT')}`)
    return server.close()
  }
}

start({ resources: [db], onReady, onShutDown })
