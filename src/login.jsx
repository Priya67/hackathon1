import React from 'react';
import LinkedinSDK from 'react-linkedin-sdk';
import axios from 'axios';
import Dashboard from './dashboard';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showDashboard: false,
      errors: true,
      id: null,
      pwd: null
    };
    this.login = this.login.bind(this);
    this.updateId = this.updateId.bind(this);
    this.updatePwd = this.updatePwd.bind(this);
    this.authorizeUser = this.authorizeUser.bind(this);
  }

  authorizeUser() {
    var xhr = new XMLHttpRequest();
    const options = {
      clientID: '7800kctckr15aw'
    }
    xhr.open("GET", 'https://www.linkedin.com/oauth/v2/authorization', true);
    console.log('data', xhr.send());
  }

  login() {
    console.log('setting state');
    if (this.state.id && this.state.pwd) {
      this.setState({ showDashboard: true });
      // this.props.loginUser();
    }
  }

  updateId(field) {
    this.setState({ id: field});
  }

  updatePwd(field) {
    this.setState({ pwd: field});
  }

  render(){
    return (
      this.state.id && this.state.pwd && this.state.showDashboard
      ? <Dashboard />
      :
        <div>
          <h2>Network Challenge</h2>
          <form action="/action_page.php">
          <div className="imgcontainer">
            <img src="https://raw.githubusercontent.com/Priya67/hackathon1/master/user.png" />
          </div>

          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required
              onChange={this.updateId}
            />

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required
              onChange={this.updatePwd}
            />

            <button onClick={this.login}>Login</button>
            {this.state.showDashboard && this.state.id && this.state.pwd ? <Dashboard /> : <div />}
            <label>
              <input
                type="checkbox"
                checked="checked"
                name="remember"
                placeholder="Remember me"
              />
            </label>
          </div>

          <div className="container">
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
        <button onClick={this.authorizeUser}>Authorize</button>
      </div>
    );
  }
}

export default Login;
