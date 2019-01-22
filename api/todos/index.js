'use strict'

const { Router } = require('express')
const TodoActions = require('./actions')()
const { attachLogToReq } = require('@kudobuzz/express-bunyan-logger')()
const { validateUpdateRequest, validateCreateRequest } = require('./validate-requests')

const router = Router()
router.use(attachLogToReq({ routeName: 'todos' }))

router.post('/', validateCreateRequest(), TodoActions.create)
router.put('/:id', validateUpdateRequest(), TodoActions.update)

module.exports = router
