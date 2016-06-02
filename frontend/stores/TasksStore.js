var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var TasksConstants = require('../constants/TasksConstants');
var SessionStore = require('./SessionStore');

var TasksStore = new Store(AppDispatcher);

window._tasks = {};
var _currentUser = {};

var _resetTasks = function (tasks) {
  _tasks = {};
  _currentUser = {};
  var userTasks = [];


  _currentUser = SessionStore.currentUser();
  tasks.forEach(function (task) {
    if (task.assignee_id === _currentUser.id){
      userTasks.push(task);
    }
  });
  userTasks.forEach(function (task) {
    _tasks[task.id] = task;
  });
};

var _setTask = function (task) {
  _tasks[task.id] = task;
};

var _removeTask = function (task) {
  delete _tasks[task.id];
};

TasksStore.all = function () {
  var tasks = Object.keys(_tasks).map(function(id){
    return _tasks[id];
  });

  return tasks;
};

TasksStore.find = function (id) {
  return _tasks[id];
};

TasksStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case TasksConstants.TASKS_RECEIVED:
      _resetTasks(payload.tasks);
      TasksStore.__emitChange();
      break;
    case TasksConstants.TASK_RECEIVED:
      _setTask(payload.task);
      TasksStore.__emitChange();
      break;
    case TasksConstants.TASK_REMOVED:
      _removeTask(payload.task);
      TaskStore.__emitChange();
      break;
  }
};


module.exports = TasksStore;
