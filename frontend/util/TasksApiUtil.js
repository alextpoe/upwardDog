var TasksActions = require('../actions/TasksActions');

var TasksApiUtil = {
  receiveAllTasks: function (project_id) {
    $.ajax({
      type: "GET",
      url: "api/user/projects/" + project_id + "/tasks",
      dataType: "json",
      success: function (data) {
        TasksActions.receiveAllTasks(data);
      }
    });
  },
  createTask: function (task, project_id, complete) {
    $.ajax({
      type: "POST",
      url: "api/user/projects/" + project_id + "/tasks",
      dataType: "json",
      data: { task: task },
      success: function (task) {
        TasksActions.receiveTask(task);
      },
      complete: complete
    });
  },

  getTask: function (project_id, id) {
    $.ajax({
      type: "GET",
      url: "api/user/projects/" + project_id + "/tasks/" + id,
      dataType: "json",
      success: function () {
        console.log("success");
      }
    });
  },

  editTask: function (task, project_id, id) {
    $.ajax({
      type: "PATCH",
      url: "api/user/projects/" + project_id + "/tasks/" + id,
      dataType: "json",
      data: {task: task},
      success: function (task) {
        TasksActions.receiveTask(task);
      }
    });
  },

  deleteTask: function (id, project_id) {
    $.ajax({
      type: "DELETE",
      url: "api/user/projects/" + project_id + "/tasks/" + id,
      success: function (task) {
        TasksActions.removeTask(task);
      }
    });
  }
};

module.exports = TasksApiUtil;
