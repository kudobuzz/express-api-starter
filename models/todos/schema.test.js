const mongoose = require('mongoose')
const expect = require('chai').expect
const todoSchema = require('./schema.js')

describe('Todo Schema', function () {
  it('Title is required string field', function () {
    const titleField = todoSchema.path('title')
    expect(titleField).to.be.instanceof(mongoose.Schema.Types.String)
    expect(titleField.isRequired).to.equal(true)
  })

  it('Completed is a boolean field default to false', function () {
    const completedField = todoSchema.path('completed')
    expect(completedField).to.be.instanceof(mongoose.Schema.Types.Boolean)
    expect(completedField.default()).to.equal(false)
  })

  it('model is created with correct defaults', function () {
    let TestModel = mongoose.model('Test', todoSchema)
    let options = {
      title: 'testing'
    }
    let todo = new TestModel(options)
    expect(todo.title).to.equal(options.title)
    expect(todo.completed).to.equal(false)
  })
})
