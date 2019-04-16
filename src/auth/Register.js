import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    username: "",
    password: "",
    department: ""
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
            placeholder="Choose a password"
          />
          <input
            value={this.state.department}
            id="department"
            onChange={this.handleChanges}
            type="text"
            placeholder="Which department?"
          />
          <button type="submit" onClick={this.submitCreds}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }

  //functions to handle changes and update state accordingly. Submit creds via axios, store tokenized response in localStorage.

  // add in a redirect to /users route here once it's up and running
  

  handleChanges = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  submitCreds = event => {
    event.preventDefault();

    const endpoint = "http://localhost:8888/api/auth/register";
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

export default Register;
