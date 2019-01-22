'use strict'

const required = str => {
  throw new Error(`${str} is required`)
}

const sendError = (error, req, res, next) => {
  if (!res) next()

  const { name, code = error.status || 400, message } = error
  return res.status(code).json({
    error: {
      name,
      code,
      message
    }
  })
}

module.exports = {
  required,
  sendError
}
