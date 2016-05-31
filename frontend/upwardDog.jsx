var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;

var App = require('./components/App');

var Router = (
  <Router history={ hashHistory }>
    <Route path="/" component={App}>

    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById('content');
  ReactDOM.render(Router, 'root');
});
