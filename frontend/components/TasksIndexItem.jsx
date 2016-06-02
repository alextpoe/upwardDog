var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../actions/ClientActions');


var TasksIndexItem = React.createClass({
  clickHandler: function (event) {
    event.preventDefault();
    ClientActions.deleteTask(this.props.task.id);
  },

  render: function () {
    return (
      <li className="empty">
        {this.props.task.description}
        <button type="submit" onClick={this.clickHandler}>Delete</button>
      </li>
    )
  }

});

module.exports = TasksIndexItem;
