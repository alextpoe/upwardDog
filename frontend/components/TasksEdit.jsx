var React = require('react');
var Link = require('react-router').Link;
var TasksIndexItem = require('./TasksIndexItem');
var TasksStore = require('../stores/TasksStore');
var SessionStore = require('../stores/SessionStore');


var TasksEdit = React.createClass({
  getInitialState: function () {
    return {
      title: "",
      description: "",
      manager_id: "",
      assignee_id: SessionStore.currentUser().id,
      project_id: "",
      completed: false
    }
  },

  render: function () {
    return(
      <ul>
        <li>New Task: <input value={this.state.title} /></li>
        <li>Description: <input value={this.state.description}/></li>
      </ul>
    )
  }
});

module.exports = TasksEdit;
