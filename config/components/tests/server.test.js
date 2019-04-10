'use strict'

const expect = require('chai').expect
const utils = require('../../../tests/utils')
const env = utils.copyEnvs()

describe('Server Component config', function () {
  const module = '../server'

  beforeEach(async () => {
    utils.deleteRequireCache(require.resolve(module))
    process.env = {
      PORT: '9090'
    }
  })

  after(async () => {
    process.env = env
  })

  it('should throw an error when no PORT is provided', async () => {
    delete process.env.PORT

    const errorMessage =
      'Config validation error: child "PORT" fails because ["PORT" is required]'
    return expect(() => require(module)).to.throw(errorMessage)
  })
  it('should use the right log config when it is provided', () => {
    process.env.LOG_ENABLED = false

    return expect(require(module).LOG_ENABLED).to.be.false
  })
  it('should default  "true" when log is not provided in env', () => {
    return expect(require(module).LOG_ENABLED).to.be.true
  })
  it('should contain the right configs', () => {
    const config = require(module)

    return expect(config).to.contain.all.keys(['PORT', 'LOG_ENABLED'])
  })
})