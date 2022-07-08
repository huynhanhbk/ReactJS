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
//import { baseUrl } from "../shared/baseUrl";

import { Loading } from "./LoadingComponent";

class RenderDepartment extends Component {
  render() {
    return (
      // <Link>
      <Card>
        <CardTitle className="ml-1">{this.props.dept.name}</CardTitle>
        <CardBody>
          <CardText className="text-dark ml-4">
            Số lượng nhân viên: {this.props.dept.numberOfStaff}
          </CardText>
        </CardBody>
      </Card>
      // </Link>
    );
  }
}

class Department extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   departList: [],
    // };
  }

  // componentDidMount() {
  //   this.setState({
  //     departList: this.props.departments.departments,
  //   });
  // }

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
    if (this.props.departments.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.departments.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.departments.errMess}</h4>
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
        </div>
      );
  }
}

export default Department;
