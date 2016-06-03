var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/SessionStore');
var SessionApiUtil = require('../util/SessionApiUtil');
var TasksIndex = require('./TasksIndex');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount: function () {
    this.sessionListener.remove()
  },

  clickHandle: function (event){
    this.context.router.push("/hello/login")
  },

  header: function () {

    // } else
    if (["login", "signup"].indexOf(this.props.location.pathname) === -1) {
      return (
        <nav className="top-header">
          <div className="placeholder">
            <img src={window.logo_url} />
          </div>
          <div className="log-in">
            <Link className="login-link" to="/hello/login" onClick={this.clickHandle}>Log In</Link>
            <Link className="signup" to="/hello/signup">Get Started for FREE</Link>
            <Link className="signup" to="/hello/login/guest">Sign In As Guest</Link>
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
          <div className="below-header">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
        </div>
        <footer className="footer">
          Here's more writing that will be filled with something clever.
        </footer>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
