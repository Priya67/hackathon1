import React from 'react';
import Login from './login';
import Dashboard from './dashboard';

class Home extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        loggedIn: false
      };
    }

  loginUser() {
    this.setState({ loggedIn: true });
  }

  render() {
    console.log('here', this.state);
    return (
      !this.state.loggedIn ? <Login loginUser={this.loginUser} /> : <Dashboard />
    );
  }
}

export default Home;
