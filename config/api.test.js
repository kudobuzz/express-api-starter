'use strict'

const expect = require('chai').expect
const utils = require('../test/utils')

describe('Api Config process type', () => {
  const processTypePath = './api'

  beforeEach(() => {
    process.env = {} // Remove all enviroment variables

    process.env.PORT = 5000
    process.env.DB_URL = 'mongodb://localhost:12707/test'
    process.env.LOG_ENABLED = true
    process.env.LOG_LEVEL = 'debug'

    utils.deleteAllRequireCache()
  })

  it('should contain config from "mongodb", "logger" and "server" component ', () => {
    const config = require(processTypePath)

    expect(config).to.have.all.keys([
      'DB_URL',
      'PORT',
      'LOG_LEVEL',
      'LOG_ENABLED'
    ])
  })
})
