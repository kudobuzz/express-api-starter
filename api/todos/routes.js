const express = require('express')
const router = express.Router()

router.get('/todos', function (req, res) {
  res.status(200).json([{
    title: 'remove task on github',
    completed: false,
    id: 'dfggdfgkdg'
  }])
})

router.post('/create', function (req, res) {
  res.status(200).json({
    title: req.body.title,
    completed: false,
    id: 'rr8r88r8'
  })
})

router.put('/:todo_id', function (req, res) {
  res.status(200).json({
    title: 'some title',
    completed: req.body.completed,
    id: req.params.todo_id
  })
})

router.get('/:todo_id', function (req, res) {
  res.status(200).json({
    title: 'some title',
    completed: false,
    id: req.params.todo_id
  })
})

module.exports = router
