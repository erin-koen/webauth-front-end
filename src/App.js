import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login.js";
import Register from "./auth/Register.js";
import Users from "./users/Users.js";

class App extends Component {
  state = {
    
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/login">Log In</NavLink>
          <br />
          <NavLink to="/register">Sign Up</NavLink>
          <br />
          <NavLink to="/users">See Users</NavLink>
        </header>
        <div>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/users" component={Users} />
        </div>
      </div>
    );
  }
  
}

export default App;


