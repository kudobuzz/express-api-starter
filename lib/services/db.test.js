const { expect } = require('chai')
const db = require('./db')

describe('Db Service ', () => {
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

    it('should connect to moongodb', done => {
      dbService.connect()
      dbService.on('connected', connection => {
        expect(connection.name).to.equal('mongodb')
        done()
      })
    })
  })

  describe('"disconnect"', () => {
    it('should return an EventEmitter')
    it('should disconnect from mongodb')
  })
})
