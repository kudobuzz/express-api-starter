const mongoose = require('mongoose')
const BaseManager = require('./basemanager.js')
const sinon = require('sinon')
const testSchema = mongoose.Schema({
  title: String
})
const testModel = mongoose.model('TestModel', testSchema)

let baseManager = null
describe('BaseManager', function () {
  beforeEach(function () {
    baseManager = new BaseManager(testModel)
  })

  afterEach(function () {
    baseManager = null
  })

  it('BaseManager.read calls model.find with correct options', function () {
    let spy = sinon.spy(testModel, 'find')
    let options = {
      query: {}
    }
    baseManager.read(options)
    sinon.assert.calledOnce(spy)
    sinon.assert.calledWith(spy, options.query)
    spy.restore()
  })

  it('BaseManager.create calls model.create', function () {
    let options = {
      draft: {
        'title': 'test title'
      }
    }

    let spy = sinon.spy(testModel, 'create')
    baseManager.create(options)
    sinon.assert.calledOnce(spy)
    sinon.assert.calledWith(spy, options.draft)
    spy.restore()
  })

  it('Basemanager.update called model.findOneAndUpdate', function () {
    let spy = sinon.spy(testModel, 'findOneAndUpdate')
    let options = {
      query: {id: 123},
      update: {title: 'new title'}
    }
    baseManager.update(options)
    sinon.assert.calledOnce(spy)
    sinon.assert.calledWith(spy, options.query, options.update, {new: true})
    spy.restore()
  })
})
