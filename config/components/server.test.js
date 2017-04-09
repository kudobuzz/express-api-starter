'use strict'

const expect = require('chai').expect
const decache = require('decache')

describe('Server Component', () => {
  const moduleName = './server'

  beforeEach(() => {
    delete process.env.PORT

    // Delete any cached instance of the module - we want a fresh copy for each test
    decache(moduleName)
  })

  it('should throw error if PORT is undefined', () => {
    expect(() => require(moduleName)).to.throw('Config validation error: child "PORT" fails because ["PORT" is required]')
  })

  describe('port must be an integer', () => {
    it('should throw error if PORT is not a number', () => {
      process.env.PORT = 'the-port'

      expect(() => require(moduleName)).to.throw('Config validation error: child "PORT" fails because ["PORT" must be a number]')
    })

    it('should throw error if PORT is not a positive number (integer)', () => {
      process.env.PORT = -2000

      expect(() => require(moduleName)).to
        .throw('Config validation error: child "PORT" fails because ["PORT" must be larger than or equal to 1]')
    })
  })

  it('should return port number if validation is successful', () => {
    process.env.PORT = 2000

    expect(require(moduleName).PORT).to.equal(2000)
  })
})
