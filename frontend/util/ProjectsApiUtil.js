var ProjectsActions = require('../actions/ProjectsActions');

var ProjectsApiUtil = {
  receiveAllProjects: function (projects, complete) {
    $.ajax({
      type: "GET",
      url: "api/user/projects",
      dataType: "json",
      data: {projects: projects},
      success: function (data) {
        ProjectsActions.receiveAllProjects(data);
      },
      complete: complete
    });
  },
  createProject: function (project) {
    $.ajax({
      type: "POST",
      url: "api/user/projects",
      dataType: "json",
      data: { project: project },
      success: function (project) {
        ProjectsActions.receiveProject(project);
      }
    });
  },

  getProject: function (id) {
    $.ajax({
      type: "GET",
      url: "api/user/projects/" + id,
      dataType: "json",
      success: function (project) {
        ProjectsActions.receiveProject(project);
        console.log("success");
      }
    });
  },

  editProject: function (project, id) {
    $.ajax({
      type: "PATCH",
      url: "api/user/projects/" + id,
      dataType: "json",
      data: {project: project},
      success: function (project) {
        ProjectsActions.receiveProject(project);
      }
    });
  },

  deleteProject: function (id) {
    $.ajax({
      type: "DELETE",
      url: "api/user/projects/" + id,
      success: function (project) {
        ProjectsActions.removeProject(project);
      }
    });
  }
};

module.exports = ProjectsApiUtil;
