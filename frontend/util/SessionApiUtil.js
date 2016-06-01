var SessionActions = require('../actions/SessionActions');

var SessionApiUtil = {
  login: function (credentials) {
    $.ajax({
      type: "POST",
      url: "api/session",
      dataType: "json",
      data: { user: credentials },
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("login", errors);
      }
    });
  },

  logout: function () {
    $.ajax({
      type: "DELETE",
      url: "api/session",
      dataType: "json",
      success: function () {
        SessionActions.removeCurrentUser();
      },
      error: function () {

      }
    });
  },

  fetchCurrentUser: function (complete) {
    $.ajax({
      type: "GET",
      url: "api/session",
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (){
        
      },
      complete: complete
    });
  }
};

module.exports = SessionApiUtil;
