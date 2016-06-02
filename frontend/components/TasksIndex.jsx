var React = require('react');
var Link = require('react-router').Link;
var TasksIndexItem = require('./TasksIndexItem');
var TasksStore = require('../stores/TasksStore');
var ClientActions = require('../actions/ClientActions');

var TasksIndex = React.createClass({

  getInitialState: function () {
    return { tasks: TasksStore.all() };
  },

  onChange: function () {
    this.setState({ tasks: TasksStore.all() })
  },

  componentDidMount: function () {
    this.tasksListener = TasksStore.addListener(this.onChange)
    ClientActions.receiveAllTasks();
  },




  render: function () {
    var tasks = this.state.tasks;

    return (
      <div>
        <h1>Tasks</h1>
        <ul>
          {
            tasks.map(function (task) {
              return <TasksIndexItem task={task} key={task.id} />;
            })
          }
        </ul>
      </div>
    )
  }
});

module.exports = TasksIndex;
