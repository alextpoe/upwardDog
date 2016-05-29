# Phase 3: Projects (2 days)

## Rails
### Models
* Project


### Controllers
* Api::ProjectsController (create, destroy, index, show, update)

### Views
* notebooks/index.json.jbuilder
* notebooks/show.json.jbuilder
* tags/show.json.jbuilder

## Flux
### Views (React Components)
* ProjectsIndex
  - ProjectIndexItem
* ProjectForm

### Stores
* Project

### Actions
* ApiActions.receiveAllProjects -> triggered by ApiUtil
* ApiActions.receiveSingleProject
* ApiActions.deleteProject
* ProjectActions.fetchAllProjects -> triggers ApiUtil
* ProjectActions.fetchSingleProject
* ProjectActions.createProject
* ProjectActions.editProject
* ProjectActions.destroyProject

### ApiUtil
* ApiUtil.fetchAllProjects
* ApiUtil.fetchSingleProject
* ApiUtil.createProject
* ApiUtil.editProject
* ApiUtil.destroyProject

## Gems/Libraries
