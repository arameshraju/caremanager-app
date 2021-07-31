import React from "react";
class Doctor {
  doctortData = [
    {
      did: 1,
      name: "Demo",
      qualification: "Demo",
      mobile: "108",
      reg: "108-911",
      email: "demo@doc.com",
      address: "108,india"
    }
  ];
  constructor() {
    console.log("doctort cons");
    if (localStorage.getItem("doctortData") == null) {
      localStorage.setItem("doctortData", JSON.stringify(this.doctortData));
    } else {
      this.doctortData = eval(localStorage.getItem("doctortData"));
    }
    console.log(JSON.stringify(this.doctortData));
  }
  SearchData = function(data) {
    return this.doctortData;
  };
  addDoctor(data) {
    this.doctortData = [...this.doctortData, data];
    localStorage.setItem("doctortData", JSON.stringify(this.doctortData));
  }
}

export default Doctor;
