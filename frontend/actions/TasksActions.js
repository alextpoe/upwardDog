var AppDispatcher = require('../dispatcher/dispatcher');
var TasksConstants = require('../constants/TasksConstants');



var TasksActions = {
  receiveAllTasks: function (tasks) {
    AppDispatcher.dispatch({
      actionType: TasksConstants.TASKS_RECEIVED,
      tasks: tasks
    });
  },

  receiveTask: function (task) {
    AppDispatcher.dispatch({
      actionType: TasksConstants.TASK_RECEIVED,
      task: task
    });
  },

  removeTask: function (task) {
    debugger
    AppDispatcher.dispatch({
      actionType: TasksConstants.TASK_REMOVED,
      task: task
    });
  },
};

module.exports = TasksActions;
