'use strict'

const mongoose = require('mongoose')
const request = require('supertest')

const config = require('../../config')
const app = require('../../api/app')()
const db = require('../../lib/resources/mongodb/mongodb')()
const isConnected = require('../../lib/resources/mongodb/mongodb').isConnected

module.exports = {
  dbSetup: async () => {
    if (!isConnected()) {
      await db.connect(config('MONGODB_URL'))
    }
  },
  api() {
    return request(app)
  },
  tearDown: async () => {
    await mongoose.connection.dropDatabase()
  },
  async closeMongoDB() {
    await mongoose.connection.close()
  },
  deleteAllRequireCache: _ =>
    Object.keys(require.cache).forEach(key => delete require.cache[key]),
  deleteRequireCache: key => delete require.cache[key],
  deleteAllProcessEnv: () =>
    Object.keys(process.env).forEach(key => delete process.env[key]),
  deleteProcessEnvKeys: (...keys) =>
    keys.forEach(key => delete process.env[key]),
  copyEnvs: _ => Object.assign({}, process.env)
}
