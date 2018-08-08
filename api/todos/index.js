'use strict'

const { Router } = require('express')
const TodoActions = require('./actions')()
const { attachLogToReq } = require('@kudobuzz/express-bunyan-logger')()
const { validateUpdateRequest, validateCreateRequest } = require('./validate-requests')

const router = Router()
router.use(attachLogToReq({ routeName: 'todos' }))

router.put('/:id', validateUpdateRequest(), TodoActions.update)
router.post('/create', validateCreateRequest(), TodoActions.create)

module.exports = router
