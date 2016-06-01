var SessionApiUtil = {
  receiveAllTasks: function (tasks) {
    $.ajax({
      type: "GET",
      url: "api/user/tasks",
      dataType: "json",
      data: {tasks: tasks},
      success: function () {
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
      url: "api/user/task/" + id,
      dataType: "json",
      success: function () {
        console.log("success");
      }
    });
  },

  editTask: function (task) {
    $.ajax({
      type: "PATCH",
      url: "api/user/tasks/" + task.id,
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

module.exports = SessionApiUtil;
