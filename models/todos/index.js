'use strict'


const { model } = require('./schema')
const { createBaseModel } = require('@kudobuzz/mongodb-utils')

const persistable = createBaseModel()

const TodoManager = {
  get ({ query }) {
    return persistable.get({ model, query })
  },

  create (todo) {
    return persistable.create({ model, document: todo })
  },

  update ({ query, update }) {
    return persistable.update({ model, query, update })
  }
}

module.exports = _ => Object.create(TodoManager)
