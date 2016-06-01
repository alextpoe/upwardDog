var SessionActions = require('../actions/SessionActions');
var ErrorActions = require('../actions/ErrorActions');

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
      error: function (xhr){
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("signup", errors);
      }
    });
  }
};

module.exports = UserApiUtil;
