import React, { Component } from "react";
import Patient from "./../service/Patient";

class PatinetMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: Date.now(),
      age: 0,
      name: "",
      mobile: "",
      village: ""
    };
    this.patient = new Patient();
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
             pid: 0,
             name: this.state.name,
             age: this.state.age,
             mobile: this.state.mobile,
             village: this.state.village
           }
        const requestOptions = {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(bData)
        };
        fetch('http://localhost:8080/patient', requestOptions)
           .then(response => response.json())
           .then(data => function(data){
                console.log(data);
           }
        );
    event.preventDefault();
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-3 align-self-center">
          <h2>Patinet Master </h2>
          <form>
            <table className="table">
              <tbody>
                <tr>
                  <td> Patinet Name</td>
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
                  <td> Patinet Age</td>
                  <td>
                    <input
                      type="number"
                      name="age"
                      value={this.state.age}
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
                  <td> Village/Town </td>
                  <td>
                    <input
                      type="text"
                      name="village"
                      value={this.state.village}
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
        </div>
      </React.Fragment>
    );
  }
}
export default PatinetMaster;
