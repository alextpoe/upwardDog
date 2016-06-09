var React = require('react');
var Link = require('react-router').Link;
var ProjectsApiUtil = require('../util/ProjectsApiUtil');
var ProjectsStore = require('../stores/ProjectsStore');

var EditProjectsForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    var possibleTask = ProjectsStore.find(this.props.params.id)
    var task = possibleTask ? possibleTask : false
    if (task){
      return {
        title: task.title,
        description: task.description,
      }
    } else {
      return {
        title: "",
        description: "",
      }
    }
  },


  // bgClick: function (){
  //   this.context.router.push("/user/projects/" + this.props.params.project_id);
  // },

  onSubmit: function(event) {
    var that = this;
    event.preventDefault();

    var projectData = {
      title: this.state.title,
      description: this.state.description
    };

    ProjectsApiUtil.editProject(projectData, this.props.params.id)
  },

  titleChange: function (event) {
    var newTitle = event.target.value;
    this.setState({title: newTitle});
  },

  descriptionChange: function (event) {
    var newDescription = event.target.value;
    this.setState({description: newDescription});
  },

  render: function () {
    return (
      <div>
        <div className="login"></div>
        <form className="projects-form" onSubmit={this.onSubmit}>
          <h1 >Edit Project</h1>
          <div className="projects-form-fields">
            <label className="projects-fields">
              <span className="projects-form-span">Title:</span>
              <input
                className="projects-form-input"
                type="text"
                value={this.state.title}
                onChange={this.titleChange}/>
            </label>

          <br />

            <label className="projects-fields">
              <span className="projects-form-span">
                Description:
              </span>

              <input
                className="projects-form-input"
                placeholder="Enter Description Here"
                type="text"
                value={this.state.description}
                onChange={this.descriptionChange}/>
            </label>
          </div>
        <br />

          <button className="projects-form-submit" type="submit">Edit</button>
        </form>

      </div>
    );
  }
});

module.exports = EditProjectsForm;
