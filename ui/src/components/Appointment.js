import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Doctor from "./../service/Doctor";
import TransData from "./../service/TransData";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.doctor = new Doctor();
    this.transData = new TransData();

    this.state = {
      doctor: "",
      Symptoms: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    console.log(this.props);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    this.tdata = {
      transId: Date.now(),
      transDate: Date.UTC(),
      pid: this.props.appData.pid,
      name: this.props.appData.name,
      age: this.props.appData.age,
      village: this.props.appData.village,
      did: "",
      docname: this.state.doctor,
      symptom: this.state.Symptoms,
      diagnos: "",
      prescription: "",
      fee: 0,
      medicine: 0,
      total: 0,
      despatch: "N",
      paid: "N",
      status: "A"
    };
    this.transData.addTrans(this.tdata);
    // console.log("Submit" + JSON.stringify(this.state));
    this.tdata = {};

    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-2 offset-2">
            <table className="table">
              <thead>
                <tr>
                  <td> Patient Name </td> <td> Doctor </td> <td>Symptoms</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td> {this.props.appData.name} </td>{" "}
                  <td>
                    <select
                      name="doctor"
                      value={this.state.doctor}
                      onChange={this.handleChange}
                    >
                      {this.doctor.SearchData().map(item => (
                        <option value={item.name}>{item.name}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      name="Symptoms"
                      value={this.state.Symptoms}
                      onChange={this.handleChange}
                    />{" "}
                  </td>
                  <td>
                    <input
                      type="submit"
                      value="Fix"
                      onClick={this.handleSubmit}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Appointment;
