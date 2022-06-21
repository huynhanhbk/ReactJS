import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { DEPARTMENTS } from "../shared/staffs";
import { STAFFS } from "../shared/staffs";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Department from "./DepartmentComponent";

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
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
