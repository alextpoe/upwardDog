var React = require('react');
var Link = require('react-router').Link;
var TasksIndexItem = require('./TasksIndexItem');
var TasksStore = require('../stores/TasksStore');
var ClientActions = require('../actions/ClientActions');
var TasksForm = require('./TasksForm');
var SessionStore = require('../stores/SessionStore');
var SessionApiUtil = require('../util/SessionApiUtil');
var TasksCreate = require('./TasksCreate');

var TasksIndex = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return { tasks: TasksStore.all() };
  },

  onChange: function () {
    this.setState({ tasks: TasksStore.all() })
    this.context.router.push("/user/tasks")
  },

  componentDidMount: function () {
    this.tasksListener = TasksStore.addListener(this.onChange)
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this))
    SessionApiUtil.fetchCurrentUser();
    ClientActions.receiveAllTasks()
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
    this.tasksListener.remove();
  },

  // clickHandler: function (event) {
  //   if (event.target.if === "") {
  //     this.context.router.push("/user/tasks/new")
  //   } else {
  //     this.context.router.push("/user/tasks/" + event.target.id + "edit")
  //   }
  // },

  newTask: function () {
    if (["new"].indexOf(this.props.location.pathname) !== -1) {
      return (
        <TasksCreate/>
      )
    }
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
          <TasksForm/>
          {this.newTask()}
        </ul>
        {this.props.children}
      </div>
    )
  }
});

module.exports = TasksIndex;
