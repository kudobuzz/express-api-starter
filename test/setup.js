'use strict'

const chai = require('chai')
const nock = require('nock')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { dbSetup, tearDown } = require('./utils')
const chaiAsPromised = require('chai-as-promised')

before(() => {
  dbSetup()
  tearDown()
  chai.use(sinonChai)
  chai.use(chaiAsPromised)
})

beforeEach(function beforeEach () {
  this.sandbox = sinon.sandbox.create()
})

afterEach(function afterEach () {
  this.sandbox.restore()
})
