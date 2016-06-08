var AppDispatcher = require('../dispatcher/dispatcher');
var ProjectsConstants = require('../constants/ProjectsConstants');



var ProjectsActions = {
  receiveAllProjects: function (projects) {
    AppDispatcher.dispatch({
      actionType: ProjectsConstants.PROJECTS_RECEIVED,
      projects: projects
    });
  },

  receiveProject: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectsConstants.PROJECT_RECEIVED,
      project: project
    });
  },

  removeProject: function (project) {
    AppDispatcher.dispatch({
      actionType: ProjectsConstants.PROJECT_REMOVED,
      project: project
    });
  },
};

module.exports = ProjectsActions;
