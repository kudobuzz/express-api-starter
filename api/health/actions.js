'use strict'

const isConnected = require('../../lib/resources/mongodb').isConnected

const isDbAvailable = () => {
  if (!isConnected()) throw Error('db is not connected')
}
const checkHealth = (req, res) => {
  if (!isDbAvailable) return res.status(500).send('db is unavailable')
  res.sendStatus(200)
}

module.exports.checkHealth = checkHealth
