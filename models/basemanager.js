module.exports = class BaseManager {
  constructor (model) {
    this.model = model
  }
  create (options) {
    return this.model.create(options.draft)
  }

  read (options) {
    return this.model.find(options.query)
  }

  update (options) {
    return this.model.findOneAndUpdate(options.query, options.update, {new: true})
  }
}
