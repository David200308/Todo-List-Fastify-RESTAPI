# To-do List Fastify RESTFull API

## Tech Stack

- Programming Language: TypeScript
- Framework: Fastify
- Database: MongoDB
- Runtime Environment: Node.JS

## Code Structure

```
├── src
│   ├── config
│   │   ├── app.ts
│   │   └── swagger.ts
│   ├── controllers
│   │   ├── todo.controller.ts
│   │   └── user.controller.ts
│   ├── index.ts
│   ├── models
│   │   ├── Task.ts
│   │   └── User.ts
│   └── routes
│       ├── documentation
│       │   ├── todo.api.ts
│       │   └── user.api.ts
│       ├── index.ts
│       ├── task.routes.ts
│       └── user.routes.ts
```

## API Design

- User API Endpoints

  - [POST] `/api/user`

    - Create user
    - body (example)

      ```json
      {
        "firstname": "Testfirst",
        "lastname": "Testlast",
        "email": "test@test.com"
      }
      ```
  - [GET] `/api/users?id=xxxxxx`

    - Get user information by user ID
  - [DELETE] `/api/user?id=xxxxxx`

    - Delete the user
- Task API Endpoints

  - [POST] `/api/task`

    - Create task
    - body (example)

      ```json
      {
          "title": "Task 1",
          "content": "This is a Test Task!",
          "deadline": "2023-12-10T00:00:00.000Z",
          "isCompleted": false,
          "userId": "655c405680da51e72edd44c9"
      }
      ```
  - [GET] `/api/tasks?id=xxxxxx`

    - Get task information by task ID
  - [PUT] `/api/task/update/title?id=xxxxxx`

    - Update the task title by task ID
  - [PUT] `/api/task/update/content?id=xxxxxx`

    - Update the task content by task ID
  - [PUT] `/api/task/update/deadline?id=xxxxxx`

    - Update the task deadline by task ID
  - [PUT] `/api/task/update/status?id=xxxxxx`

    - Update the task isCompleted status by task ID
  - [DELETE] `/api/task?id=xxxxxx`

    - Delete the task

## MongoDB Database Design

Users

```
{
	title: string;
	content: string;
	deadline: Date;
	isCompleted: boolean;
	userId: string;
}
```

Tasks

```
{
	firstname: string;
	lastname: string;
	email: string;
	tasks: Array<string>;
}
```
