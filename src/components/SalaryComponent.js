import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";

function RenderSalary({ staff }) {
  if (staff != null) {
    return (
      <div>
        <div>
          <Card>
            <CardTitle className="ml-1">{staff.name}</CardTitle>
            <CardBody>
              <CardText>Mã nhân viên: {staff.id}</CardText>
              <CardText>Hệ số lương: {staff.salaryScale}</CardText>
              <CardText>Số ngày làm thêm: {staff.overTime}</CardText>
            </CardBody>
            <p className="bg-secondary text-white ml-3 mr-3">
              Lương: {staff.salaryScale * 30000000 + staff.overTime * 2000000}{" "}
              VNĐ
            </p>
          </Card>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

class Salary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortArray: [],
    };
    this.sortByAsc = this.sortByAsc.bind();
    this.sortByDesc = this.sortByDesc.bind();
  }

  sortByAsc = () => {
    let currentList = this.props.staffs;
    let newList = currentList.sort((a, b) => a.salaryScale - b.salaryScale);
    this.setState({
      sortArray: newList,
    });
  };

  sortByDesc = () => {
    let currentList = this.props.staffs;
    let newList = currentList.sort((a, b) => b.salaryScale - a.salaryScale);
    this.setState({
      sortArray: newList,
    });
  };

  render() {
    const bangLuong = this.state.sortArray.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-sm-6 col-md-4 mt-4">
          <RenderSalary staff={staff} />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/nhanvien">Nhân Viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <button className="btn btn-success mr-3" onClick={this.sortByAsc}>
          Sắp xếp theo hệ số lương tăng dần
        </button>
        <button className="btn btn-danger" onClick={this.sortByDesc}>
          Sắp xếp theo hệ số lương giảm dần
        </button>
        <div className="row">{bangLuong}</div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      sortArray: this.props.staffs,
    });
  }
}

export default Salary;
