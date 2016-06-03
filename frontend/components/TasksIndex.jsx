var React = require('react');
var Link = require('react-router').Link;
var TasksIndexItem = require('./TasksIndexItem');
var TasksStore = require('../stores/TasksStore');
var ClientActions = require('../actions/ClientActions');
var TasksForm = require('./TasksForm');
var SessionStore = require('../stores/SessionStore');
var SessionApiUtil = require('../util/SessionApiUtil');
var TasksCreate = require('./TasksCreate');
var TasksEdit = require('./TasksEdit');

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
  //
  // componentWillReceiveProps: function () {
  //   debugger
  // },

  newTask: function () {
    if (["new"].indexOf(this.props.location.pathname) !== -1) {
      return (
        <TasksCreate/>
      )
    }
  },

  logout: function () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <input
          type="submit"
          value="Log Out"
          onClick={ SessionApiUtil.logout } />
      );
    }
  },


  render: function () {
    var tasks = this.state.tasks;
    var editTask = '';
    if (this.props.location.pathname ==="/user/tasks/new"){
      editTask = <TasksCreate/>;
    } else if (this.props.location.pathname ==="/user/tasks/" + this.props.params.id + "/edit"){
      editTask = <TasksEdit id={this.props.params.id}/>
    }

    return (
      <div className="whole-page">
        <div className="sidebar">
          Your Name Here
        </div>
        <div className="upward-dog-main">
          <nav className="task-header">
            {this.logout()}
            <h1>Tasks</h1>
          </nav>
          <div className="task-container group">
            <div className="task-main">
              <ul className="task-list">
                {
                  tasks.map(function (task) {
                    return <TasksIndexItem task={task} key={task.id} />;
                  })
                }
                <TasksForm/>
              </ul>
            </div>
            <div className="task-form">
              {editTask}
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
});

module.exports = TasksIndex;
