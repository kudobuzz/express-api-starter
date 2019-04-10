'use strict'

const expect = require('chai').expect
const utils = require('../../../tests/utils')
const env = utils.copyEnvs()

describe('Common Component config', function () {
  const module = '../common.js'

  beforeEach(async () => {
    utils.deleteRequireCache(require.resolve(module))
    process.env = {
      SERVICE_NAME: 'todos',
      NODE_ENV: 'development'
    }
  })

  after(async () => {
    process.env = env
  })

  it('should throw an error if NODE_ENV content is not allowed', async () => {
    process.env.NODE_ENV = '123'

    const errMsg = '"NODE_ENV" must be one of [production, development, test]'
    expect(() => require(module)).to.throw(errMsg)
  })

  it('should throw an error if "NODE_ENV" is not provided', async () => {
    delete process.env.NODE_ENV
    const errMsg =
      'Config validation error: child "NODE_ENV" fails because ["NODE_ENV" is required]'
    expect(_ => require(module).NODE_ENV).to.throw(errMsg)
  })

  it('should throw an error if "SERVICE_NAME" is not "todos"', async () => {
    process.env.SERVICE_NAME = 'todos'
    const errMsg =
      'Config validation error: child "SERVICE_NAME" fails because ["SERVICE_NAME" must be one of [todos]]'
    expect(_ => require(module).SERVICE_NAME).to.throw(errMsg)
  })

  it('should populate config from process.env.NODE_ENV', async () => {
    process.env.NODE_ENV = 'development'

    expect(require(module).NODE_ENV).to.equal(process.env.NODE_ENV)
  })

})