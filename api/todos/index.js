'use strict'

const { router } = require('express')

const {
  getAllTodos,
  getTodo,
  createTodo
} = require('../../services')

router
  .get('/todos', getAllTodos)
  .get('/todos/:id', getTodo)
  .post('/todos', createTodo)

function todosRouter () {
  return router
}

module.exports = todosRouter
