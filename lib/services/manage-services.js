
const EventEmitter = require('events').EventEmitter
const log = require('../logger')().child({type: 'serviceManager'})

module.exports = (...services) => {
  if (services.length === 0) {
    throw new Error('Services are required')
  }
  const connections = Object.create(EventEmitter.prototype)
  EventEmitter.call(connections)

  let numOfConnectedServices = 0

  const ready = _ => {
    numOfConnectedServices++
    if (numOfConnectedServices === services.length) {
      connections.emit('services:ready')
    }
  }

  const disconnected = _ => {
    numOfConnectedServices--
    console.log(numOfConnectedServices)
    if (numOfConnectedServices === 0) {
      connections.emit('services:disconneted')
    }
  }

  return Object.assign(connections, {
    connect () {
      log.info('Connect Services')
      numOfConnectedServices = 0

      services
        .forEach(service => {
          service.on('ready', ready)
          service.connect()
        })
      return connections
    },
    disconnect () {
      log.info('Disconnect services')
      if (numOfConnectedServices === 0) {
        throw new Error('No Services connected yet')
      }

      services
        .forEach(service => {
          service.on('disconnected', disconnected)
          service.disconnect()
        })
      return connections
    }
  })
}
