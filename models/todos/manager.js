const mongoose = require('mongoose')
const BaseManager = require('../basemanager.js')
const model = mongoose.model('Todo', require('./schema.js'))

class TodoManager extends BaseManager {
  constructor () {
    super(model)
  }
    }

module.exports = TodoManager
