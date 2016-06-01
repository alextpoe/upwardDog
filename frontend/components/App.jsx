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
          <Link to="/login">Log In</Link>
          &nbsp;
          or
          &nbsp;
          <Link to="/signup">Sign Up</Link>
        </nav>
      );
    }
  },

  render: function () {
    return(
      <div className="container">
        <header className="page-header">

          { this.header() }
        </header>
          <div className="front">
            <h1 className="land">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              <p className="pretty">
                Lorem ipsum.
              </p>
            </h1>
          </div>
        <footer className="page-header"/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
