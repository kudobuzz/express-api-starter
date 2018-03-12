'use strict'

const sinon = require('sinon')
const chai = require('chai')
const sinonChai = require('sinon-chai')
const chaiAsPromised = require('chai-as-promised')
const { dbSetup, tearDown } = require('./utils')

before(async () => {
  await dbSetup()
  await tearDown()
  chai.use(sinonChai)
  chai.use(chaiAsPromised)
})

beforeEach(function beforeEach () {
  this.sandbox = sinon.sandbox.create()
})

afterEach(function afterEach () {
  this.sandbox.restore()
})
