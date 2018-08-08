'use strict'

const { expect } = require('chai')
const { createNewTodo } = require('./index')
const todos = require('../../models/todos')()
const { tearDown } = require('../../test/utils')

describe.only('Todos Service', () => {
  before(() => tearDown())

  describe('createNewTodo()', () => {
    it('should throw error if title parameter is not  passed', () => {
      expect(() => createNewTodo()).to.throw('title is required')
    })

    it('should create new todo in db', async () => {
      const todoTitle = 'New Todo'
      await createNewTodo({ title: todoTitle })
      const todo = await todos.get({ query: { title: todoTitle } })
      expect(todo).to.include({ title: todoTitle })
    })
  })
})
