(() => {
  'use strict'

  const expect = require('chai').expect
  const decache = require('decache')

  describe('Logger Component', () => {
    const module = './logger'

    beforeEach(() => {
      // Unset the env keys before each test
      delete process.env.LOG_LEVEL
      delete process.env.LOG_ENABLED

      // Remove any cached instance of the module before each test
      decache(module)
    })

    describe('LOG_LEVEL', () => {
      it('should return error if value is not allowed', (done) => {
        process.env.LOG_LEVEL = 'strict'

        try {
          require(module)
        } catch (e) {
          expect(e.message).to.equal('Config validation error: child "LOG_LEVEL" fails because ["LOG_LEVEL" must be one of [error, warn, info, verbose, debug, silly]]')
          done()
        }
      })

      it('should set to value if valid/allowed', () => {
        process.env.LOG_LEVEL = 'warn'

        expect(require(module)).to.deep.equal({
          logger: {
            level: 'warn',
            enabled: true
          }
        })
      })

      it('should default to info if not explicitly provided', () => {
        expect(require(module)).to.deep.equal({
          logger: {
            level: 'info',
            enabled: true
          }
        })
      })
    })

    describe('LOG_ENABLED', () => {
      it('should return error if value is not allowed', (done) => {
        process.env.LOG_ENABLED = 1

        try {
          require(module)
        } catch (e) {
          expect(e.message).to.equal('Config validation error: child "LOG_ENABLED" fails because ["LOG_ENABLED" must be a boolean]')
          done()
        }
      })

      it('should default to true if not explicitly provided', () => {
        expect(require(module)).to.deep.equal({
          logger: {
            level: 'info',
            enabled: true
          }
        })
      })

      it('should set to value if valid/allowed', () => {
        process.env.LOG_ENABLED = 'false'

        expect(require(module)).to.deep.equal({
          logger: {
            level: 'info',
            enabled: false
          }
        })
      })
    })
  })
})()
