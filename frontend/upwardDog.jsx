var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var App = require('./components/App');
var LoginForm = require('./components/LoginForm');

var SessionStore = require('./stores/SessionStore');
var SessionApiUtil = require('./util/SessionApiUtil');

var routes = (
  <Route path="/" component={App}>
    <Route path="/login" component={ LoginForm }/>
  </Route>
);

function _ensureLoggedIn(nextState, replace, asyncDoneCallback) {
  if (SessionStore.currentUserHasBeenFetched()){
    redirectIfNotLoggedIn();
  } else {
    SessionApiUtil.fetchCurrentUser(redirectIfNotLoggedIn);
  }

  function redirectIfNotLoggedIn() {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
  }
}


document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("content");
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>, root);
});
