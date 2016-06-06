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

  // clickHandler: function (event) {
  //   event.preventDefault();
  //
  //   // debugger
  //   this.context.router.push("/user/tasks/new");
  // },

  blurHandler: function (event) {
    event.preventDefault();
    if ( event.target.value.length > 1 ) {
      ClientActions.createTask(
        {
          title: this.state.title,
          description: "",
          manager_id: "",
          assignee_id: SessionStore.currentUser().id,
          project_id: "",
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
          project_id: "",
          completed: false
        }
      );
      this.setState({title: ""})
    }
  },

  // focusHandler: function () {
  //   this.context.router.push("/user/tasks")
  //   this.refs.form.focus();
  // },

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
