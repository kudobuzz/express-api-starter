# To Do API

This is a simple api for  interacting with the boilerplate



## HTTP Methods 

| HTTP METHOD | POST            | GET       | PUT        |
| ----------- | --------------- | --------- | ----------- |
| CRUD OP     | CREATE          | READ      | UPDATE      |
| /todos     | Create new todos | List todos| Bulk update |
| /todos/1234  | Error           | Show todo/:id   | If exists, update todos; If not, error | 

## HTTP status codes 
Below you can find a few examples on the common status codes used.


| Status Code  | Description                                                            |
|--------------|------------------------------------------------------------------------|
| 200 OK       | The request was successfully processed                                 |
| 201 Created  | The request has been fulfilled and the new resource has been created   |
| 400 Bad Request | The request was not understood by server due bad  syntax, request contains invalid and missing request details. |
| 404 not Found | The resource was not found |

## Requests and response

### API endpoints 


| ACTION        | HTTP  |    ENDPOINTS    |
|---------------|-------|-----------------|
|get all todo   | GET   |    api/todo     |
|get todo: id   | GET   |   /api/todo/id  |
|post a todo    | POST  |   /api/todo     |


### API Resources

  - [GET /todos](#get-todos)
  - [GET /todos/[id]](#get-todoid)
  - [POST /todos/[id]/articles](#post-todos)

### GET/todos
example: https://todo.go/api/v1/todos

Response Body:

{
  "success": "true",
  "message":  "todos retrieved successfully",
  "todos": [
  {
    "id": 1
    "title" : "test get"
    "desription" :  "go test the get"
  },
  {
    "id": 2
    "title" : "test get again "
    "desription" :  "go test the get twice"
    "created_by":"2019-02-05T06:51:36.749Z"
  }
  ]

}


### GET/todos/[id]
example: https://todo.go/api/v1/todos[id]

Response body:

{
{
  "success": "true",
  "message":  "todos retrieved successfully",
  "todos": [
  {
    "id": 2
    "title" : "test get again "
    "desription" :  "go test the get twice"
  }
  ]

}


### POST/todos 

example:http://api.todo.go/v1/todos/[id]

Response body:


{
  "success": "true",
  "message":  "todos added successfully",
  "todos": [
  {
    "id": 3
    "title" : "added new todo"
    "desription" :  "go test the post"
    "created_by":"2019-02-05T06:51:36.749Z"
  }
  ]

}


## Errors
When an error occurs the api gives an error response and it is in the following format.

    {
      "error": {
         "message" : "Verbose, plain language description of the problem. Provide
                      suggestions about how to solve problems here",required
          "code" : "444444", // this is not the same statusCodes, optional
          "details": [{param, messeage, value}] // Validation Error details, optional
      }
    }
example:

Error Response:

{message:false code: 404, details: "Message"}







