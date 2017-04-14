const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
// add all the complexity later, get this working with the tests.

app.get('/api/todos', function (req, res) {
  res.status(200).json([{
    title: 'remove task on github',
    completed: false,
    id: 'dfggdfgkdg'
  }])
})

app.post('/api/todo/create', function (req, res) {
  res.status(200).json({
    title: req.body.title,
    completed: false,
    id: 'rr8r88r8'
  })
})

app.put('/api/todo/:todo_id', function (req, res) {
  res.status(200).json({
    title: 'some title',
    completed: req.body.completed,
    id: req.params.todo_id
  })
})

app.get('/api/todo/:todo_id', function (req, res) {
  res.status(200).json({
    title: 'some title',
    completed: false,
    id: req.params.todo_id
  })
})

module.exports = app
