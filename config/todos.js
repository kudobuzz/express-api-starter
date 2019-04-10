'use strict'

const mongodb = require('./components/mongodb')
const common = require('./components/common')
const server = require('./components/server')

module.exports = Object.assign(
  {},
  {
    ...common,
    ...mongodb,
    ...server
  }
)
