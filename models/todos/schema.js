'use strict'

const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const TodoModel = mongoose.model('Todo', TodoSchema)

module.exports = {
  model: TodoModel,
  schema: TodoSchema
}
