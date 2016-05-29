# Flux Cycles


## Task Cycles

### Tasks API Request Actions

* `fetchAllTasks`
  0. invoked from `TasksIndex` `didMount`/`willReceiveProps`
  0. `GET /api/tasks` is called.
  0. `receiveAllTasks` is set as the callback.

* `createTask`
  0. invoked from new note button `onClick`
  0. `POST /api/tasks` is called.
  0. `receiveSingleTask` is set as the callback.

* `fetchSingleTask`
  0. invoked from `TaskDetail` `didMount`/`willReceiveProps`
  0. `GET /api/tasks/:id` is called.
  0. `receiveSingleTask` is set as the callback.

* `updateTask`
  0. invoked from `TaskForm` `onSubmit`
  0. `POST /api/tasks` is called.
  0. `receiveSingleTask` is set as the callback.

* `destroyTask`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/tasks/:id` is called.
  0. `removeTask` is set as the callback.

### Tasks API Response Actions

* `receiveAllTasks`
  0. invoked from an API callback.
  0. `Task` store updates `_tasks` and emits change.

* `receiveSingleTask`
  0. invoked from an API callback.
  0. `Task` store updates `_tasks[id]` and emits change.

* `removeTask`
  0. invoked from an API callback.
  0. `Task` store removes `_tasks[id]` and emits change.

### Store Listeners

* `TasksIndex` component listens to `Task` store.
* `TaskDetail` component listens to `Task` store.


## Project Cycles

### Projects API Request Actions

* `fetchAllProjects`
  0. invoked from `ProjectsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/notebooks` is called.
  0. `receiveAllProjects` is set as the callback.

* `createProject`
  0. invoked from new notebook button `onClick`
  0. `POST /api/notebooks` is called.
  0. `receiveSingleProject` is set as the callback.

* `fetchSingleProject`
  0. invoked from `ProjectDetail` `didMount`/`willReceiveProps`
  0. `GET /api/notebooks/:id` is called.
  0. `receiveSingleProject` is set as the callback.

* `updateProject`
  0. invoked from `ProjectForm` `onSubmit`
  0. `POST /api/notebooks` is called.
  0. `receiveSingleProject` is set as the callback.

* `destroyProject`
  0. invoked from delete notebook button `onClick`
  0. `DELETE /api/notebooks/:id` is called.
  0. `removeProject` is set as the callback.

### Projects API Response Actions

* `receiveAllProjects`
  0. invoked from an API callback.
  0. `Project` store updates `_notebooks` and emits change.

* `receiveSingleProject`
  0. invoked from an API callback.
  0. `Project` store updates `_notebooks[id]` and emits change.

* `removeProject`
  0. invoked from an API callback.
  0. `Project` store removes `_notebooks[id]` and emits change.

### Store Listeners

* `ProjectsIndex` component listens to `Project` store.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
