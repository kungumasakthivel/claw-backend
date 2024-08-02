# Register and Login API

### Register API

Thsi API requires name, email and password to register a user. It accept's JSON format to pass the value into register endpoint.

POST method

`https://claw-backend-hrmw.onrender.com/user/register` this uri is used to make API register call to make in DB

```json
{
  "name": "example name",
  "email": "example@mail.com",
  "password": "example"
}
```

Using this format we can able to pass the data to this endpoint.

```json

```


### Login API 

* POST method
* This API call is to login into the application, user who register with this application can able to login into this application.
* If the user didn't register, they can't able to login. They need to register before login else an popup that will notify the user to login

`https://claw-backend-hrmw.onrender.com/user/login` this uri is used to make login with email and password

```json
{
  "email": "example@mail.com",
  "password": "example"
}
```

Using this format we can pass data to login endpoint

With the API responce we recieve an JWT token to make future authentication we can get use of this JWT token.

```json
{
  "message": "user logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmFjZmViYmY5ZDA5MzJhYjRlMzVjNTIiLCJpYXQiOjE3MjI2MTc2MDAsImV4cCI6MTczMjk4NTYwMH0.bRBSYmBWWJifoicQ6nTFNSft373CNwnfHlPn-_M3bps",
  "status": 1
}
```

This will be the responce when a user log into the application. So, the jwt token will different for every login.
