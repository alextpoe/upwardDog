var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/SessionStore');
var TasksIndex = require('./TasksIndex');

var Landing = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    if (!SessionStore.isUserLoggedIn()) {
      this.context.router.push("/hello")
    } else {
      this.context.router.push("/user/tasks")
    }
  },

  render: function () {

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Landing;
