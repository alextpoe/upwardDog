var SessionApiUtil = {
  login: function (credentials) {
    $.ajax({
      type: "POST",
      url: "api/session",
      dataType: "json",
      data: { user: credentials },
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
        console.log("success");
      },
      error: function () {

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
        console.log("deleted");
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
