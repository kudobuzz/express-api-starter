const chai = require('chai')
const todoSchema = require('../../../../models/todos/schema.js')
const expect = chai.expect

describe('Test todoSchema properties', function () {
  it('Has a title field which is required string', function () {
        let titlePath = todoSchema.path('title');
    	expect(titlePath.instance).to.be.equal('String')
    	expect(titlePath.isRequired).to.be.equal(true);
  })

  it('Has completed field defaulting to false', function () {
        let completedPath = todoSchema.path('completed');
    	expect(completedPath.instance).to.be.equal('Boolean')
    	expect(completedPath.defaultValue).to.be.equal(false);
  });

  it('Has _id field',function(){
  	let objectIdPath = todoSchema.path('_id');
  	expect(objectIdPath.instance).to.be.equal('ObjectID');
  });
});
