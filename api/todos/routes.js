const express = require('express')
const router = express.Router()
const Manager = require('../../models/todos/manager.js')
const todoManager = new Manager()

router.get('/todos', function (req, res) {
  todoManager.read({query: {}})
      .then(function (todos) {
        res.status(200).json(todos)
      })
      .catch(function (err) {
        res.status(500).json({
          error: err
        })
      })
})

router.post('/create', function (req, res) {
  let title = req.body.title
  todoManager.create({draft: {title: title}})
           .then(function (todo) {
             res.status(200).json(todo)
           })
           .catch(function (err) {
             console.log(err)
             res.status(500).json({
               error: err
             })
           })
})

router.put('/:todo_id', function (req, res) {
  let options = {
    query: {_id: req.params.todo_id},
    update: {$set: req.body}
  }

  todoManager.update(options)
           .then(function (todo) {
             res.status(200).json(todo)
           })
           .catch(function (err) {
             res.status(500).json({
               error: err
             })
           })
})

router.get('/:todo_id', function (req, res) {
  let todoId = req.params.todo_id
  todoManager.read({query: {_id: todoId}})
           .then(function (todo) {
             res.status(200).json(todo)
           })
           .catch(function (err) {
             res.status(500).json({
               error: err
             })
           })
})

module.exports = router
