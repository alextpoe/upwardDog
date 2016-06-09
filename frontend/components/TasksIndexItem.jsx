var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../actions/ClientActions');
var TasksStore = require('../stores/TasksStore');


var TasksIndexItem = React.createClass({
  clickHandler: function (event) {
    event.preventDefault();
    
    var id = this.props.task.id;
    var projectId = this.props.task.project_id;

    ClientActions.deleteTask(id, projectId);
  },

  checkOff: function (event) {
    event.preventDefault();
    var task = this.props.task;

    ClientActions.updateTask(
      {
        completed: true
      },
      this.props.task.project_id,
      task.id
    )
  },

  render: function () {
    return (
      <li className="task-list-item">
        <div className="checkmark" onClick={this.checkOff}>
          ✓
        </div>
        <Link to={"/user/projects/" + this.props.task.project_id + "/tasks/" + this.props.task.id + "/edit"}>{this.props.task.title}</Link>
        <button className="delete" type="submit" onClick={this.clickHandler}>Delete</button>
      </li>
    )
  }

});

module.exports = TasksIndexItem;
