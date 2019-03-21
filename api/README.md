
## Open API 3.0.0
This is the API description format for REST APIs 
OpenAPI allows you to describe your entire API 
   Including : 
   - Endpoints and the operations on each endpoint 
   - Parameters 
   - Authentication methods 
This API specifications can be written in YAML or JSON.The preffered being YAML 

The basic structure is as follows

### Servers 
Specifies the API server and URl 
for example 
```JavaScript
servers:
  - url: http://api.example.com/v1
    description: Optional server description, e.g. Main (production) server
```

### Paths 
The path defines the individual endpoints and the HTTP methods  
for example GET/users can e described as

```JavaScript
 /users:
    get:
      summary: Returns a list of users.
      description: Optional extended description

```
### Parameters 
 To describe a parameter you need to specify its Name,location ,data type  this is either in the Schema or Content  
Parameters also need to be described if it required or not

```JavaScript 
  /user/{userId}:
    get:
      summary: Returns a user by ID.
      parameters:
        - name: userId
          in: path
          required: true

```

### Request body 
Request bodies are often used with create and update operations(PUT,POST,PATCH) the request body contains the resource to be create 

```JavaScript
 requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Pet'
            
```

Note that the schema is used to describe the response body.A schema can define: 
- an object or an array — typically used with JSON and XML APIs,
- a primitive data type such as a number or string – used for plain text responses,
- a file 

request body can be reused to do this it is defined in global components for further check [here](https://swagger.io/docs/specification/describing-request-body/)

### Responses 
This defines possible status codes and the response body schema that can also be referenced through ```$ref```
A response is defined by its HTTP status code and the data returned in the response body and/or headers

``` JavaScript
responses:
        '200':
          description: OK
        '400':
          description: Bad request. User ID must be an integer and larger than 0.
        '401':
          description: Authorization information is missing or invalid.
        '404':
          description: A user with the specified ID was not found.

```

### Input and Output Models 
The global components/schemas section lets you define common data structures used in your API

```JavaScript
components:
  schemas:
    User:
      properties:
        id:
          type: integer
        name:
          type: string
      # Both properties are required
      required:  
        - id
        - name
```

### Authentications 

To describe authentication methods one uses security schemes and security keywords,more on authentication  [here](https://swagger.io/docs/specification/authentication/)



