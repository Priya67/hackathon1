import React from 'react';
import LinkedinSDK from 'react-linkedin-sdk';
import axios from 'axios';

class Login extends React.Component{
  constructor(props){
    super(props);
  }

  authorizeUser() {
    var xhr = new XMLHttpRequest();
    const options = {
      clientID: '7800kctckr15aw'
    }
    xhr.open("GET", 'https://www.linkedin.com/oauth/v2/authorization', true);
    console.log('data', xhr.send());
  }

  responseLinkedin(response) {
    console.log(response)
  }

  render(){
    return (
      <div>
        <h2>Network Challenge</h2>
        <form action="/action_page.php">
          <div className="imgcontainer">
            <img src="https://raw.githubusercontent.com/Priya67/hackathon1/master/user.png" />
          </div>

          <div className="container">
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button>Login</button>
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
