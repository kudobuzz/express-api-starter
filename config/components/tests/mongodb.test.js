'use strict'

const expect = require('chai').expect
const utils = require('../../../tests/utils')
const env = utils.copyEnvs()

describe('Mongodb Component config', function () {
  const module = '../mongodb.js'

  beforeEach(async () => {
    utils.deleteRequireCache(require.resolve(module))
    process.env = {
      MONGODB_URL: 'mongodb://localhost:2701'
    }
  })

  after(async () => {
    process.env = env
  })

  it('should throw an error if MONGODB_URL content is not allowed', async () => {
    delete process.env.MONGODB_URL

    const errMsg =
      'Mongodb validation error: child "MONGODB_URL" fails because ["MONGODB_URL" is required]'
    return expect(() => require(module).MONGODB_URL).to.throw(errMsg)
  })

  it('should contain  the right configs', async () => {
    const config = require(module)

    return expect(config).to.contain.all.keys(['MONGODB_URL'])
  })
})
