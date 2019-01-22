'use strict'

const joi = require('joi')
const validate = require('@kudobuzz/express-joi-validator')

const validateCreateRequest = _ => validate({
  schema: {
    body: {
      title: joi.string().required()
    }
  }
})

const validateUpdateRequest = _ => validate({
  schema: {
    params: {
      id: joi.string().required()
    },
    body: {
      completed: joi.boolean(),
      title: joi.string().required()
    }
  }
})

module.exports = {
  validateCreateRequest,
  validateUpdateRequest
}
