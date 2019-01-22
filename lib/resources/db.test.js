'use strict'

const db = require('./db')
const { expect } = require('chai')

describe('Db Service ', () => {
  let dbService

  before(() => {
    dbService = db()
  })

  it('should be an "EventEmitter"', () => {
    expect(dbService).to.respondTo('on')
  })

  describe('connect()', () => {
    it('should return function', () => {
      expect(dbService.connect).to.be.a('function')
    })

    it('should connect to mongodb', done => {
      dbService.connect()
      dbService.on('connected', connection => {
        expect(connection.name).to.equal('mongodb')
        done()
      })
    })
  })

  describe('disconnect()', () => {
    it('should disconnect from mongodb')
  })
})
