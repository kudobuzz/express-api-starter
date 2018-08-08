'use strict'

const mongoose = require('mongoose')
const db = require('../../lib/resources/db')()

const dbSetup = _ =>
  new Promise(resolve => {
    if (db.isConnected()) {
      db.connect()
      db.on('connected', resolve)
    }

    resolve()
  })

const deleteRequireCache = key => delete require.cache[key]

const deleteAllRequireCache = _ =>
  Object.keys(require.cache).forEach(key => delete require.cache[key])


module.exports = {
  dbSetup,
  deleteRequireCache,
  deleteAllRequireCache
}
