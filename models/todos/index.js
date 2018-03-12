'use strict'

const { createBaseModel } = require('@kudobuzz/mongodb-utils')
const { model } = require('./schema')
const baseModel = createBaseModel()

const TodoManager = {
  create (todo) {
    const options = {
      model,
      document: todo
    }

    return baseModel.create(options)
  },

  get (query = {}) {
    const options = {
      model,
      query
    }

    return baseModel.get(options)
  },

  update ({ query, update }) {
    const options = {
      model,
      query,
      update
    }

    return baseModel.update(options)
  }
}

module.exports = () => Object.create(TodoManager)
