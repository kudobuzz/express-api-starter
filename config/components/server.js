'use strict'

const joi = require('joi')

const envVarsSchema = joi
  .object({
    PORT: joi.number().required(),
    LOG_ENABLED: joi.boolean().default(true)
  })
  .unknown()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  PORT: envVars.PORT,
  LOG_ENABLED: envVars.LOG_ENABLED
}

module.exports = config
