'use strict'

const mongoose = require('mongoose')
const config = require('../../config')
const { mongodb } = require('@kudobuzz/mongodb-utils')

const getDbResource = _ => {
  const db = mongodb(config('DB_URL'))

  return Object.assign(db, {
    name: 'mongodb',
    isConnected () {
      return mongoose.connection.readyState === 1
    },
    getConnection () {
      return mongoose.connection
    }
  })
}

module.exports = getDbResource
