var React = require('react');
var Link = require('react-router').Link;
var OnUnload = require('react-window-mixins').OnUnload;
var TasksIndexItem = require('./TasksIndexItem');
var TasksStore = require('../stores/TasksStore');
var SessionStore = require('../stores/SessionStore');
var ClientActions = require('../actions/ClientActions');


var TasksEdit = React.createClass({
  mixins: [ OnUnload ],
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
  // 
  // onBeforeUnload: function () {
  //   var task = this.state;
  //   ClientActions.updateTask({
  //     task: task
  //   }, this.props.params.id)
  // },

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

  checkOff: function (event) {
    event.preventDefault();

    var task = this.state;
    ClientActions.updateTask(
      {
        completed: true
      },
      this.props.params.project_id,
      this.props.params.id
    )
  },

  onSubmit: function (event) {
    event.preventDefault();
    ClientActions.updateTask(this.state, this.props.params.project_id, this.props.params.id);
  },

  render: function () {
    var checkmark = (<div className="checkmark-edit" onClick={this.checkOff}> ✓ </div>);
    var project;
    if (!this.state.project_id) {
      project = "No Project";
    } else {
      project = this.state.project_id;
    }
    return (
      <ul className="edit-list">
        <li>Project ID:<input value={project} type={this.inputType} onClick={this.projectClick} onChange={this.projectChange}/></li>
        <li className="title">
          {checkmark}
          <input value={this.state.title} onChange={this.titleChange}/>
        </li>
        <li className="description group"><textarea wrap="soft" placeholder="Description" value={ this.state.description } onChange={this.descriptionChange}/></li>
        <button className="update-submit" type="submit" onClick={this.onSubmit}>Submit</button>
      </ul>
    );
  }
});

module.exports = TasksEdit;
