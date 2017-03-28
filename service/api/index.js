'use strict'

const app = require('./app')()
const config = require('../config')


const server = app.listen(config('PORT'))

process.on('SIGTERM', function () {
  server.close()
  process.exit()
})

process.on('SIGINT', function () {
  server.close()
  process.exit()
})
