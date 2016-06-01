var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var SessionConstants = require('../constants/SessionConstants');

var SessionStore = new Store(AppDispatcher);

var _currentUser = {};
var _currentUserHasBeenFetched = false;

var _login = function (currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
};

var _logout = function () {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
};


SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
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
