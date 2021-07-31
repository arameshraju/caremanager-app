import React from "react";
class TransData {
  tranData = [
    {
      transId: 1,
      transDate: "2020-11-4",
      pid: "1",
      name: "Demo",
      age: 0,
      village: "",
      did: "1",
      docname: "Demo",
      symptom: "Fever",
      diagnos: "good",
      prescription: "dosage",
      fee: 0,
      medicine: 0,
      total: 0,
      despatch: "N",
      paid: "N",
      status: "A"
    }
  ];
  constructor() {
    console.log("TransData cons : ");

    if (localStorage.getItem("tranData") == null) {
      console.log("first data");
      localStorage.setItem("tranData", JSON.stringify(this.tranData));
    } else {
      console.log("reload data");
      this.tranData = eval(localStorage.getItem("tranData"));
    }
    console.log(JSON.stringify(this.tranData));
  }
  SearchData = function() {
    return this.tranData;
  };
  addTrans(data) {
    console.log(JSON.stringify(data));
    this.tranData = [...this.tranData, data];
    localStorage.setItem("tranData", JSON.stringify(this.tranData));
  }
  updateTrans(data) {
    for (var i in this.tranData) {
      if (this.tranData[i].transId == data.transId) {
        this.tranData[i] = data;
      }
    }
    //console.log(JSON.stringify(data));
    //this.tranData = [...this.tranData, data];
    localStorage.setItem("tranData", JSON.stringify(this.tranData));
    // console.log(JSON.stringify(this.tranData));
  }
}

export default TransData;
