'use strict'

const expect = require('chai').expect
const decache = require('decache')

describe('Logger Component', () => {
  const moduleName = './logger'

  beforeEach(() => {
    // Unset the env keys before each test
    delete process.env.LOG_LEVEL
    delete process.env.LOG_ENABLED

    // Remove any cached instance of the module before each test
    decache(moduleName)
  })

  describe('LOG_LEVEL', () => {
    it('should return error if value is not allowed', () => {
      process.env.LOG_LEVEL = 'strict'

      expect(() => require(moduleName)).to
        .throw('Config validation error: child "LOG_LEVEL" fails because ["LOG_LEVEL" must be one of [error, warn, info, verbose, debug, silly]]')
    })

    it('should set to value if valid/allowed', () => {
      process.env.LOG_LEVEL = 'warn'

      expect(require(moduleName)).to.deep.equal({
        logger: {
          level: 'warn',
          enabled: true
        }
      })
    })

    it('should default to info if not explicitly provided', () => {
      expect(require(moduleName)).to.deep.equal({
        logger: {
          level: 'info',
          enabled: true
        }
      })
    })
  })

  describe('LOG_ENABLED', () => {
    it('should return error if value is not allowed', () => {
      process.env.LOG_ENABLED = 1

      expect(() => require(moduleName)).to.throw('Config validation error: child "LOG_ENABLED" fails because ["LOG_ENABLED" must be a boolean]')
    })

    it('should default to true if not explicitly provided', () => {
      expect(require(moduleName)).to.deep.equal({
        logger: {
          level: 'info',
          enabled: true
        }
      })
    })

    it('should set to value if valid/allowed', () => {
      process.env.LOG_ENABLED = 'false'

      expect(require(moduleName)).to.deep.equal({
        logger: {
          level: 'info',
          enabled: false
        }
      })
    })
  })
})
