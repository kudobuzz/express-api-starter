'use strict'

describe('Logger Helper', () => {
  const moduleName = './logger'
  const decache = require('decache')
  const expect = require('chai').expect
  const assert = require('chai').assert
  const httpMock = require('node-mocks-http')
  const hookStd = require('hook-std')
  const os = require('os')
  const EventEmitter = require('events').EventEmitter
  const onFinished = require('on-finished')

  beforeEach(() => {
    const port = 2000
    process.env.PORT = port
    process.env.DB_URL = 'mongodb://localhost:12707/test'

    // when running all tests we don't want env variables from other tests to contaminate our test data
    delete process.env.DB_URL
    delete process.env.LOG_LEVEL
    delete process.env.LOG_ENABLED
    delete process.env.PORT

    // Remove any cached instance of the module before each test
    decache('./mongodb')
    decache('./server')
    decache('./logger')
    decache('./api')
    decache('../config')
    decache('bunyan')
    decache('morgan')
    decache(moduleName)
  })

  it('should return logger, attachLogToRequest and resResLogger components', () => {
    const obj = require(moduleName)

    expect(obj).to.have.property('logger')
    assert.isObject(obj.logger)
    expect(obj).to.have.property('attachLogToReq')
    assert.isFunction(obj.attachLogToReq)
    expect(obj).to.have.property('reqResLogger')
    assert.isFunction(obj.reqResLogger)
  })

  it('should log http requests and response using reqResLogger', (done) => {
    const obj = require(moduleName)
    let req = httpMock.createRequest({
      method: 'GET',
      url: '/users/1'
    })
    let res = httpMock.createResponse({
      eventEmitter: EventEmitter
    })

    // Send dummy response
    res.end('Response sent')
    // Set request id
    req.id = 'REQ-1'

    // capture the reqest response log
    onFinished(res, () => {
      const unhook = hookStd.stdout(log => {
        unhook()
        log = JSON.parse(log)

        assert.isObject(log)
        expect(log).to.have.property('name', 'serviceName')
        expect(log).to.have.property('hostname', os.hostname())
        expect(log).to.have.property('pid')
        expect(log).to.have.property('type', 'requestLogger')
        expect(log).to.have.property('msg')
        expect(log.msg).to.have.contain(`type/reqResLogger requestId/${req.id}`)
        expect(log).to.have.property('time')
        expect(log).to.have.property('v', 0)
      })
    })

    obj.reqResLogger(req, res, done)
  })

  it('should attach logger to request using attachLogToReq', (done) => {
    const obj = require(moduleName)
    const routeName = '/user/1'

    let req = httpMock.createRequest()
    let res = httpMock.createResponse()

    assert.isFunction(obj.attachLogToReq)

    const middleware = obj.attachLogToReq(routeName)
    assert.isFunction(middleware)

    // capture the reqest response log
    const unhook = hookStd.stdout(log => {
      unhook()
      log = JSON.parse(log)

      assert.isObject(log)
      expect(log).to.have.property('name', 'serviceName')
      expect(log).to.have.property('hostname', os.hostname())
      expect(log).to.have.property('type', routeName)
      expect(log).to.have.property('msg', `inside route ${routeName}`)
      expect(log).to.have.property('v', 0)
      expect(log).to.have.property('level')
      expect(log).to.have.property('pid')
      expect(log).to.have.property('time')
    })

    // Call middleware
    middleware(req, res, done)
    expect(req).to.have.property('log')
    assert.isObject(req.log)
    expect(req).to.have.property('log')
    assert.isObject(req.log)
    assert.isFunction(req.log.info)
    assert.isFunction(req.log.error)
  })

  it('should throw error if routeName is not specified when using attachLogToReq', () => {
    const obj = require(moduleName)

    expect(() => obj.attachLogToReq()).to.throw('Feature tag is required')
  })
})
