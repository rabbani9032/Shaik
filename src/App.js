import React, { Component } from 'react';
import './App.css';
import employees from '../src/mock-data/employee.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ceo: [],
      manager: [],
      employee: [],
      totalSalary: 0
    }
  }
  componentDidMount() {
    let ceo1, manager1, employee1, sum;
    ceo1 = employees.filter(function (emp) {
      return emp.managerId === "";
    });
    manager1 = employees.filter(function (emp) {
      return emp.managerId === 101;
    });
    employee1 = employees.filter(function (emp) {
      return emp.managerId === 109;
    });
    employee1 = employee1.sort(function (a, b) {
      return a.employeeName.localeCompare(b.employeeName);
    });
    sum = employees.map(o => o.salary).reduce((a, b) => { return a + b });
    this.setState({
      ceo: ceo1,
      manager: manager1,
      employee: employee1,
      totalSalary: sum
    });
  }
  render() {
    return (
      <div className="App">
        <div className="menu">
          <h1>INFOR-ASSIGNMENT</h1>
        </div>
        <div className="emplyeeDtls">
          {this.CEO}
          {this.Managers}
          <hr />
          <p><b>Total Salary: {this.state.totalSalary}</b></p>
          <hr />
        </div>

      </div>
    );
  }
  get CEO() {
    if (this.state.ceo.length !== 0) {
      return (
        <div>
          <p><b>Name:</b> {this.state.ceo[0].employeeName},
          <b>Salary:</b> {this.state.ceo[0].salary}
          </p>
        </div>
      );
    } else {
      return (
        <div>

        </div>
      );
    }
  }

  get Managers() {
    if (this.state.manager.length !== 0 && this.state.ceo.length !== 0) {
      return (
        <div>
          <p className="sub-head"><b>Employees of :</b> {this.state.ceo[0].employeeName}</p>
          <p><b>Name:</b>{this.state.manager[0].employeeName},
           <b>Salary:</b> {this.state.manager[0].salary}
          </p>
          <p className="sub-head"><b>Employees of :</b> {this.state.manager[0].employeeName}</p>
          {this.employeesData}
          <p><b>Name:</b>{this.state.manager[1].employeeName},
           <b>Salary:</b> {this.state.manager[1].salary}</p>
           <p className="sub-head"><b>Employees of :</b> {this.state.manager[1].employeeName}</p>
        </div>
      );
    } else {
      return (
        <div>

        </div>
      );
    }
  }

  get employeesData() {
    if (this.state.employee.length !== 0) {
      let employeeInfo = this.state.employee.map((emply) => {
        return (
          <div>
            <p><b>Name:</b>{emply.employeeName},
            <b>Salary:</b> {emply.salary}</p>
          </div>
        );
      })
      return (
        <div>
          {employeeInfo}
        </div>
      );
    } else {
      return (
        <div>

        </div>
      );
    }
  }




}

export default App;
