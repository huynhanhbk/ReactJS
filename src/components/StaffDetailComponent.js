import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
} from "reactstrap";

import dateFormat from "dateformat";

function RenderStaff({ staff }) {
  if (staff != null) {
    return (
      <div className="col-12">
        <Card>
          <CardBody>
            <div className="row">
              <div className="col-12 col-sm-4 col-md-3">
                <CardImg width="100%" src={staff.image} alt={staff.name} />
              </div>
              <div className="col-12 col-sm-8 col-md-9">
                <CardTitle>Họ và tên: {staff.name}</CardTitle>
                <CardText>
                  Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                </CardText>
                <CardText>
                  Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                </CardText>
                <CardText>Phòng ban: {staff.department.name}</CardText>
                <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function StaffDetail(props) {
  console.log(props);

  if (props.nv != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/nhanvien">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.nv.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.nv.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderStaff staff={props.nv} />
        </div>
        <hr />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default StaffDetail;
