import React, { Component } from "react";
import { useParams } from "react-router-dom";
import Doctor from "./../service/Doctor";
import TransData from "./../service/TransData";

class Presribe extends Component {
  constructor(props) {
    super(props);
    this.doctor = new Doctor();
    this.transData = new TransData();

    this.state = {
      diagnos: "",
      prescription: "",
      fee: "",
      treatment: ""
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
      transId: this.props.appData.transId,
      transDate: this.props.appData.transDate,
      pid: this.props.appData.pid,
      name: this.props.appData.name,
      age: this.props.appData.age,
      village: this.props.appData.village,
      did: "",
      docname: this.props.appData.docname,
      symptom: this.props.appData.symptom,
      diagnos: this.state.diagnos,
      prescription: this.state.prescription,
      fee: this.state.fee,
      medicine: this.state.treatment,
      total: Number(this.state.fee) + Number(this.state.treatment),
      despatch: "N",
      paid: "N",
      status: "P"
    };
    // console.log(this.tdata);
    this.transData.updateTrans(this.tdata);
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
              <tbody>
                <tr>
                  <td> Patient</td>
                  <td> {this.props.appData.name} </td>
                </tr>
                <tr>
                  <td> Doctor</td>
                  <td> {this.props.appData.docname} </td>
                </tr>
                <tr>
                  <td> Symptoms</td>
                  <td> {this.props.appData.symptom} </td>
                </tr>
                <tr>
                  <td> Diagnos</td>
                  <td>
                    <input
                      type="text"
                      name="diagnos"
                      value={this.state.diagnos}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td> Prescription</td>
                  <td>
                    <input
                      type="text"
                      name="prescription"
                      value={this.state.prescription}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td> Fee</td>
                  <td>
                    <input
                      type="number"
                      name="fee"
                      value={this.state.fee}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td> Treatment</td>
                  <td>
                    <input
                      type="number"
                      name="treatment"
                      value={this.state.treatment}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td> Total </td>
                  <td>
                    {Number(this.state.fee) + Number(this.state.treatment)}{" "}
                  </td>
                </tr>

                <tr>
                  <td> Treatment</td>
                  <td>
                    <input
                      type="submit"
                      value="Save"
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
export default Presribe;
