var TasksApiUtil = {
  receiveAllTasks: function (tasks) {
    $.ajax({
      type: "GET",
      url: "api/user/tasks",
      dataType: "json",
      data: {tasks: tasks},
      success: function (data) {
        console.log("success");
      }
    });
  },

  createTask: function (task) {
    $.ajax({
      type: "POST",
      url: "api/user/tasks",
      dataType: "json",
      data: { task: task },
      success: function () {
        console.log("success");
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
      success: function () {
        console.log("success");
      }
    });
  },

  deleteTask: function (id) {
    $.ajax({
      type: "DELETE",
      url: "api/user/tasks/" + id,
      success: function () {
        console.log("success");
      }
    });
  }
};

module.exports = TasksApiUtil;
