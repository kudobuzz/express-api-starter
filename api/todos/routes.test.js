  const app = require('../app.js')
  const request = require('supertest')

  describe('Todo tests', function () {
    it('/api/todo/todos should return a json array', function (done) {
      request(app)
            .get('/api/todo/todos')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (res) {
              if (!Array.isArray(res.body)) {
                throw new Error('did not respond with a json array')
              }
            })
            .end(done)
    })

    it('/api/todo/create to accept a title and return a todo object', function (done) {
      request(app)
           .post('/api/todo/create')
           .send({title: 'some title'})
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function (res) {
             if (res.body.title !== 'some title') {
               throw new Error('todo object in response has wrong title')
             }
             if (!(res.body.completed === false)) {
               throw new Error('todo object created with wrong default')
             }

             if (!(res.body.id)) {
               throw new Error('missing id in response')
             }
           })
            .end(done)
    })

    it('/api/todo/todo_id updates the existing todo object', function (done) {
      let status = true
      request(app)
          .put('/api/todo/1234')
          .send({completed: status})
          .expect(200)
          .expect('Content-Type', /json/)
          .expect(function (res) {
            if (!res.body.completed === status) {
              throw new Error(`expected completed status to be ${status} but is ${res.body.completed}`)
            }
          })
          .end(done)
    })

    it('/api/todo/todo_id returns the existing todo object', function (done) {
      let todoId = '1234'
      request(app)
         .get(`/api/todo/${todoId}`)
         .expect(200)
         .expect('Content-Type', /json/)
         .expect(function (res) {
           if (res.body.id !== todoId) {
             throw new Error('recieved wrong todo object')
           }
         })
         .end(done)
    })
  })
