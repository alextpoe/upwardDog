var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../actions/ClientActions');
var ProjectsStore = require('../stores/TasksStore');


var ProjectsIndexItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return({ hovered: false })
  },

  mouseOver: function (event) {
    event.preventDefault()
    this.setState({ hovered: true })
  },

  mouseLeave: function (event) {
    event.preventDefault()
    this.setState({ hovered: false })
  },

  deleteClick: function (event) {
    event.preventDefault()
    ClientActions.deleteProject(this.props.project.id)
  },

  editClick: function (event) {
    event.preventDefault()
    this.context.router.push("/user/projects/" + this.props.project.id + "/edit")
  },

  render: function () {
    if (this.state.hovered) {
      return (
        <li className="project-list-item" onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>
          <Link to={"/user/projects/" + this.props.project.id } >{this.props.project.title}</Link>
          <br/>
          <button type="submit" onClick={this.deleteClick}>Delete Project</button>
          <button type="submit" onClick={this.editClick}>Edit Project</button>
        </li>
      )
    } else {
      return (
        <li className="project-list-item" onMouseOver={this.mouseOver}>
          <Link to={"/user/projects/" + this.props.project.id } >{this.props.project.title}</Link>
        </li>
      )
    }
  }

});

module.exports = ProjectsIndexItem;
