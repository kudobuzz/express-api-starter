FORMAT: 1A
# Todo Service
Todo is a simple service that provides and api to get and list all todos.

# Group Todo
Resources related to todo api

## Todos Collection [/todos]

### List all todos [GET]
+ Response 200 (application/json)

        [
            {
                title: 'remove task on github',
                completed: false,
                id: xklkj4i3oi34i
            },
            {
                title: 'add task on github',
                completed: false,
                id: xklkj4i3oi34i2
            }
        ]
    

   
### Create a todo [POST]
Create a task.
+ title (string) - The title for the task

+ Request (application/json)

        {
            title: 'remove task on github'
        }

+ Response  200 (application/json)

        {
            title: 'remove task on github',
            completed: false,
            id: xklkj4i3oi34i
        }

## Todo  [/todos/{todo_id}]
+ Parameters
    + todo_id (number)- Id of the todo task

### Get todo [GET]

+ Response 200 (application/json)

        {
            title: 'remove task on github',
            completed: 'false',
            id: xklkj4i3oi34i
        }

### Update a particular todo  [PUT]
+ Request (application/json)

        {
            completed: 'true'
        }

+ Response 200  (application/json)

        {
            completed: 'true',
            title: 'remove task on github',
            id: xklkj4i3oi34i
        }