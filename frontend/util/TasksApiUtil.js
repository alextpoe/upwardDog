var TasksActions = require('../actions/TasksActions');

var TasksApiUtil = {
  receiveAllTasks: function (tasks) {
    $.ajax({
      type: "GET",
      url: "api/user/tasks",
      dataType: "json",
      data: {tasks: tasks},
      success: function (data) {
        TasksActions.receiveAllTasks(data);
      }
    });
  },
  createTask: function (task) {
    $.ajax({
      type: "POST",
      url: "api/user/tasks",
      dataType: "json",
      data: { task: task },
      success: function (task) {
        TasksActions.receiveTask(task);
      }
    });
  },

  getTask: function (id) {
    $.ajax({
      type: "GET",
      url: "api/user/tasks/" + id,
      dataType: "json",
      success: function () {
        console.log("success");
      }
    });
  },

  editTask: function (task, id) {
    $.ajax({
      type: "PATCH",
      url: "api/user/tasks/" + id,
      dataType: "json",
      data: {task: task},
      success: function (task) {
        TasksActions.receiveTask(task);
      }
    });
  },

  deleteTask: function (id) {
    $.ajax({
      type: "DELETE",
      url: "api/user/tasks/" + id,
      success: function (task) {
        TasksActions.removeTask(task);
      }
    });
  }
};

module.exports = TasksApiUtil;
