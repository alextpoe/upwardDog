var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../actions/ClientActions');
var ProjectsStore = require('../stores/TasksStore');


var ProjectsIndexItem = React.createClass({

  render: function () {
    return (
      <li className="project-list-item">
        <Link to={"/user/projects/" + this.props.project.id } >{this.props.project.title}</Link>
      </li>
    )
  }

});

module.exports = ProjectsIndexItem;
