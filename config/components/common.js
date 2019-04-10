'use strict'

const joi = require('joi')

const envVarSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .valid(['production', 'development', 'test'])
      .required(),
    SERVICE_NAME: joi.string().valid(['todos'])
  })
  .unknown()

const { error, value: envVars } = joi.validate(process.env, envVarSchema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  NODE_ENV: envVars.NODE_ENV,
  SERVICE_NAME: envVars.SERVICE_NAME
}

module.exports = config
