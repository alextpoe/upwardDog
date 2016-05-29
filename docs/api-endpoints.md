# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `GET / users/:id/tasks`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Tasks

- `GET /api/tasks`
  - Tasks index/search
- `POST /api/tasks`
- `GET /api/tasks/:id`
- `PATCH /api/tasks/:id`
- `DELETE /api/tasks/:id`

### Projects

- `GET /api/Projects`
- `POST /api/Projects`
- `GET /api/Projects/:id`
- `PATCH /api/Projects/:id`
- `DELETE /api/Projects/:id`
- `GET /api/Projects/:id/tasks`
  - index of all tasks for a notebook
