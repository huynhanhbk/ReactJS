import "./App.css";
import React, { Component } from "react";
//import Menu from "./components/MenuComponent";
import { Navbar, NavbarBrand } from "reactstrap";
//import { DISHES } from "./shared/dishes";
import { STAFFS } from "./shared/staffs";
import StaffList from "./components/StaffListComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand>Ứng dụng quản lý nhân viên v1.0</NavbarBrand>
          </div>
        </Navbar>
        <StaffList staffs={this.state.staffs} />
      </div>
    );
  }
}

export default App;
