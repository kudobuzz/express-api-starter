const expect = require('chai').expect
const mongoose = require('mongoose')
const sinon = require('sinon')

const config = require('../../config')

const db = require('./db')

describe('Db Service ',  => {
  let dbService
  before(() => {
    dbService = db()
  })

  it('should be an "EventEmitter"', () => {
    expect(dbService).to.respondTo('on')
  })

  describe('"connect"', () => {
    it('should return "function"', () => {
      expect(dbService.connect).to.be.a('function')
    })

    it('should return an "EventEmitter"', () => {
      const connectResult = dbService.connect()
      expect(connectResult).to.respondTo('on')
      expect(connectResult).to.respondTo('emit')
    })

    it('should connect to moongodb', () => {
      sinon.stub(mongoose, 'connect')

      dbService.connect()

      expect(mongoose.connect.calledOnce).to.equal(true)
      expect(mongoose.connect.calledWith(config('DB_URL'), { server: { reconnectTries: Number.MAX_VALUE } })).to.equal(true)

      mongoose.connect.restore()
    })
  })

  describe('"disconnect"', () => {
    it('should return an EventEmitter')
    it('should disconnect from mongodb')
  })
})
