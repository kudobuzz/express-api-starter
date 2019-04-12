'use strict'

const faker = require('faker')

const todosModel = require('../../models/todo')()

const createTodoObject = ({ overrides = {} } = {}) => {
    const todo = Object.assign({}, overrides)

    return Object.assign(
        {
          todo_id: faker.random.uuid()
        },
        todo
    )
}

const insertTodo = ({overrides = {}}) => {
   todosModel.create(createTodoObject({overrides}))
}

module.exports = {
  createTodoObject,
  insertTodo
}