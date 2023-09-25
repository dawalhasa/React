import React, { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.state = {
      employeeName: "Dawa Lhasa",
      employeeId: 123,
      employeeSalary: 5000,
    };
  }

  render() {

    return <div>
      <h1>
        Employee Class 
        {this.state.employeeName}
        {this.state.employeeId}
        {this.state.employeeSalary}
      </h1>
    </div>
  }
}
export default Employee;
