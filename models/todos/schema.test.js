'use strict'

const { expect } = require('chai')
const mongoose = require('mongoose')
const { schema: todoSchema } = require('./schema')

describe('Todo Schema', () => {
  it('Title is required string field', () => {
    const titleField = todoSchema.path('title')
    expect(titleField.isRequired).to.equal(true)
    expect(titleField).to.be.instanceof(mongoose.Schema.Types.String)
  })

  it('Completed is a boolean field default to false', () => {
    const completedField = todoSchema.path('completed')
    expect(completedField).to.be.instanceof(mongoose.Schema.Types.Boolean)
    expect(completedField.default()).to.equal(false)
  })

  it('model is created with correct defaults', () => {
    let TestModel = mongoose.model('Test', todoSchema)
    let options = {
      title: 'testing'
    }
    let todo = new TestModel(options)
    expect(todo.title).to.equal(options.title)
    expect(todo.completed).to.equal(false)
  })
})
