import React, { Component } from "react";

class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.username}
            id="username"
            onChange={this.handleChanges}
            type="text"
            placeholder="Username please!"
          />
          <input
            value={this.state.password}
            id="password"
            onChange={this.handleChanges}
            type="password"
            placeholder="Password"
          />
          <button type="submit" onClick={this.submitCreds}>Log In</button>
        </form>
      </div>
    );
  }
  handleChanges = event => {
      const { id, value } = event.target;
      this.setState({ [id]: value })
  };
  submitCreds = event => {

  }
}

export default Login;
