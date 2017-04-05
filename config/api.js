'use strict'

const components = require('./components')

/**
 * Module exports
 */
module.exports = Object.assign({}, components.mongodb, components.server, components.config.logger)
