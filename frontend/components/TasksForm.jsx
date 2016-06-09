var React = require('react');
var Link = require('react-router').Link;
var TasksIndexItem = require('./TasksIndexItem');
var TasksStore = require('../stores/TasksStore');
var SessionStore = require('../stores/SessionStore');
var ClientActions = require('../actions/ClientActions');
var ProjectsApiUtil = require('../util/ProjectsApiUtil');


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

  componentWillReceiveProps: function (newProps) {
    this.setState({ project_id: newProps.project.id})
  },

  keyHandler: function (event) {
    this.setState({ title: event.target.value })
  },

  blurHandler: function (event) {
    event.preventDefault();
    if ( event.target.value.length > 1 ) {

      ClientActions.createTask(
        {
          title: this.state.title,
          description: "",
          manager_id: "",
          assignee_id: SessionStore.currentUser().id,
          project_id: this.state.project_id,
          completed: false
        }
      );
      this.setState({title: ""})
    }
  },

  enterHandler: function (event) {
    if(event.keyCode == 13){
      ClientActions.createTask(
        {
          title: this.state.title,
          description: "",
          manager_id: "",
          assignee_id: SessionStore.currentUser().id,
          project_id: this.state.project_id,
          completed: false
        }
      );
      this.setState({title: ""})
    }
  },

  render: function () {
    return (
      <li className="new-task-list">
        <input
          className="new-task"
          ref="form"
          placeholder="New Task Here: [Enter] to submit!"
          value={this.state.title}
          onChange={this.keyHandler}
          onBlur={this.blurHandler}
          onFocus={this.focusHandler}
          onKeyDown={this.enterHandler}
          />
      </li>
    )
  }
});

module.exports = TasksForm;
