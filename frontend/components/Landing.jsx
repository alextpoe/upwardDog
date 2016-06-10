var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/SessionStore');
var SessionApiUtil = require('../util/SessionApiUtil');
var ProjectsApiUtil = require('../util/ProjectsApiUtil');
var TasksIndex = require('./TasksIndex');

var Landing = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  redirectIfNotLoggedIn: function () {
    if (!SessionStore.isUserLoggedIn()) {
      this.context.router.push("/hello")
    } else if (
      this.props.params.project_id &&
      this.props.params.project_id !== "undefined")
      {
      this.context.router.push(
        "/user/projects/" + this.props.params.project_id
      )
    } else if (SessionStore.currentUser().projects.length > 0){
      this.context.router.push(
        "/user/projects/" + SessionStore.currentUser().projects[0].id
      )
    } else {
      this.context.router.push("/user/projects")
    }
  },

  componentDidMount: function () {
    SessionStore.addListener(this.redirectIfNotLoggedIn)
    SessionApiUtil.fetchCurrentUser();
  },

  logout: function () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <input
          type="submit"
          value="Log Out"
          onClick={ SessionApiUtil.logout } />
      );
    }
  },

  render: function () {
    return (
      <div>
        { this.logout() }
        {this.props.children}
      </div>
    )
  }
});

module.exports = Landing;
