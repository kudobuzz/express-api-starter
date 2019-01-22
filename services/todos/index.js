'use strict'

const todos = require('../../models/todos')()
const { required } = require('../../lib/utils')

const createNewTodo = ({
  title = required('title')
} = {}) => todos.create({
  title
})

const updateTodo = ({
  completed,
  title = required('title'),
  todoId = required('todoId')
}) => todos.update({
  query: {
    _id: todoId
  },
  update: {
    title,
    completed
  }
})

const todoService = _ =>
  Object.create({
    updateTodo,
    createNewTodo
  })

module.exports = todoService
