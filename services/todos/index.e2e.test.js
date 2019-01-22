'use strict'

const { expect } = require('chai')
const todos = require('../../models/todos')()
const { tearDown } = require('../../test/utils')
const { updateTodo, createNewTodo } = require('./index')()

describe('Todos Service', () => {
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

  describe('updateTodo()', () => {
    let todo

    before(async () => {
      todo = await todos.create({ title: 'Make a call to Kudobuzz' })
    })

    it('should throw if todoId is not passed', () => {
      expect(() => updateTodo({ title: 'Test Todo' })).to.throw('todoId is required')
    })

    it('should throw if title is not passed as parameter', () => {
      expect(() => updateTodo({ todoId: todo._id, completed: true })).to.throw('title is required')
    })

    it('should update todo with completed true', async () => {
      await updateTodo({
        completed: true,
        todoId: todo._id,
        title: 'Make a call to Kudobuzz'
      })

      const updatedTodo = await todos.get({ query: { _id: todo._id } })
      expect(updatedTodo).to.include({
        completed: true,
        title: 'Make a call to Kudobuzz'
      })
    })
  })
})
