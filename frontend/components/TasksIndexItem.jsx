var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../actions/ClientActions');
var TasksStore = require('../stores/TasksStore');


var TasksIndexItem = React.createClass({
  clickHandler: function (event) {
    event.preventDefault();
    ClientActions.deleteTask(this.props.task.id);
  },

  checkOff: function (event) {
    event.preventDefault();
    var task = this.props.task;

    ClientActions.updateTask(
      {
        title: task.title,
        description: task.description,
        manager_id: task.manager_id,
        assignee_id: task.assignee_id,
        project_id: task.project_id,
        completed: true
      },
      task.id
    )
  },

  render: function () {
    return (
      <li className="task-list-item">
        <div className="checkmark" onClick={this.checkOff}>
          ✓
        </div>
        <Link to={"/user/tasks/" + this.props.task.id + "/edit"}>{this.props.task.title}</Link>
        <button className="delete" type="submit" onClick={this.clickHandler}>Delete</button>
      </li>
    )
  }

});

module.exports = TasksIndexItem;
