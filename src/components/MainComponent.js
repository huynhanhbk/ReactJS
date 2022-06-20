import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { DEPARTMENTS } from "../shared/staffs";
import { STAFFS } from "../shared/staffs";
import StaffList from "./StaffListComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            path="/nhanvien"
            component={() => <StaffList staffs={this.state.staffs} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
