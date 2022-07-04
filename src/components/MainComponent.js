import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import Home from "./HomeComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          nv={
            this.props.staffs.filter(
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
            component={() => <StaffList staffs={this.props.staffs} />}
          />
          <Route path="/nhanvien/:staffId" component={StaffWithId} />
          <Route
            exact
            path="/phongban"
            component={() => (
              <Department departments={this.props.departments} />
            )}
          />
          <Route
            path="/bangluong"
            component={() => <Salary staffs={this.props.staffs} />}
          />
          <Redirect to="/trangchu" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));

// import React, { Component } from "react";
// import { Redirect, Route, Switch } from "react-router-dom";
// import { DEPARTMENTS } from "../shared/staffs";
// import { STAFFS } from "../shared/staffs";
// import StaffList from "./StaffListComponent";
// import StaffDetail from "./StaffDetailComponent";
// import Header from "./HeaderComponent";
// import Footer from "./FooterComponent";
// import Department from "./DepartmentComponent";
// import Salary from "./SalaryComponent";
// import Home from "./HomeComponent";

// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       staffs: STAFFS,
//       departments: DEPARTMENTS,
//     };
//     this.addStaff = this.addStaff.bind(this);
//   }

//   addStaff = (staff) => {
//     const id = Math.floor(Math.random() * 10000 + 1);
//     const newStaff = { id, ...staff };
//     this.setState({
//       staffs: [...this.state.staffs, newStaff],
//     });
//   };

//   render() {
//     const StaffWithId = ({ match }) => {
//       return (
//         <StaffDetail
//           nv={
//             this.state.staffs.filter(
//               (staff) => staff.id === parseInt(match.params.staffId, 10)
//             )[0]
//           }
//         />
//       );
//     };

//     return (
//       <div>
//         <Header />
//         <Switch>
//           <Route path="/trangchu" component={Home} />
//           <Route
//             exact
//             path="/nhanvien"
//             component={() => (
//               <StaffList onAdd={this.addStaff} staffs={this.state.staffs} />
//             )}
//           />
//           <Route path="/nhanvien/:staffId" component={StaffWithId} />
//           <Route
//             exact
//             path="/phongban"
//             component={() => (
//               <Department departments={this.state.departments} />
//             )}
//           />
//           <Route
//             path="/bangluong"
//             component={() => <Salary staffs={this.state.staffs} />}
//           />
//           <Redirect to="/trangchu" />
//         </Switch>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default Main;
