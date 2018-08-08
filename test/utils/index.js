'use strict'

const api = require('../../api/app')
const request = require('supertest')
const db = require('../../lib/resources/db')()

const dbSetup = _ =>
  new Promise(resolve => {
    if (!db.isConnected()) {
      db.connect()
      db.on('connected', resolve)
    }

    resolve()
  })

const getRequest = (app = api) => request(app)

const tearDown = _ => db.getConnection().dropDatabase()

const deleteRequireCache = key => delete require.cache[key]

const deleteAllRequireCache = _ =>
  Object.keys(require.cache).forEach(key => delete require.cache[key])

module.exports = {
  dbSetup,
  tearDown,
  getRequest,
  deleteRequireCache,
  deleteAllRequireCache
}
