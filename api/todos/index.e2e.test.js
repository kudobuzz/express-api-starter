'use strict'

const { expect } = require('chai')
const todos = require('../../models/todos')()
const { getRequest, tearDown } = require('../../test/utils')

describe('Todos API', () => {
  before(async () => {
    await tearDown()
  })

  describe('/api/todos/create', () => {
    const endpoint = '/api/todos/create'

    it('should return 201 when todo is created', () => {
      return getRequest()
        .post(endpoint)
        .send({ title: 'New Todo' })
        .expect(201)
    })

    it('should create todo', async () => {
      const todo = { title: 'Test Todo' }

      await getRequest()
        .post(endpoint)
        .send(todo)

      const todoFromDb = await todos.get({ query: { title: todo.title } })
      expect(todoFromDb).to.include(todo)
    })
  })

  describe('/api/todos/:id', () => {
    let todo

    before(async () => {
      todo = await todos.create({ title: 'Fetch kids from school' })
    })

    it('should update existing todo', async () => {
      const body = {
        completed: true,
        title: 'Fetch kids from school'
      }

      await getRequest()
        .put(`/api/todos/${todo._id}`)
        .send(body)

      const todoFromDb = await todos.get({ query: { _id: todo._id } })
      expect(todoFromDb).to.include(body)
    })
  })
})
