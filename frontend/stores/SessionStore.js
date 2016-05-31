var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var SessionConstants = require('../constants/SessionConstants');

var SessionStore = new Store(AppDispatcher);

var _currentUser = {};
var _currentUserHasBeenFetched = false;

function _login(currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
}

function _logout() {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
}


SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.current_user);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
      _logout();
      SessionStore.__emitChange();
      break;
  }
};

SessionStore.currentUser = function () {
  return $.extend({}, _currentUser);
};

SessionStore.currentUserHasBeenFetched = function () {
  return _currentUserHasBeenFetched;
};

SessionStore.isUserLoggedIn = function () {
  return !!_currentUser.id;
};

module.exports = SessionStore;
