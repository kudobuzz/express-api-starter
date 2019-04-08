'use strict'

const mongoose = require('mongoose')
const request = require('supertest')
const config = require('../../config')
const app = require('../../api')

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
            await mongoose.connections.dropDatabase()
        },
        async closeMongoDB() {
            await mongoose.connection.close()
 }
}