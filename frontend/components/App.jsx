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
        <nav className="top-header">
          <div className="placeholder">placeholder</div>
          <div className="log-in">
            <Link to="/login" onClick={this.clickHandle}>Log In</Link>
            &nbsp;
            or
            &nbsp;
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>
      );
    }
  },

  render: function () {
    return(
      <div className="container">
        { this.header() }
        <div className="pretty">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <footer className="footer">
          Here's more writing that will be filled with some thing clever.
        </footer>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
