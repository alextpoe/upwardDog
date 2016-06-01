var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var ErrorConstants = require('../constants/SessionConstants');

var _errors = {};
var _form = {};

var ErrorStore = new Store (AppDispatcher);

ErrorStore.formErrors = function (form) {
  if (form !== _form) {
    return {};
  }

  var result = {};

  var errors;

  Object.keys(_errors).forEach(function (field) {
    errors = _errors[field];
    result[field] = errors.slice();
  });

  return result;

};

ErrorStore.form = function () {
  return _form.slice();
};

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      _errors = payload.errors;
      _form = payload.form;
      ErrorStore.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      _errors = {};
      _form = "";
      ErrorStore._emitChange();
      break;
  }
};

module.exports = ErrorStore;
