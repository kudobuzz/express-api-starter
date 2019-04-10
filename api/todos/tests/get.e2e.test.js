'use strict'

const { api } = require('../../../tests/utils')

describe('GET "/todo/:id',() => {
    describe('Failure', () => {
        it ('should throw err if todo id is not an object id', ()=>{
           const error = {
               error :{
                    "message": "todos with id <todos:id> cannot be found"    
               }
           } 
         return api()
           .get('/v1/todos')
           .expect(404, error )
        })
    })
})