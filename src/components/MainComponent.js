import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { DEPARTMENTS } from "../shared/staffs";
import { STAFFS } from "../shared/staffs";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import Home from "./HomeComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
    };
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          nv={
            this.state.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/trangchu" component={Home} />
          <Route
            exact
            path="/nhanvien"
            component={() => <StaffList staffs={this.state.staffs} />}
          />
          <Route path="/nhanvien/:staffId" component={StaffWithId} />
          <Route
            exact
            path="/phongban"
            component={() => (
              <Department departments={this.state.departments} />
            )}
          />
          <Route
            path="/bangluong"
            component={() => <Salary staffs={this.state.staffs} />}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
