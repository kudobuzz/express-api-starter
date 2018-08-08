const express = require('express')
const router = express.Router()

router.get('/todos', function (req, res) {
  res.sendStatus(200)
})

router.post('/create', function (req, res) {
  res.sendStatus(200)
})

router.put('/:todo_id', function (req, res) {
  res.sendStatus(200)
})

router.get('/:todo_id', function (req, res) {
  res.sendStatus(200)
})

module.exports = router
