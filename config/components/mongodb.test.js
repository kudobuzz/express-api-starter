'use strict'

const expect = require('chai').expect
const decache = require('decache')

describe('MongoDB Component', () => {
  const moduleName = './mongodb'

  beforeEach(() => {
    // Unset the env keys before each test
    delete process.env.DB_URL

    // Remove any cached instance of the module before each test
    decache(moduleName)
  })

  it('should throw error if DB_URL is undefined', () => {
    expect(() => require(moduleName)).to.throw('Config validation error: child "DB_URL" fails because ["DB_URL" is required]')
  })

  it('should throw error if DB_URL scheme is not mongodb', () => {
    process.env.DB_URL = 'mysql://localhost:3000/test'

    expect(() => require(moduleName)).to
      .throw('Config validation error: child "DB_URL" fails because ["DB_URL" must be a valid uri with a scheme matching the mongodb pattern]')
  })

  it('should return mongodb if validation is successful', () => {
    process.env.DB_URL = 'mongodb://localhost:3000/test'

    expect(require(moduleName).DB_URL).to.equal(process.env.DB_URL)
  })
})
