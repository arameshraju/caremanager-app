import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import PatientMaster from "./components/PatientMaster";
import DoctorMaster from "./components/DoctorMaster";
import Appointment from "./components/Appointment";
import Prescribe from "./components/Prescribe";
import DaysReport from "./components/DaysReport";
import Despatch from "./components/Despatch";
import Consultation from "./components/Consultation";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            DoCare
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active  ">
                <Link to="/">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/DashBoard">DashBoard</Link>
              </li>
              <li className="nav-item">
                <Link to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/Support">Support</Link>
              </li>
            </ul>
          </div>
        </nav>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Support">
            <Support />
          </Route>
          <Route path="/DashBoard">
            <DashBoard />
          </Route>
          <Route path="/PatientMaster">
            <PatientMaster />
          </Route>
          <Route path="/DoctorMaster">
            <DoctorMaster />
          </Route>
          <Route path="/Appointment/:brand" children={<Appointment />} />
          <Route path="/Prescribe">
            <Prescribe />
          </Route>
          <Route path="/Despatch">
            <Despatch />
          </Route>
          <Route path="/Despatch">
            <Despatch />
          </Route>
          <Route path="/Consultation">
            <Consultation />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// function Appointment() {
//   // let { id } = useParams();
//   return <h2>Appointment-for Test</h2>;
// }
// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function AllData() {
  localStorage.clear();
}
function Support() {
  return (
    <div>
      <h2>Support</h2>
      <button className="btn btn-danger" onClick={AllData}>
        Format Data{" "}
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
