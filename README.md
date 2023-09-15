# REST API for Managing Persons

## Introduction

This project provides a REST API for CRUD (Create, Read, Update, Delete) operations on a "user" resource. It is built using Node.js and MongoDB for data storage.

## API Endpoints

### Create a New Person

**Request**

- Method: POST
- Endpoint: `/api`
- Body:
  ```json
  {
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com"
  }
  ```
**Response**

- Status: 201 Created

```json
{
  "message": "Person created successfully",
  "user": {
    "id": "12345",
    "name": "John Doe",
  }
}
```

### Fetch Details of a Person

**Request**

- Method: GET
- Endpoint: /api/:userId

**Response**

- Status: 200 OK
``` json 
{
  "message": "Person retrieved successfully",
  "user": {
    "id": "12345",
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com"
  }
}
```

### Update Details of a Person
**Request**

- Method: PUT
- Endpoint: /api/:userId
- Body:
json
```json
{
  "name": "Updated Name",
  "age": 35,
  "email": ""
}
```

**Response**

- Status: 200 OK
```json
{
  "message": "Person updated successfully",
  "user": {
    "id": "12345",
    "name": "Updated Name",
  }
}
```

### Delete a Person

**Request**

- Method: DELETE
- Endpoint: /api/:userId

**Response**

- Status: 204 No ContentResponse

## Setup Instructions

* Clone the repository.
* Install dependencies with npm install.
* Configure environment variables (e.g., MongoDB connection).
* Start the server with npm start.

## Sample API Usage

Here are some sample API usage examples using cURL:

* Create a new user:


``` curl
curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "age": 30, "email": "johndoe@example.com"}' http://localhost:3000/api
```
* Fetch details of a user:

``` curl
curl http://localhost:3000/api/12345
```
* Update details of a user:

```curl
curl -X PUT -H "Content-Type: application/json" -d '{"name": "Updated Name"}' http://localhost:3000/api/12345
```

* Delete a user:

```curl
curl -X DELETE http://localhost:3000/api/12345
```

- Request and Response Formats
- Requests should be in JSON format.
- Responses are in JSON format.