'use strict'

const todos = require('../../models/todos')()
const { required } = require('../../lib/utils')

const createNewTodo = ({
  title = required('title')
} = {}) => todos.create({
  title
})

module.exports = {
  createNewTodo
}
