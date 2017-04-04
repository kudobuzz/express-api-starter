(() => {
  'use strict'

  const chai = require('chai')
  const expect = chai.expect

  describe('MongoDB Component', () => {
    it('should throw error if DB_URL is undefined', (done) => {
      try {
        require('./mongodb')
      } catch (e) {
        expect(e.message).to.equal('Config validation error: child "DB_URL" fails because ["DB_URL" is required]')
        done()
      }
    })

    it('should throw error if DB_URL scheme is not mongodb', (done) => {
      process.env.DB_URL = 'mysql://localhost:3000/test'

      try {
        require('./mongodb')
      } catch (e) {
        expect(e.message).to.equal('Config validation error: child "DB_URL" fails because ["DB_URL" must be a valid uri with a scheme matching the mongodb pattern]')
        done()
      }
    })

    it('should return mongodb if validation is successful', () => {
      process.env.DB_URL = 'mongodb://localhost:3000/test'

      const mongodb = require('./mongodb')

      expect(mongodb.DB_URL).to.equal(process.env.DB_URL)
    })
  })
})()
