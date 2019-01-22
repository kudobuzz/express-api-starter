'use strict'

const mongoose = require('@kudobuzz/mongodb-utils').getMongoose()

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },

  completed: {
    type: Boolean,
    default: false
  }
})

const model = mongoose.model('todos', schema)

module.exports = {
  schema,
  model
}
