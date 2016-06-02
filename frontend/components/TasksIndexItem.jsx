var React = require('react');
var Link = require('react-router').Link;
var TasksIndexItem = require('./TasksIndexItem');


var TasksIndexItem = React.createClass({

  render: function () {
    return (
      <li>
        {this.props.task.description}
      </li>
    )
  }

});

module.exports = TasksIndexItem;
