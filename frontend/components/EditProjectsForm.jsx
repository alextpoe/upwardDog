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
        <form onSubmit={this.onSubmit}>
          <h1 >Edit Project</h1>
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

          <button type="submit">Edit</button>
        </form>

      </div>
    );
  }
});

module.exports = EditProjectsForm;
