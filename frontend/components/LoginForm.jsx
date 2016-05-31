var React = require('react');
var SessionStore = require('../stores/SessionStore');
var SessionApiUtil = require('../util/SessionApiUtil');

var LoginForm = React.createClass({
  getInitialState: function () {
    return { username: "", password: "" };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  redirectIfLoggedIn: function () {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  onSubmit: function(event) {
    event.preventDefault();

    var loginData = {
      username: this.state.username,
      password: this.state.password
    };

    if (this.props.location.pathname ==="/login") {
      SessionApiUtil.login(loginData);
    } else {
      UserApiUtil.signup(loginData);
    }
  },

  usernameChange: function (event) {
    var newUsername = event.target.value;
    this.setState({username: newUsername});
  },

  passwordChange: function (event) {
    var newPassword = event.target.value;
    this.setState({password: newPassword});
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.usernameChange}/>

          <input
            type="password"
            value={this.state.password}
            onChange={this.passwordChange}/>

          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
