var React = require('react');
var Link = require('react-router').Link;
var TasksIndexItem = require('./TasksIndexItem');
var TasksStore = require('../stores/TasksStore');
var ProjectsStore = require('../stores/ProjectsStore');
var ClientActions = require('../actions/ClientActions');
var TasksForm = require('./TasksForm');
var SessionStore = require('../stores/SessionStore');
var SessionApiUtil = require('../util/SessionApiUtil');
var ProjectsApiUtil = require('../util/ProjectsApiUtil');
var TasksCreate = require('./TasksCreate');
var TasksEdit = require('./TasksEdit');

var TasksIndex = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return { tasks: "",
             edited: false };
  },

  onChange: function () {
    ProjectsApiUtil.getProject(this.props.params.project_id)

    var possibleProject = ProjectsStore.find(this.props.project.id)
    var project = possibleProject ? possibleProject : false
    if (project) {
      this.setState({
        tasks: project.tasks,
        edited: false
      })
    }


    // this.context.router.push("/user/projects/" + this.props.project + "tasks")
  },

  componentDidMount: function () {
    this.tasksListener = TasksStore.addListener(this.onChange)
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this))
    ClientActions.receiveAllTasks(this.props.params.project_id)
    SessionApiUtil.fetchCurrentUser()
  },

  componentWillReceiveProps: function (newProps) {
    this.setState({ tasks: newProps.project.tasks})
  },

  componentWillUnmount: function () {
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
    this.context.router.push("/user/projects/" + this.props.params.project_id + "tasks/new")
  },

  clicked: function () {
    this.setState({ edited: true })
  },


  unClicked: function () {
    this.setState({ edited: false })
  },

  render: function () {
    var tasks = this.state.tasks ? this.state.tasks : [];
    var taskItem = <div></div>;

    // var children = React.Children.map(this.props.children, function (child) {
    //   return React.cloneElement(child, {
    //     user: SessionStore.currentUser()
    //   })
    // });

    if (tasks) {
      taskItem = (

        tasks.map(function (task) {
          if (!task.completed) {
            return <TasksIndexItem task={task} key={task.id} />;
          }
        })
      )
    }

    var user = SessionStore.currentUser().username ? SessionStore.currentUser().username : [];
    var user = user.slice(0, 2);
    // debugger


    if (this.state.edited && this.props.children) {

      return (
        <div className="task-container group">
          <div className="task-main-clicked">
            <ul className="task-list" onClick={this.clicked}>
              {
                taskItem
              }
            </ul>
            <div onClick={this.unClicked}>
              <TasksForm project={this.props.project}/>
            </div>
          </div>
          <div className="task-form">
            <nav className="edit-header">
              <span className="user-logo">
                { user }
              </span>
            </nav>
            {this.props.children}
          </div>
        </div>
      )
    } else {
      return (
        <div className="task-container group">
          <div className="task-main-unclicked">
            <ul className="task-list" onClick={this.clicked}>
              {
                taskItem
              }
            </ul>
            <div>
              <TasksForm project={this.props.project}/>
            </div>
          </div>
        </div>
      )
    }
  }
});

module.exports = TasksIndex;
