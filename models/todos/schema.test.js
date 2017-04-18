const mongoose = require('mongoose')
const assert = require('assert')
const todoSchema = require('./schema.js')

describe('Todo Schema', function () {
  it('Title is required string field', function () {
    const stringField = todoSchema.path('title')
    assert.ok(stringField instanceof mongoose.Schema.Types.String)
    assert.ok(stringField.isRequired)
  })

  it('Completed is a boolean field default to false', function () {
    const stringField = todoSchema.path('completed')
    assert.ok(stringField instanceof mongoose.Schema.Types.Boolean)
    assert.equal(stringField.defaultValue, false, 'completed should default to false')
  })
})
