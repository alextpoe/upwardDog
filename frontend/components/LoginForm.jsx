var React = require('react');
var SessionStore = require('../stores/SessionStore');
var ErrorStore = require('../stores/ErrorStore');
var SessionApiUtil = require('../util/SessionApiUtil');
var UserApiUtil = require('../util/UserApiUtil');

var LoginForm = React.createClass({
  getInitialState: function () {
    return { username: "", password: "" };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },


  componentDidMount: function () {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn: function () {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
    }
  },

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors(this.formType());
    if (!errors[field]) { return; }

    var messages = errors[field].map(function (errorMsg, i) {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>
  },

  bgClick: function (){
    this.context.router.push("/");
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

  formType: function () {
    return this.props.location.pathname.slice(1);
  },

  render: function () {
    return (
      <div>
        <div className="login" onClick={this.bgClick}>
        </div>

        <form className="login-form" onSubmit={this.onSubmit}>
          <h1 className="form-heading">Log In</h1>
          { this.fieldErrors("base") }
          <div className="form-fields">
            <label>
              <span className="field">Username:</span>

              { this.fieldErrors("username") }

              <input
                type="text"
                className="username"
                value={this.state.username}
                onChange={this.usernameChange}/>
            </label>

          <br />

            <label >
              <span className="field">
                Password:
              </span>

              { this.fieldErrors("password") }

              <input
                className="password"
                type="password"
                value={this.state.password}
                onChange={this.passwordChange}/>
            </label>
          </div>
        <br />

          <button className="log-submit" type="submit">{this.formType()}</button>
        </form>

      </div>
    );
  }
});

module.exports = LoginForm;
