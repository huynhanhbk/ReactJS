import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import DepartmentDetail from "./DepartmentDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import Home from "./HomeComponent";
import { connect } from "react-redux";
import {
  fetchStaffs,
  fetchDepartments,
  fetchSalary,
  postStaff,
  removeStaff,
  patchStaff,
} from "../redux/ActionCreators";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    staffsSalary: state.staffsSalary,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchStaffs: () => {
    dispatch(fetchStaffs());
  },
  fetchDepartments: () => {
    dispatch(fetchDepartments());
  },
  fetchSalary: () => {
    dispatch(fetchSalary());
  },
  postStaff: (name, doB, startDate, department, annualLeave, overTime) =>
    dispatch(
      postStaff(name, doB, startDate, department, annualLeave, overTime)
    ),
  removeStaff: (id) => {
    dispatch(removeStaff(id));
  },
  patchStaff: (staff) => {
    dispatch(patchStaff(staff));
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStaffs();
    this.props.fetchDepartments();
    this.props.fetchSalary();
  }

  render() {
    const StaffWithId = ({ match }) => {
      return (
        <StaffDetail
          staff={
            this.props.staffs.staffs.filter(
              (staff) => staff.id === parseInt(match.params.staffId, 10)
            )[0]
          }
          staffLoading={this.props.staffs.isLoading}
          staffErrMess={this.props.staffs.errMess}
          department={this.props.departments.departments}
          patchStaff={this.props.patchStaff}

          // department={
          //   this.props.departments.departments.filter(
          //     (dept) => dept.id === this.props.staffs.departmentId
          //   )[0]
          // }
        />
      );
    };

    const DepartmentWithId = ({ match }) => {
      return (
        <DepartmentDetail
          staffOfDept={this.props.staffs.staffs.filter(
            (staff) => staff.departmentId === match.params.departmentId
          )}
          department={
            this.props.departments.departments.filter(
              (department) => department.id === match.params.departmentId
            )[0]
          }
          deptLoading={this.props.departments.isLoading}
          deptErrMess={this.props.departments.errMess}
        />
      );
    };

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="page"
            timeout={200}
          >
            <Switch>
              <Route path="/trangchu" component={Home} />
              <Route
                exact
                path="/nhanvien"
                component={() => (
                  <StaffList
                    staffs={this.props.staffs}
                    staffLoading={this.props.staffs.isLoading}
                    staffErrMess={this.props.staffs.errMess}
                    postStaff={this.props.postStaff}
                    removeStaff={this.props.removeStaff}
                  />
                )}
              />
              <Route path="/nhanvien/:staffId" component={StaffWithId} />
              <Route
                exact
                path="/phongban"
                component={() => (
                  <Department
                    departments={this.props.departments}
                    deptLoading={this.props.departments.isLoading}
                    deptErrMess={this.props.departments.errMess}
                  />
                )}
              />
              <Route
                path="/phongban/:departmentId"
                component={DepartmentWithId}
              />
              <Route
                path="/bangluong"
                component={() => (
                  <Salary
                    staffsSalary={this.props.staffsSalary}
                    salaryLoading={this.props.staffsSalary.isLoading}
                    salaryErrMess={this.props.staffsSalary.errMess}
                  />
                )}
              />
              <Redirect to="/trangchu" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

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
