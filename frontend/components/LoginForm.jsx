var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/SessionStore');
var ErrorStore = require('../stores/ErrorStore');
var SessionApiUtil = require('../util/SessionApiUtil');
var UserApiUtil = require('../util/UserApiUtil');
var ProjectsApiUtil = require('../util/ProjectsApiUtil');

var LoginForm = React.createClass({
  getInitialState: function () {
    if (this.props.route.path === "/hello/login/guest") {
      return { username: "Guest", password: "password" }
    }
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
      this.context.router.push("/user/projects/"+ SessionStore.currentUser().projects[0].id);
    }
  },

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors(this.formType());
    if (!errors[field]) { return; }

    var messages = errors[field].map(function (errorMsg, i) {
      return <li key={ i }>{ errorMsg }</li>;
    });

    if (field === "base") {
      return <ul className="errors">{ messages }</ul>
    } else {
      return <ul className="errors-specific">{ messages }</ul>
    }
  },

  bgClick: function (){
    this.context.router.push("/hello");
  },

  onSubmit: function(event) {
    event.preventDefault();

    var loginData = {
      username: this.state.username,
      password: this.state.password
    };

    if (this.props.location.pathname ==="/hello/login" ||
        this.props.location.pathname ==="/hello/login/guest") {
      SessionApiUtil.login(loginData);
    } else {
      UserApiUtil.signup(
        loginData
      );
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
    return this.props.location.pathname.slice(7);
  },

  render: function () {
    var headerLang;
    if (this.props.route.path === "/hello/login") {
      headerLang = "Log In"
    } else {
      headerLang = "Sign Up"
    }

    return (
      <div>
        <div className="login" onClick={this.bgClick}>
        </div>

        <form className="login-form" onSubmit={this.onSubmit}>
          <h1 className="form-heading">{headerLang}</h1>
          { this.fieldErrors("base") }
          <div className="form-fields">
            <div>Or</div>
            <a href="/auth/twitter"><img className="twitter" src={window.twitter_url} /></a>
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

          <button className="log-submit" type="submit">{headerLang}</button>
        </form>

      </div>
    );
  }
});

module.exports = LoginForm;
