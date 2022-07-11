import React, { Component } from "react";

import {
  Card,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

import { Loading } from "./LoadingComponent";

class RenderDepartment extends Component {
  render() {
    return (
      <Card>
        <Link to={`/phongban/${this.props.dept.id}`}>
          <CardTitle className="ml-1">{this.props.dept.name}</CardTitle>
          <CardBody>
            <CardText className="text-dark ml-4">
              Số lượng nhân viên: {this.props.dept.numberOfStaff}
            </CardText>
          </CardBody>
        </Link>
      </Card>
    );
  }
}

class Department extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const danhsachphongban = this.props.departments.departments.map(
      (department) => {
        return (
          <div key={department.id} className="col-12 col-sm-6 col-md-4 mt-4">
            <RenderDepartment dept={department} />
          </div>
        );
      }
    );
    if (this.props.deptLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.deptErrMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.deptErrMess}</h4>
          </div>
        </div>
      );
    } else
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/nhanvien">Nhân Viên</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Phòng Ban</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Danh Sách Phòng Ban</h3>
              <hr />
            </div>
          </div>
          <div className="row">{danhsachphongban}</div>
          <hr />
        </div>
      );
  }
}

export default Department;
