'use strict'
const app = require('./app')()
const config = require('../config')

const port = config('PORT')

let server
const serverReady = _ => {
    if (server) return server
  
    server = app.listen(port, _ => log.info(`server running on port ${PORT}`))
  }
module.exports = serverReady