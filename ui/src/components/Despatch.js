import React, { Component } from "react";
import Bill from "./Bill";
import TransData from "./../service/TransData";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
class Despatch extends Component {
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
                .filter(tdata => tdata.status == "P")
                .map(item => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.docname}</td>
                    <td>{item.symptom}</td>
                    <td>
                      <ReactToPrint content={() => this.componentRef}>
                        <PrintContextConsumer>
                          {({ handlePrint }) => (
                            <button onClick={handlePrint}>
                              Print this out!
                            </button>
                          )}
                        </PrintContextConsumer>
                      </ReactToPrint>
                      <Bill
                        appData={item}
                        ref={el => (this.componentRef = el)}
                      />
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
export default Despatch;
