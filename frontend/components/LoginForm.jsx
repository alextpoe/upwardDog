var React = require('react');
var SessionStore = require('../stores/SessionStore');

var LoginForm = React.createClass({
  getInitialState: function () {
    return { username: "", password: "" };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.onChange);
  },


  onChange: function () {
    if (SessionStore.isUserLoggedIn()){
      this.context.router.push("/");
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.username}
            onChange={this.usernameChange}>
          </input>

          <input
            type="password"
            value={this.state.password}
            onChange={this.passwordChange}>
          </input>

          <button type="submit">Log In</button>
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
