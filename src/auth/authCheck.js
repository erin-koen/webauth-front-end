// build a higher order component that functions like middleware, checking a couple of conditions before rendering the components it warps.

import React from "react";
import axios from "axios";

axios.interceptors.request.use(function(requestConfig) {
  const token = localStorage.getItem("token");
  //define requestConfig here: (like go look it up in the docs and put the definition here)
  requestConfig.headers.authorization = token;
  return requestConfig;
});
//pass in component capital C so that you can write JSX with it within the function
export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem("token");
      const notLoggedIn = <h3>You gotta log in to get the goods</h3>;
      return <div>{token ? <Component {...this.props} /> : notLoggedIn} </div>;
    }
  };
}
