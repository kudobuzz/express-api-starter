# To Do API

This is a simple web api to allow you farmilirise with the APIs

## API endpoints 


| ACTION        | HTTP  |    ENDPOINTS     |
|---------------|-------|------------------|
|get all todo   | GET   |    api/todos     |
|get todo: id   | GET   |   /api/todos/id  |
|post a todo    | POST  |   /api/todo      |

- Get TODO's:
GET /todo
```JavaScript
// get all todo
 app.get('/api/todo', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todo retrieved successfully',
    todo: db
  })
});
```


- Gets TODO with id:
GET /todo/id
This get a single to do  by the id

```JavaScript 
//get todo by id 
app.get('/api/todo/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  db.map((todo) => {
    if (todo.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'todo retrieved successfully',
        todo,
      });
    } 
```

- Add a TODO: 

POST /todo
this creates an endpoint to create a to do 
```JavaScript
app.post('/api/v1/todo', (req, res) => {
  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
```






