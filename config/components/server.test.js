(() => {
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

    it('should throw error if PORT is undefined', (done) => {
      try {
        require(moduleName)
      } catch (e) {
        expect(e.message).to.equal('Config validation error: child "PORT" fails because ["PORT" is required]')
        done()
      }
    })

    describe('port must be an integer', () => {
      it('should throw error if PORT is not a number', (done) => {
        process.env.PORT = 'the-port'

        try {
          require(moduleName)
        } catch (e) {
          expect(e.message).to.equal('Config validation error: child "PORT" fails because ["PORT" must be a number]')
          done()
        }
      })

      it('should throw error if PORT is not a positive number (integer)', (done) => {
        process.env.PORT = -2000

        try {
          require(moduleName)
        } catch (e) {
          expect(e.message).to.equal('Config validation error: child "PORT" fails because ["PORT" must be larger than or equal to 1]')
          done()
        }
      })
    })

    it('should return port number if validation is successful', () => {
      process.env.PORT = 2000

      const server = require(moduleName)

      expect(server.PORT).to.equal(2000)
    })
  })
})()
