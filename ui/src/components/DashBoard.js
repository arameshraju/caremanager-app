import React from "react";
import Patient from "./../service/Patient";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appointment from "./Appointment";
class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "any", pData: [], appData: {} };
    this.patient = new Patient();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.openAppointment = this.openAppointment.bind(this);
  }

  openAppointment = data => {
    console.log("Appointment " + data.name);
    this.setState({ appData: data });
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("An essay was submitted: " + this.state.value);
    this.setState({ pData: this.patient.SearchData(event.target.value) });
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <h2>DashBoard</h2>

        <div className="row">
          <div className="col-3">
            <Link to="/PatientMaster">Patient</Link>
          </div>
          <div className="col-2">
            <Link to="/DoctorMaster">Doctor</Link>
          </div>
          <div className="col-2">
            <Link to="/Consultation">Consultation</Link>
          </div>
          <div className="col-2">
            <Link to="/Despatch">Despatch</Link>
          </div>
          <div className="col-sm-2">
            <Link to="/DaysReport">Reports</Link>
          </div>
        </div>
        <div className="row">
          <Appointment appData={this.state.appData} />
        </div>
        <div className="row">
          <div className="col-3">
            <form>
              <label>
                Search:
                <input
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <button onClick={this.handleSubmit}> Search" </button>
            </form>
          </div>
        </div>
        <div className="row">
          <table className="table">
            <thead>
              <td>Name</td>
              <td>Age</td>

              <td>Phone</td>
              <td>Village</td>
              <td>Action</td>
            </thead>
            <tbody>
              {this.state.pData.map(item => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.age}</td>

                  <td>{item.mobile}</td>
                  <td>{item.village}</td>
                  <td>
                    <button onClick={() => this.openAppointment(item)}>
                      Appointment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default DashBoard;
