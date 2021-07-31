import React, { Component } from "react";
import Prescribe from "./Prescribe";
import TransData from "./../service/TransData";
class Consultation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appData: {}
    };
    this.transData = new TransData();
  }
  openAppointment = data => {
    console.log("Appointment " + data.name);
    this.setState({ appData: data });
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h2>Consultation Details</h2>
          <Prescribe appData={this.state.appData} />
        </div>
        <h2>Consultation Wait list</h2>
        <div className="row">
          <table className="table">
            <thead>
              <td>Name</td>
              <td>doctor</td>
              <td>symptom</td>
              <td>Action</td>
            </thead>
            <tbody>
              {this.transData
                .SearchData()
                .filter(tdata => tdata.status == "A")
                .map(item => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.docname}</td>
                    <td>{item.symptom}</td>
                    <td>
                      <button onClick={() => this.openAppointment(item)}>
                        Consult
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
export default Consultation;
