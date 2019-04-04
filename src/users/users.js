import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import axios from "axios";
import authCheck from "../auth/authCheck.js";
import { Table } from "reactstrap";

class Users extends Component {
  state = {
    //get request returns an array
    users: [],
    loggedIn: true
  };

  componentDidMount() {
    const endpoint = "http://localhost:8888/api/users";
    axios
      .get(endpoint)
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.error("Users error", err);
      });
  }

  logOut = () => {
    localStorage.removeItem("token");
    this.setState({ loggedIn: false })
  };



  render() {
    return (
        
      <div>
        <h1>Your fellow users</h1>
        <button onClick = {this.logOut}>Log Out</button>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>username</th>
              <th>department</th>
            </tr>
          </thead>
          {this.state.users.map(user => (
            <tbody>
              <tr>
                <th scope="row">{this.state.users.indexOf(user)+1}</th>
                <td>{user.username}</td>
                <td>{user.department}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
  }
}

export default authCheck(Users);
