import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: ""
    
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
          <button type="submit" onClick={this.submitCreds}>
            Log In
          </button>
        </form>
      </div>
    );
  }

  //functions to handle changes and update state accordingly. Submit creds via axios, store tokenized response in localStorage.

  handleChanges = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  submitCreds = event => {
    event.preventDefault();
    console.log(this.state);
    const endpoint = "http://localhost:8888/api/auth/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => {
        console.error("LOGIN ERROR", err);
      });
  };
}

export default Login;
