import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { DEPARTMENTS } from "../shared/staffs";
import { STAFFS } from "../shared/staffs";
import StaffList from "./StaffListComponent";

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
      <Switch>
        <Route path="/staff" component={StaffList} />
      </Switch>
    );
  }
}

export default Main;
