'use strict'

const { Router } = require('express')
const router = new Router()
const {
  getAllTodos,
  getTodo,
  createTodo
} = require('../../services')()

router
  .get('/', getAllTodos)
  .get('/:id', getTodo)
  .post('/', createTodo)

function todosRouter () {
  return router
}

module.exports = todosRouter
