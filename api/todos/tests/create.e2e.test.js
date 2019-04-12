'use strict'

const { api } = require('../../../tests/utils')
const faker = require('faker')
const requiredFields = [
  'todo_id',
  'title',
  'note'
]
const endPoint = '/v1/todos'

describe('POST "/todos"', () => {
  describe('Failure', () => {
    let todos
    beforeEach(async () => {
      todos = {
        title: faker.random.word(),
        note: faker.lorem.sentence(),
        due_date: faker.date.future(),
      }

      //it should create a todo
      //
    })