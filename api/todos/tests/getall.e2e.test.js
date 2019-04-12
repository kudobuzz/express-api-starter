'use strict'

const { expect } = require('chai')
const mongoose = require('mongoose')
const config = require('../../../config')
const Todo = require('../../../models/todo')
const { api } = require('../../../tests/utils')
const faker = require('faker')

describe('GET "/todos', () => {
  before(async () => {
    await mongoose.connect(config('MONGODB_URL'))
    const todo = new Todo({
      text: faker.lorem.sentence(),
      due_date: faker.date.future(),
    })
    let getAllTodos = await todo.save()
  })
  after(async () => {
    await mongoose.connection.db.dropDatabase()
    await mongoose.disconnect()
  })
  it('should return todos', () => {
    return api()
      .get('/v1/todos')
      .expect(200)
      .then(res => {
        return expect(res.body.todos).to.be.an('array')
      }).catch(err => { throw err })
  })

})