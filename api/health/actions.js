'use strict'

const isDbAvailable = () => {
    if (!isConnected()) throw Error('db is not connected')
  }
const checkHealth = () => {
    isDbAvailable,
    res.sendStatus(httpStatus.OK)
}

module.exports.checkHealth = checkHealth