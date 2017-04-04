'use strict'

const joi = require('joi')

const envVarsSchema = joi.object({
  DB_URL: joi.string().uri({scheme: 'mongodb'}).required()
}).unknown()

const { error, value: env } = joi.validate(process.env, envVarsSchema)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

module.exports = {
  DB_URL: error ? null : env.DB_URL
}
