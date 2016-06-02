var TasksApiUtil = require('../util/TasksApiUtil');

var ClientActions = {
  receiveAllTasks: TasksApiUtil.receiveAllTasks,

  createTask: TasksApiUtil.createTask,

  updateTask: TasksApiUtil.editTask,

  deleteTask: TasksApiUtil.deleteTask
};


module.exports = ClientActions;
