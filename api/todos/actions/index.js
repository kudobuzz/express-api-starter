'use strict'

const { updateTodo, createNewTodo } = require('../../../services/todos')()

const TodoActions = {
  async create (req, res, next) {
    try {
      const todo = await createNewTodo(req.body)
      res.status(201).json({ todo })
    } catch (error) {
      next(error)
    }
  },

  async update (req, res, next) {
    try {
      const todoId = req.params.id
      const todo = await updateTodo({
        todoId,
        ...req.body
      })

      res.status(200).json({ todo })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = _ => Object.create(TodoActions)
