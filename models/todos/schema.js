const Schema = require('mongoose').Schema
module.exports = new Schema({

  title: {
    type: String, required: true
  },
  completed: {
    type: Boolean, default: false
  }
})
