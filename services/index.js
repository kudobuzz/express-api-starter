'use strict'

const Todo = require('../models')

const todos = _ => {
  async function getAllTodos (req, res) {
    const todos = await Todo.find({})
    return res.status(200).send({ todos })
  }

  async function getTodo (req, res, next) {
    Todo.findById(req.param.id, (err, todo) => {
      if (err) throw err
      if (!todo) return res.status(404).send('Todo not found')
      return res.status(200).send(todo)
    })
  }
  async function createTodo (req, res, next) {
    Todo.create(req.body, (err, todo) => {
      if (err) throw err
      return res.status(200).send(todo)
    })
  }
  return Object.create({ getAllTodos,
    getTodo,
    createTodo
  })
}

module.exports = todos