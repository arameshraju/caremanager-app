import React, { Component } from "react";
import Login from "./components/login";
import PatientMaster from "./components/PatientMaster";
import { RouteApp } from "./router";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <h1>Hospital Care Management</h1>
        <PatientMaster />
      </React.Fragment>
    );
  }
}
export default Home;
