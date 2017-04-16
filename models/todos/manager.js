const mongoose = require('mongoose')
const model = mongoose.model('Todo', require('./schema.js'))

class TodoManager {
  create (options) {
    return model.create(options.draft)
  }

  read (options) {
    return model.find(options.query)
  }

  update (options) {
    return model.findOneAndUpdate(options.query, options.update, {new: true})
  }
}

module.exports = TodoManager
