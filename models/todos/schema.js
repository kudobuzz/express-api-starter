'use strict'

module.exports = new require('mongoose').Schema({
  title: {
    type: String, required: true
  },
  completed: {
    type: Boolean, default: false
  }
})
