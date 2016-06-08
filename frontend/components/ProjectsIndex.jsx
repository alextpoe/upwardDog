var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../actions/ClientActions');
var SessionStore = require('../stores/SessionStore');
var SessionApiUtil = require('../util/SessionApiUtil');
var ProjectsIndexItem = require('./ProjectsIndexItem');
var ProjectsStore = require('../stores/ProjectsStore');
var TasksIndex = require('./TasksIndex');
var TasksStore = require('../stores/TasksStore');
var NewProjectsForm = require('./NewProjectsForm');


var ProjectsIndex = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return { projects: ProjectsStore.all(), clicked: false };
  },

  onChange: function () {

    var userProjects = SessionStore.currentUser().projects
    var projects = ProjectsStore.all()
    if (userProjects) {
      var filteredProjects = projects.filter( function(project) {
        userProjects.indexOf(project) >= 0
      })
      this.setState({ projects: filteredProjects })
    } else {
      this.setState({ projects: projects })
    }
    // this.context.router.push("/user/projects")
  },


  componentDidMount: function () {
    this.projectsListener = ProjectsStore.addListener(this.onChange)
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this), this.onChange)
    ClientActions.fetchAllProjects();
  },


  componentWillUnmount: function () {
    this.projectsListener.remove();
  },

  newProject: function (event) {
    event.preventDefault();
    this.setState({ clicked: true })
  },



  render: function () {
    var projects = SessionStore.currentUser().projects;
    var item = <div></div>;
    if (projects && projects.length > 0) {
      item = (
        projects.map(function (project) {
          return <ProjectsIndexItem project={ project } key={ project.id }/>
        })
      )
    }

    var user = SessionStore.currentUser().username ? SessionStore.currentUser().username : [];
    var user = user.slice(0, 2);

    var children = React.Children.map(this.props.children, function (child, i) {
      if ( i === 0 ){return React.cloneElement(child, {
        user: SessionStore.currentUser()
      })}
    });

    if (this.state.clicked) {
      return (
      <div className="whole-page group">
        <NewProjectsForm>
        <div className="sidebar">
          <img src={window.landing_logo_url} />
          <button onClick={this.newProject} className="signup">+</button>
          <ul>
            {
              item
            }
          </ul>
        </div>
        <div className="upward-dog-main">
          { children }
        </div>
      </NewProjectsForm>
      </div>
    )
  } else {
      return (
        <div className="whole-page group">
          <div className="sidebar">
            <img src={window.landing_logo_url} />
            <button onClick={this.newProject} className="signup">+</button>
            <ul>
              {
                item
              }
            </ul>
          </div>
          <div className="upward-dog-main">
            { children }
          </div>
        </div>
      )
    }
  }
});

module.exports = ProjectsIndex;
