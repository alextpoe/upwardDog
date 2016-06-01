var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/SessionStore');
var SessionApiUtil = require('../util/SessionApiUtil');

var App = React.createClass({
  componentDidMount: function () {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  header: function () {
    if (SessionStore.isUserLoggedIn()) {
      debugger
      return (
        <input
          type="submit"
          value="Log Out"
          onClick={ SessionApiUtil.logout } />
      );
    } else if (["/login", "signup"].indexOf(this.props.location.pathname) === -1) {
      return (
        <nav>
          <Link to="/login">Log In</Link>
          or
          <Link to="/signup">Sign Up</Link>
        </nav>
      );
    }
  },

  render: function () {
    return(
      <div>
        {this.header()}
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
