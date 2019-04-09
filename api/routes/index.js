'use strict'

const { Router } = require('express')
const router = Router()

router
  .use('/api')
  .get('/todos')
  .get('/todos/:id')
  .post('/todos')

module.exports = router
