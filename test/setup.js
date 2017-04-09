'use strict'

const sinon = require('sinon')
const chai = require('chai')
const sinonChai = require('sinon-chai')

process.env.DB_URL = 'mongodb://localhost/testdb'
process.env.LOG_ENABLED = false
process.env.PORT = 4000

before(() => {
  chai.use(sinonChai)
})

beforeEach(function beforeEach () {
  this.sandbox = sinon.sandbox.create()
})

afterEach(function afterEach () {
  this.sandbox.restore()
})
