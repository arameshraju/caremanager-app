import React, { Component } from "react";
import Doctor from "./../service/Doctor";

class DoctorMaster extends Component {
  constructor(props) {
    super(props);
    this.doctor = new Doctor();
    this.state = {
      did: 1,
      name: "Demo",
      qualification: "Demo",
      mobile: "108",
      reg: "108-911",
      email: "demo@doc.com",
      address: "108,india"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log("Submit" + this.state.mobile);
    var bData={
          did: 0,
          name: this.state.name,
          qualification: this.state.qualification,
          mobile: this.state.mobile,
          reg: this.state.reg,
          email: this.state.email,
          address: this.state.address
        }
       const requestOptions = {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(bData)
           };
           fetch('http://localhost:8080/doctor', requestOptions)
               .then(response => response.json())
               .then(data => function(data){
                    console.log(data);
               }
               );

//    this.doctor.addDoctor({
//      did: Date.now(),
//      name: this.state.name,
//      qualification: this.state.qualification,
//      mobile: this.state.mobile,
//      reg: this.state.reg,
//      email: this.state.email,
//      address: this.state.address
//    });
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <h2>Doctor Master </h2>
        <form>
          <table>
            <tbody>
              <tr>
                <td> Doctor Name</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td> Qualification </td>
                <td>
                  <input
                    type="text"
                    name="qualification"
                    value={this.state.qualification}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td> MobileNo </td>
                <td>
                  <input
                    type="text"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td> RegNo </td>
                <td>
                  <input
                    type="text"
                    name="reg"
                    value={this.state.reg}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td> email </td>
                <td>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td> Address </td>
                <td>
                  <input
                    type="text"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <input type="Reset" value="Clear" />{" "}
                </td>
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
        </form>
      </React.Fragment>
    );
  }
}
export default DoctorMaster;
