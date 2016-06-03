var React = require('react');
var Link = require('react-router').Link;
var TasksIndexItem = require('./TasksIndexItem');
var TasksStore = require('../stores/TasksStore');
var SessionStore = require('../stores/SessionStore');
var ClientActions = require('../actions/ClientActions');


var TasksEdit = React.createClass({
  getInitialState: function () {
    var possibleTask = TasksStore.find(this.props.params.id)
    var task = possibleTask ? possibleTask : false
    if (task){
      return {
        title: task.title,
        description: task.description,
        manager_id: task.manager_id,
        assignee_id: task.assignee_id,
        project_id: task.project_id,
        completed: task.completed
      }
    } else {
      return {
        title: "",
        description: "",
        manager_id: "",
        assignee_id: SessionStore.currentUser().id,
        project_id: "",
        completed: false
      }
    }
  },

  componentWillReceiveProps: function (newProps) {
    var possibleTask = TasksStore.find(newProps.params.id)
    var task = possibleTask ? possibleTask : false
    if (task){
      this.setState({
        title: task.title,
        description: task.description,
        manager_id: task.manager_id,
        assignee_id: task.assignee_id,
        project_id: task.project_id,
        completed: task.completed
      })
    }
  },

  titleChange: function (event) {
    this.setState({ title: event.target.value})
  },

  descriptionChange: function (event) {
    this.setState({ description: event.target.value })
  },

  managerChange: function (event) {
    this.setState({ manager_id: event.target.value })
  },

  assigneeChange: function (event) {
    this.setState({ assignee_id: event.target.value })
  },

  projectChange: function (event) {
    this.setState({ project_id: event.target.value })
  },

  projectClick: function (event) {
    event.preventDefault();
    this.projectClicked = true;
    this.inputType = "button";
    // if (this.projectClicked) {
    //   this.inputType = "text";
    // }
  },

  onSubmit: function (event) {
    event.preventDefault();
    ClientActions.updateTask(this.state, this.props.params.id);
  },

  render: function () {
    var project;
    if (!this.state.project_id) {
      project = "No Project";
    } else {
      project = this.state.project_id;
    }
    return (
      <ul>
        <li>Title: <input value={this.state.title} onChange={this.titleChange}/></li>
        <li>Description: <input value={this.state.description} onChange={this.descriptionChange}/></li>
        <li>Manager ID: <input value={this.state.manager_id} onChange={this.managerChange}/></li>
        <li>Assignee ID: <input value={this.state.assignee_id} onChange={this.assigneeChange}/></li>
        <li><input value={project} type={this.inputType} onClick={this.projectClick} onChange={this.projectChange}/></li>
        <li><button type="submit" onClick={this.onSubmit}>Submit</button></li>
      </ul>
    );
  }
});

module.exports = TasksEdit;
