var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/SessionConstants');



var SessionActions = {
  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
  },

  removeCurrentUser: function () {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    });
  }
};

module.exports = SessionActions;
