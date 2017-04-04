(function () {
  'use strict'

  const chai = require('chai')
  const expect = chai.expect

  describe('Server Component', () => {
    it('should throw error if PORT is undefined', (done) => {
      try {
        require('./server')
      } catch (e) {
        expect(e.message).to.equal('Config validation error: child "PORT" fails because ["PORT" is required]')
        done()
      }
    })

    it('should throw error if PORT is not a number', (done) => {
      process.env.PORT = 'the-port'

      try {
        require('./server')
      } catch (e) {
        expect(e.message).to.equal('Config validation error: child "PORT" fails because ["PORT" must be a number]')
        done()
      }
    })

    it('should return port number if validation is successful', () => {
      process.env.PORT = 2000

      const server = require('./server')

      expect(server.PORT).to.equal(2000)
    })
  })
})()
