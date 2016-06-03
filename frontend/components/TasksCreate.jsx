var React = require('react');
var Link = require('react-router').Link;
var TasksIndexItem = require('./TasksIndexItem');
var TasksStore = require('../stores/TasksStore');
var SessionStore = require('../stores/SessionStore');
var ClientActions = require('../actions/ClientActions');
var TasksForm = require('./TasksForm');


var TasksCreate = React.createClass({
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

  titleChange: function (event) {
    this.setState({ title: event.target.value})
  },

  descriptionChange: function (event) {
    this.setState({ description: event.target.value })
  },

  onSubmit: function (event) {
    event.preventDefault();
    ClientActions.createTask(this.state);
  },

  render: function () {
    return (
      <ul>
        <li>Title: <input value={this.state.title} onChange={this.titleChange}/></li>
        <li>Description: <input value={this.state.description} onChange={this.descriptionChange}/></li>
        <li><button type="submit" onClick={this.onSubmit}>Submit</button></li>
      </ul>
    );
  }
});

module.exports = TasksCreate;
