'use strict'

const { Router } = require('express')
const health = require('./actions').checkHealth
const router = Router()

router.get('/', health)

function healthRouter () {
  return router
}

module.exports = healthRouter