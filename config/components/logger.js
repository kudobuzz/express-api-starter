'use strict'

const joi = require('joi')

const envVarsSchema = joi.object({
  LOG_LEVEL: joi.string()
    .valid(['error', 'warn', 'info', 'verbose', 'debug'])
    .default('info'),
  LOG_ENABLED: joi.boolean()
    .truthy('TRUE')
    .truthy('true')
    .falsy('FALSE')
    .falsy('false')
    .default(true)
}).unknown()
  .required()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  LOG_LEVEL: envVars.LOG_LEVEL,
  LOG_ENABLED: envVars.LOG_ENABLED
}

module.exports = config
