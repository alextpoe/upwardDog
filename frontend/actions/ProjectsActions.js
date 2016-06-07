var AppDispatcher = require('../dispatcher/dispatcher');
var ProjectsConstants = require('../constants/ProjectsConstants');



var ProjectsActions = {
  receiveAllProjects: function (projects) {
    AppDispatcher.dispatch({
      actionType: ProjectsConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  receiveTask: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectsConstants.PROJECT_RECEIVED,
      project: project
    });
  },

  removeTask: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectsConstants.PROJECT_REMOVED,
      project: project
    });
  },
};

module.exports = ProjectsActions;
