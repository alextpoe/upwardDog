var SessionActions = require('../actions/actions/SessionAction');

var UserApiUtil = {
  signup: function (formData) {
    $.ajax({
      type: "POST",
      url: "api/user",
      dataType: "json",
      data: {user: formData},
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (){

      }
    });
  }
};

module.exports = UserApiUtil;
