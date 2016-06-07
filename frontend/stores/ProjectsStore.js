var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var ProjectsConstants = require('../constants/ProjectsConstants');
var SessionStore = require('./SessionStore');

var ProjectsStore = new Store(AppDispatcher);

window._projects = {};
var _currentUser = {};

var _resetProjects = function (projects) {
  _projects = {};
  _currentUser = {};
  var userProjects = [];


  _currentUser = SessionStore.currentUser();
  projects.forEach(function (project) {
    if (project.users.indexOf(_currentUser.id) >= 0){
      userProjects.push(project);
    }
  });
  userProjects.forEach(function (project) {
    _projects[project.id] = project;
  });
};

var _setProject = function (project) {
  _projects[project.id] = project;
};

var _removeProject = function (project) {
  delete _projects[project.id];
};

ProjectsStore.all = function () {
  var projects = Object.keys(_projects).map(function(id){
    return _projects[id];
  });

  return projects;
};

ProjectsStore.find = function (id) {
  return _projects[id];
};

ProjectsStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ProjectsConstants.PROJECTS_RECEIVED:
      _resetProjects(payload.projects);
      ProjectsStore.__emitChange();
      break;
    case ProjectsConstants.PROJECT_RECEIVED:
      _setProject(payload.project);
      ProjectsStore.__emitChange();
      break;
    case ProjectsConstants.PROJECT_REMOVED:
      _removeProject(payload.project);
      ProjectsStore.__emitChange();
      break;
  }
};


module.exports = ProjectsStore;
