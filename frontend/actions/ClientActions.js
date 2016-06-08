var TasksApiUtil = require('../util/TasksApiUtil');
var ProjectsApiUtil = require('../util/ProjectsApiUtil');

var ClientActions = {
  receiveAllTasks: TasksApiUtil.receiveAllTasks,

  createTask: TasksApiUtil.createTask,

  updateTask: TasksApiUtil.editTask,

  deleteTask: TasksApiUtil.deleteTask,

  fetchAllProjects: ProjectsApiUtil.receiveAllProjects,

  createProject: ProjectsApiUtil.createProject,

  updateProject: ProjectsApiUtil.editProject,

  deleteProject: ProjectsApiUtil.deleteProject,

  fetchProject: ProjectsApiUtil.getProject
};


module.exports = ClientActions;
