'use strict'

const { expect } = require('chai')
const { api } = require('../../../tests/utils')
const mongoose = require('mongoose')
const faker = require('faker')
const config = require('../../../config')
const Todo = require('../../../models/todo')

describe('GET "/todos/todo_id', () => {
  describe('success', () => {
    let createdTodo
    before(async () => {
      await mongoose.connect(config('MONGODB_URL'))
      const todo = new Todo({
        text: faker.lorem.sentence(),
        due_date: faker.date.future(),
      })
      createdTodo = await todo.save()
    })
    after(async () => {
      await mongoose.connection.db.dropDatabase()
      await mongoose.disconnect()
    })
    it('should return a todo', () => {
      return api()
        .get('/v1/todos/' + createdTodo._id)
        .expect(200)
        .then(res => {
          return expect(res.body._id).to.eql(createdTodo._id.toString)
        })
    })
  })
})