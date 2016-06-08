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
        <div className="login" onClick={this.bgClick}>
        </div>

        <form className="login-form" onSubmit={this.onSubmit}>
          <h1 className="form-heading">Create A New Project</h1>
          <div className="form-fields">
            <label>
              <span className="field">Title:</span>
              <input
                type="text"
                className="username"
                value={this.state.title}
                onChange={this.titleChange}/>
            </label>

          <br />

            <label >
              <span className="field">
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

          <button className="log-submit" type="submit">Create Project</button>
        </form>

      </div>
    );
  }
});

module.exports = NewProjectsForm;
