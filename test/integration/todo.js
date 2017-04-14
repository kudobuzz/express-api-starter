const app = require('../../lib/app.js')
const chai = require('chai')
const request = require('supertest')
const expect = chai.expect

describe('Todo tests', function () {
  it('/api/todo/list should return a json array', function (done) {
    request(app)
            .get('/api/todos')
            .end(function (err, res) {
                expect(res.body).to.be.json;
                expect(Array.isArray(res.body)).to.be.true;
                done(err);
            });
  });

  it('/api/todo/create to accept a title and return a todo object',function(done){
     request(app)
           .post('/api/todo/create')
           .send({title : "some title"})
           .end(function(err,res){
                expect(res.body).to.be.json;
                expect(res.body.title).to.equal('some title');
                done(err);	
           });
  });

  it('/api/todo/todo_id updates the existing todo object',function(done){
     request(app)
          .put('/api/todo/1234')
          .send({completed : true})
          .end(function(err,res){
          	expect(res.body.completed).to.equal(true);
          	expect(res.body.id).to.equal('1234');
          	done(err);
          })
  })

  it('/api/todo/todo_id returns the existing todo object',function(done){
     request(app)
         .get('/api/todo/1234')
         .end(function(err,res){
             expect(res.body.id).to.equal('1234');
             done(err);
         });
  });
});
