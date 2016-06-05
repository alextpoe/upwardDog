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
    return { tasks: TasksStore.all(),
             edited: false };
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

  newTask: function (event) {
    event.preventDefault();
    this.context.router.push("/user/tasks/new")
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

  clicked: function () {
    this.setState({ edited: true })
  },


  unClicked: function () {
    this.setState({ edited: false })
  },

  render: function () {
    var tasks = this.state.tasks;
    var incompleteTasks = tasks.filter(function (task) {
      return !task.completed
    });

    // var editTask = '';
    // if (this.props.location.pathname ==="/user/tasks/new"){
    //   editTask = <TasksCreate/>;
    // } else if (this.props.location.pathname ==="/user/tasks/" + this.props.params.id + "/edit"){
    //   editTask = <TasksEdit id={this.props.params.id}/>
    // }

    if (this.state.edited && this.props.children) {

      return (
        <div className="whole-page">
          <div className="sidebar">
            <img src={window.logo_url} />
          </div>
          <div className="upward-dog-main">
            <nav className="task-header">
              {this.logout()}
              <h1>Tasks</h1>
            </nav>
            <div className="task-container group">
              <div className="task-main">
                <ul className="task-list" onClick={this.clicked}>
                  {
                    incompleteTasks.map(function (task) {
                      return <TasksIndexItem task={task} key={task.id} />;
                    })
                  }
                </ul>
                <div onClick={this.unClicked}>
                  <TasksForm/>
                </div>
              </div>
              <div className="task-form">
                {this.props.children}
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="whole-page">
          <div className="sidebar">
            <img src={window.logo_url} />
          </div>
          <div className="upward-dog-main">
            <nav className="task-header">
              {this.logout()}
              <h1>Tasks</h1>
            </nav>
            <div className="task-container group">
              <div className="task-main">
                <ul className="task-list" onClick={this.clicked}>
                  {
                    incompleteTasks.map(function (task) {
                      return <TasksIndexItem task={task} key={task.id} />;
                    })
                  }
                </ul>
                <div>
                  <TasksForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
});

module.exports = TasksIndex;
