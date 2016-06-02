var TasksApiUtil = require('../util/TasksApiUtil');

var ClientActions = {
  receiveAllTasks: TasksApiUtil.receiveAllTasks,

  createTask: TasksApiUtil.createTask,
};


module.exports = ClientActions;
