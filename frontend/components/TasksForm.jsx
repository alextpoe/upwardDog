var React = require('react');
var Link = require('react-router').Link;
var TasksIndexItem = require('./TasksIndexItem');
var TasksStore = require('../stores/TasksStore');
var SessionStore = require('../stores/SessionStore');
var ClientActions = require('../actions/ClientActions');


var TasksForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      title: "",
      description: "",
      manager_id: "",
      assignee_id: SessionStore.currentUser().id,
      project_id: "",
      completed: false
    }
  },

  keyHandler: function (event) {
    this.setState({ title: event.target.value })
  },

  clickHandler: function (event) {
    event.preventDefault();
    this.context.router.push("/user/tasks/new");
  },

  blurHandler: function (event) {
    debugger
    ClientActions.updateTask(this.state)
  },

  render: function () {
    return (
      <li>
        <input
          value={this.state.title}
          onClick={this.clickHandler}
          onChange={this.keyHandler}
          />
      </li>
    )
  }
});

module.exports = TasksForm;
