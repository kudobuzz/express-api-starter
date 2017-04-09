'use strict'

const expect = require('chai').expect
const utils = require('../../test/utils')

describe('MongoDB Config Component', () => {
  const componentPath = './mongodb'

  beforeEach(() => {
    process.env = {} // Unset the env keys before each test
    utils.deleteAllRequireCache() // Delete all modules in cache
  })

  it('should throw error if DB_URL is undefined', () => {
    const errorMsg = 'Config validation error: child "DB_URL" fails because ["DB_URL" is required]'

    expect(() => require(componentPath)).to.throw(errorMsg)
  })

  it('should throw error if DB_URL scheme is not mongodb', () => {
    process.env.DB_URL = 'mysql://localhost:3000/test'
    const errorMsg = 'Config validation error: child "DB_URL" fails because ["DB_URL" must be a valid uri with a scheme matching the mongodb pattern]'

    expect(() => require(componentPath)).to.throw(errorMsg)
  })

  it('should return mongodb if validation is successful', () => {
    process.env.DB_URL = 'mongodb://localhost:3000/test'

    expect(require(componentPath).DB_URL).to.equal(process.env.DB_URL)
  })
})
