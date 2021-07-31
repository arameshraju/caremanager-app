import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  PatientMaster,
  DoctorMaster,
  DaysReport,
  DashBoard,
  Login
} from "./components";

class RouteApp extends Component {
  constructor() {
    super();
    this.state = {
      name: "Care Manager"
    };
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <div class="row">
            <nav>
              <ul>
                <li>
                  <Link to="/DashBoard">Home</Link>
                </li>

                <li>
                  <Link to="/Doctors">Doctors</Link>
                </li>
                <li>
                  <Link to="/Patients">Patients</Link>
                </li>
                <li>
                  <Link to="/DaysReport">Reports</Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Doctors">
              <DoctorMaster />
            </Route>
            <Route path="/Patients">
              <PatientMaster />
            </Route>
            <Route path="/DaysReport">
              <DaysReport />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <DashBoard />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default RouteApp;
