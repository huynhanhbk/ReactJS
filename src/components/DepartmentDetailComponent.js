import React, { Component } from "react";
import {
  Card,
  CardText,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

function RenderStaffOfDept({ staff }) {
  return (
    <Card>
      <Link to={`/staffs/${staff.id}`}>
        <CardImg src={staff.image} />
        <CardText className="text-center">{staff.name}</CardText>
      </Link>
    </Card>
  );
}

function DepartmentDetail(props) {
  const staffOfDept = props.staffOfDept.map((staff) => {
    return (
      <div key={staff.id} className="col-6 col-sm-4 col-md-2 mt-4">
        <RenderStaffOfDept staff={staff} />
      </div>
    );
  });
  if (props.deptLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.deptErrMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.deptErrMess}</h4>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/phongban">Phòng Ban</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Phòng</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Danh Sách Nhân Viên</h3>
            <hr />
          </div>
        </div>
        <div className="row">{staffOfDept}</div>
        <br></br>
        <hr />
      </div>
    );
}

export default DepartmentDetail;
