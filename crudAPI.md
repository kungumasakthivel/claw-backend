# CRUD API

### Create Note

* This API will create a new note in DB, with title and body as an input using POST method
* With this API we need to pass JWT token authenticate with server and then it can able to modify the DB
* If the JWT token is incorrect, then the server throws the error, we cant modify the DB

`https://claw-backend-hrmw.onrender.com/crud/create` this uri is used to create note in DB if jwt token is valid

```json
{
  "title": "heading",
  "body": "paragraph"
}
```

This will be the content to be passed in this uri to place create a new note

```json
{
  "message": "created successfully",
  "status": 1
}
```

This will be the responce when the note created successfully


```json
{
  "message": "invalid token",
  "status": 2
}
```

This will be the responce when the jwt token is invalid in header Authorization


```json
{
  "message": "jwt must be provided",
  "status": 2
}
```

This will be the responce when the jwt token is no given in header Authorization
