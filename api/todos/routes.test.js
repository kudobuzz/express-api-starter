'use strict'

const { expect } = require('chai')
const request = require('supertest')
const app = require('../app')

describe('Todo tests', function () {
  let todo

  it('/api/todo/todos should return a json array', async function () {
    this.timeout(80000)
    const response = await request(app).get('/api/todo/todos')
    const { status } = response
    expect(status).to.equal(200)
  })

  it('/api/todo/create to accept a title and return a todo object', async function () {
    this.timeout(80000)

    const response = await request(app)
      .post('/api/todo/create')
      .send({ title: 'some title' })

    const { status, body } = response
    expect(status).to.equal(200)
    expect(body.title).to.equal('some title')
    expect(body.completed).to.equal(false)
    expect(body._id).to.be.a('string')

    todo = body
  })

  it('/api/todo/todo_id updates the existing todo object', async function () {
    this.timeout(80000)

    const response = await request(app)
      .put(`/api/todo/${todo._id}`)
      .send({ completed: true })

    const { status, body } = response
    expect(status).to.equal(200)
    expect(body.completed).to.equal(true)
  })

  it('/api/todo/todo_id returns the existing todo object', async function () {
    this.timeout(80000)

    const response = await request(app).get(`/api/todo/${todo._id}`)

    const { status, body } = response
    expect(status).to.equal(200)
    expect(body.title).to.equal('some title')
    expect(body.completed).to.equal(true)
    expect(body._id).to.eql(todo._id)
  })
})
