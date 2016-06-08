var React = require('react');
var Link = require('react-router').Link;
var ProjectsApiUtil = require('../util/ProjectsApiUtil');

var NewProjectsForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return { title: "", description: "" };
  },

  bgClick: function (){
    this.context.router.push("/user/projects/" + this.props.params.project_id);
  },

  onSubmit: function(event) {
    var that = this;
    event.preventDefault();

    var projectData = {
      title: this.state.title,
      description: this.state.description
    };

    ProjectsApiUtil.createProject(projectData)
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
        <form onSubmit={this.onSubmit}>
          <h1 >Create A New Project</h1>
          <div >
            <label>
              <span>Title:</span>
              <input
                type="text"
                className="username"
                value={this.state.title}
                onChange={this.titleChange}/>
            </label>

          <br />

            <label >
              <span >
                Description:
              </span>

              <input
                className="password"
                type="text"
                value={this.state.description}
                onChange={this.descriptionChange}/>
            </label>
          </div>
        <br />

          <button type="submit">Create Project</button>
        </form>

      </div>
    );
  }
});

module.exports = NewProjectsForm;
