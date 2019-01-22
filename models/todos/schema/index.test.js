'use strict'

const mongoose = require('@kudobuzz/mongodb-utils').getMongoose()
const { expect } = require('chai')
const { schema } = require('./index')

describe('Todo Schema', () => {
  it('Title is required string field', () => {
    const titleField = schema.path('title')
    expect(titleField).to.be.instanceof(mongoose.Schema.Types.String)
    expect(titleField.isRequired).to.equal(true)
  })

  it('Completed is a boolean field default to false', () => {
    const completedField = schema.path('completed')
    expect(completedField).to.be.instanceof(mongoose.Schema.Types.Boolean)
    expect(completedField.default()).to.equal(false)
  })

  it('model is created with correct defaults', async () => {
    let TestModel = mongoose.model('Test', schema)
    let options = {
      title: 'testing'
    }
    let todo = new TestModel(options)
    expect(todo.title).to.equal(options.title)
    expect(todo.completed).to.equal(false)
  })
})
