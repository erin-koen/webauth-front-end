import React, { Component } from "react";
import axios from "axios";
import authCheck from "../auth/authCheck.js"

class Users extends Component {
  state = {
    //get request returns an array
    users: []
  };
  componentDidMount() {
    const endpoint = "http://localhost:8888/api/users";
    axios.get(endpoint).then(res => {
      this.setState({
        users: res.data
      });
    }).catch(err => {
        console.error('Users error', err);
    });
  }

  render() {
    return (
    <div>
        <h1>Your fellow users</h1>
    </div>
    )
  }
}

export default authCheck(Users);
