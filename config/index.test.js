const utils = require('../test/utils')
const expect = require('chai').expect

describe('Config', () => {
  beforeEach(() => {
    process.env = {} // Remove all environment variables

    process.env.PORT = 5000
    process.env.DB_URL = 'mongodb://localhost:12707/test'
    process.env.LOG_ENABLED = true
    process.env.LOG_LEVEL = 'debug'
    process.env.PROCESS_TYPE = 'api'

    utils.deleteAllRequireCache() // Delete all cached modules
  })

  it('should return a function', () => {
    const config = require('./index')

    expect(config).to.be.a('function')
  })

  it('should default "NODE_ENV" to development if it is not set', () => {
    delete process.env.NODE_ENV

    require('./index')

    expect(process.env.NODE_ENV).to.be.equal('development')
  })

  it('should throw error if config does not exist', () => {
    expect(_ => require('./index')('doesnotexist')).to.throw('No config for env variable doesnotexist')
  })

  describe('Process Type', () => {
    it('should throw error if "PROCESS_TYPE" is not set', () => {
      delete process.env.PROCESS_TYPE

      expect(_ => require('./index')).to.throw('PROCESS_TYPE must be set')
    })

    it('should throw error if "PROCESS_TYPE" value does not exist', () => {
      process.env.PROCESS_TYPE = 'doesnotexist'

      expect(_ => require('./index')).to.throw('No config for process type doesnotexist')
    })
  })
})
