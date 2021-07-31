import React from "react";

class UserSvc {
  user = {
    name: "",
    pwd: ""
  };
  auth = false;
  constructor() {
    console.log("Ramesh");
  }
  Login = function(data) {
    this.auth = true;
    this.user = { name: data.user, pwd: data.password };
  };
  getAuth = function() {
    return this.auth;
  };
  getName = function() {
    return this.user.name;
  };
}

export default UserSvc;
