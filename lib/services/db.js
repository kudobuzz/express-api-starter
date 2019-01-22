'use strict'

const { mongodb } = require('@kudobuzz/mongodb-utils')
const config = require('../../config')

module.exports = () => {
  const db = mongodb(config('DB_URL'))
  return Object.assign(db, { name: 'db' })
}
