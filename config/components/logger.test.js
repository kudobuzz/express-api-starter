'use strict'

const expect = require('chai').expect
const utils = require('../../test/utils')

describe('Logger config component', () => {
  const componentPath = './logger'

  beforeEach(() => {
    process.env = {} // Unset the env keys before each test
    utils.deleteAllRequireCache() // Delete all modules in cache
  })

  describe('LOG_LEVEL', () => {
    it('should throw an error if "LOG_LEVEL" is not allowed', () => {
      process.env.LOG_LEVEL = 'strict'
      const errorMsg = 'Config validation error: child "LOG_LEVEL" fails because ["LOG_LEVEL" must be one of [error, warn, info, verbose, debug]]'

      expect(() => require(componentPath)).to.throw(errorMsg)
    })

    it('should set log leval if value is allowed', () => {
      process.env.LOG_LEVEL = 'warn'

      expect(require(componentPath).LOG_LEVEL).to.equal('warn')
    })

    it('should default to "info" if not explicitly provided', () => {
      expect(require(componentPath).LOG_LEVEL).to.equal('info')
    })
  })

  describe('LOG_ENABLED', () => {
    it('should return error if value is not allowed', () => {
      process.env.LOG_ENABLED = 1
      const errorMsg = 'Config validation error: child "LOG_ENABLED" fails because ["LOG_ENABLED" must be a boolean]'

      expect(() => require(componentPath)).to.throw(errorMsg)
    })

    it('should default to true if not explicitly provided', () => {
      expect(require(componentPath).LOG_ENABLED).to.equal(true)
    })

    it('should enable/disable log if value is allowed', () => {
      process.env.LOG_ENABLED = 'false'

      expect(require(componentPath).LOG_ENABLED).to.equal(false)
    })
  })
})
