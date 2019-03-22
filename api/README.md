# To Do API

This is a simple web api to allow you farmilirise with the APIs

## API endpoints 

- Get TODO's:


GET /todo
```JavaScript
// get all todos
 app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});
```


- Gets TODO with id:
GET /todo/id
This get a single to do  by the id

```JavaScript 
app.get('/api/v1/todos/:id', (req, res) => {
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
app.post('/api/v1/todos', (req, res) => {
  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
```

- Update TODO with todoid:
PUT /todo/todoid

TODO's are sent and received in JSON using the following format:

{  
    "id": 42,  
    "name": "Get the Name",  
    "status": "done"  
}  






