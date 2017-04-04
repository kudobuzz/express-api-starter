(() => {
  'use strict'

  const expect = require('chai').expect

  describe('Api Config Component', () => {
    it('should return api config object', () => {
      const port = 2000
      process.env.PORT = port
      process.env.DB_URL = 'mongodb://localhost:12707/test'

      const config = require('./api')

      expect(config).to.deep.equal({
        DB_URL: process.env.DB_URL,
        PORT: port
      })
    })
  })
})()
