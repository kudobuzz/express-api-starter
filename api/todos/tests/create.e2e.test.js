'use strict'

const { api } = require('../../../tests/utils')
const faker = require('faker')
const mongoose = require('mongoose')
const config = require('../../../config')

const { expect } = require('chai')

describe('POST "/todos', () => {
  describe('success', () => {
    let todo
    before(async () => {
      await mongoose.connect(config('MONGODB_URL'))
      todo = {
        text: faker.lorem.sentence(),
        due_date: faker.date.future(),
      }
    })
    it('should create a new todo on the list', () => {
      return api()
      .post('/v1/todos')
      .send(todo)
      .expect(200)
      .then((res) => {
        return expect(res.body).to.be.an('object').that.has.property('text', todo.text)
      })
    })
  })
})