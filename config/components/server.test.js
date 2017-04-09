'use strict'

const expect = require('chai').expect
const utils = require('../../test/utils')

describe('Server Config Component', () => {
  const component = './server'

  beforeEach(() => {
    process.env = {} // Unset the env keys before each test
    utils.deleteAllRequireCache() // Delete all modules in cache
  })

  it('should throw error if PORT is undefined', () => {
    const errorMsg = 'Config validation error: child "PORT" fails because ["PORT" is required]'

    expect(() => require(component)).to.throw(errorMsg)
  })

  describe('port must be an integer', () => {
    it('should throw error if PORT is not a number', () => {
      const errorMsg = 'Config validation error: child "PORT" fails because ["PORT" must be a number]'

      process.env.PORT = 'the-port'

      expect(() => require(component)).to.throw(errorMsg)
    })

    it('should throw error if PORT is not a positive number (integer)', () => {
      const errorMsg = 'Config validation error: child "PORT" fails because ["PORT" must be larger than or equal to 1]'

      process.env.PORT = -2000

      expect(() => require(component)).to.throw(errorMsg)
    })
  })

  it('should return port number if validation is successful', () => {
    process.env.PORT = 2000

    expect(require(component).PORT).to.equal(2000)
  })
})
