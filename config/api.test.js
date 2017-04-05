'use strict'

const expect = require('chai').expect
const decache = require('decache')

describe('Api Config Component', () => {
  const moduleName = './api'

  beforeEach(() => {
        // when running all tests we don't want env variables from other tests to contaminate our test data
    delete process.env.DB_URL
    delete process.env.LOG_LEVEL
    delete process.env.LOG_ENABLED
    delete process.env.PORT

        // Remove any cached instance of the module before each test
    decache('./mongodb')
    decache('./server')
    decache('./logger')
    decache(moduleName)
  })

  it('should return api config object', () => {
    const port = 2000
    process.env.PORT = port
    process.env.DB_URL = 'mongodb://localhost:12707/test'

    const config = require(moduleName)

    expect(config).to.deep.equal({
      mongodb: {
        DB_URL: process.env.DB_URL
      },
      server: {
        PORT: port
      },
      config: {
        logger: {
          level: 'info',
          enabled: true
        }
      }
    })
  })
})
