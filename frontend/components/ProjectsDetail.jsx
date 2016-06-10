var React = require('react');
var Link = require('react-router').Link;
var TasksIndex = require('./TasksIndex');
var ProjectsIndex = require('./ProjectsIndex');
var ProjectsStore = require('../stores/ProjectsStore');
var ClientActions = require('../actions/ClientActions');
var SessionStore = require('../stores/SessionStore');
var SessionApiUtil = require('../util/SessionApiUtil');


var ProjectsDetail = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      title: "",
      description: ""
    }
  },

  onChange: function () {
    // this.user = SessionStore.currentUser();
    // var project = this.props.user.projects[0]
    //
    // this.setState({
    //   title: project.title,
    //   description: project.description,
    //   tasks: project.tasks,
    //   id: project.project_id
    // })
    // var possibleProject = ProjectsStore.find(this.props.params.project_id)
    //
    // var project = possibleProject ? possibleProject : null
    // if (project){
    //   this.setState({
    //     title: project.title,
    //     description: project.description,
    //   })
    // } else {
    //   this.setState({
    //     title: "",
    //     description: ""
    //   })
    // }
    // debugger
  },


  componentDidMount: function () {
    this.projectsListener = ProjectsStore.addListener(this.onChange)
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this))
    SessionApiUtil.fetchCurrentUser();
  },

  componentWillReceiveProps: function (newProps) {
    var possibleProject = ProjectsStore.find(newProps.params.project_id)
    var project = possibleProject ? possibleProject : false
    if (project){
      this.setState({
        title: project.title,
        description: project.description,
        tasks: project.tasks,
        id: project.id
      })
    }
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
    this.projectsListener.remove();
  },

  logout: function () {
    if (SessionStore.isUserLoggedIn()) {
      return (
        <input
          className="logout"
          type="submit"
          value="Log Out"
          onClick={ SessionApiUtil.logout } />
      );
    }
  },

  render: function () {
    var project = this.state;
    var projectHeader = project.title

    var children = React.Children.map(this.props.children, function (child) {
      return React.cloneElement(child, {
        project: project
      })
    });

    var user = SessionStore.currentUser().username ? SessionStore.currentUser().username : [];
    var user = user.slice(0, 2);

    return (
      <div>
        <div className="task-header">
          {this.logout()}
          <h1>
            <span className="user-logo-header">
              { user }
            </span>
            { projectHeader }
          </h1>
        </div>
        { children }
      </div>
    )
  }
});

module.exports = ProjectsDetail;
