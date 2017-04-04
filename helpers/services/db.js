const mongoose = require('mongoose')
const config = require('../../config')
const EventEmitter = require('events').EventEmitter

const log = require('../logger').logger.child({type: 'db'})

module.exports = _ => {
  const connection = mongoose.connection

  const db = Object.create(EventEmitter.prototype)
  EventEmitter.call(db)

  return Object.assign(db, {
    name: 'db',
    getConnection () {
      return connection
    },

    connect ({DB_URL = config('DB_URL')} = {}) {
      mongoose.connect(DB_URL, { server: { reconnectTries: Number.MAX_VALUE } })

      connection
        .on('open', _ => log.info(`db connection opened to ${DB_URL}`))
        .on('connecting', _ => log.info(`db connecting to ${DB_URL}`))
        .on('connected', _ => {
          log.info(`db is ready ${DB_URL}`)
          db.emit('ready')
        })
        .on('error', err => log.error({err}, `db error ${DB_URL}`))
        .on('disconnected', err => {
          log.error({err}, `db disconnected ${DB_URL}`)
          db.emit('disconnected')
        })
        .on('close', err => log.fatal({err}, `db connection closed ${DB_URL}`))
        .on('reconnected', _ => log.warn(`db reconnected ${DB_URL}`))
        .on('reconnecting', _ => log.warn(`db reconnecting ${DB_URL}`))

      return db
    },

    disconnect () {
      connection.close()
      db.emit('disconnected')
      return db
    }
  })
}
