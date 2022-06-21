import React from "react";
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
  console.log(staff);
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

function Salary(props) {
  const bangLuong = props.staffs.map((staff) => {
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
      <div className="row">{bangLuong}</div>
    </div>
  );
}

export default Salary;
