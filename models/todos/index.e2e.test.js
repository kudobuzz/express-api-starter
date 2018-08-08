'use strict'

const todos = require('./index')()
const { expect } = require('chai')
const { tearDown } = require('../../test/utils')

describe('Todos Model', () => {
  before(async () => {
    await tearDown()
  })

  describe('create()', () => {
    it('should save new todo in db', async () => {
      const todoTitle = 'My first Todo'
      await todos.create({ title: todoTitle })
      const todoFromDb = await todos.get({ query: { title: todoTitle } })
      expect(todoFromDb).to.be.include({ title: todoTitle })
    })
  })

  describe('get()', () => {
    const todoTitle = 'Second Todo'

    before(() => todos.create({ title: todoTitle }))

    it('should get specific todo from db', () => {
      return expect(todos.get({
        query: {
          title: todoTitle
        }
      })).to.eventually.include({ title: todoTitle })
    })
  })

  describe('update()', () => {
    let todo
    before(async () => {
      todo = await todos.create({ title: 'Third Todo' })
    })

    it('should update specific todo', async () => {
      const todoTitle = 'Third Todo Updated'
      const query = { _id: todo._id }
      await todos.update({ query, update: { title: todoTitle } })
      const updatedTodo = await todos.get({ query: { _id: todo._id } })
      expect(updatedTodo).to.include({ title: todoTitle })
    })
  })
})
