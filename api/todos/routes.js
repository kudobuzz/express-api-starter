'use strict'

const express = require('express')
const router = express.Router()
const todoManager = require('../../models/todos')()

router.get('/todos', async (req, res) => {
  try {
    const todos = await todoManager.read({ query: {} })
    res.status(200).json(todos)
  } catch (err) {
    res.status(500).json({ error: err })
  }
})

router.post('/create', async (req, res) => {
  const title = req.body.title
  try {
    const todo = await todoManager.create({ title: title })
    res.status(200).json(todo)
  } catch (err) {
    res.status(500).json({ error: err })
  }
})

router.put('/:todo_id', async (req, res) => {
  const options = {
    query: { _id: req.params.todo_id },
    update: { $set: req.body }
  }

  try {
    const updatedTodo = await todoManager.update(options)
    res.status(200).json(updatedTodo)
  } catch (err) {
    res.status(500).json({ error: err })
  }
})

router.get('/:todo_id', async (req, res) => {
  let todoId = req.params.todo_id

  try {
    const todo = await todoManager.read({ query: { _id: todoId } })

    res.status(200).json(todo)
  } catch (err) {
    res.status(500).json({ error: err })
  }
})

module.exports = router
