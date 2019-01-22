'use strict'

const mongoose = require('@kudobuzz/mongodb-utils').getMongoose()
const db = require('../../lib/services/db')()

module.exports = {
  deleteAllRequireCache: _ =>
    Object.keys(require.cache).forEach(key => delete require.cache[key]),
  deleteRequireCache: key => delete require.cache[key],
  async dbSetup () {
    return new Promise(resolve => {
      const shouldConnectDb = mongoose.connection.readyState === 0

      if (shouldConnectDb) {
        db.connect()
        db.on('connected', resolve)
      } else {
        resolve()
      }
    })
  },
  async tearDown () {
    await mongoose.connection.dropDatabase()
  }
}
