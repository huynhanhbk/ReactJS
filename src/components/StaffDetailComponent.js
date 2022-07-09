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
  Button,
} from "reactstrap";
import dateFormat from "dateformat";
import { Loading } from "./LoadingComponent";
import { patchStaff } from "../redux/ActionCreators";

function RenderStaff({ staff }) {
  switch (staff.departmentId) {
    case "Dept01":
      staff.departmentId = "Sale";
      break;
    case "Dept02":
      staff.departmentId = "HR";
      break;
    case "Dept03":
      staff.departmentId = "Marketing";
      break;
    case "Dept04":
      staff.departmentId = "IT";
      break;
    case "Dept05":
      staff.departmentId = "Finance";
      break;
  }
  return (
    <div className="col-12">
      <Card key={staff.id}>
        <CardBody>
          <div className="row">
            <div className="col-12 col-sm-4 col-md-3">
              <CardImg width="100%" src={staff.image} alt={staff.name} />

              <Button
                onClick={() => patchStaff(staff)}
                className="m-3"
                type="submit"
                color="info"
              >
                Update
              </Button>
            </div>
            <div className="col-12 col-sm-8 col-md-9">
              <CardTitle>Họ và tên: {staff.name}</CardTitle>
              <CardText>
                Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
              </CardText>
              <CardText>
                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
              </CardText>
              <CardText>Phòng ban: {staff.departmentId}</CardText>
              <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
              <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function StaffDetail(props) {
  console.log(props);
  if (props.staffLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.staffErrMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.staffErrMess}</h4>
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
            <BreadcrumbItem active>{props.nv.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.nv.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderStaff staff={props.nv} patchStaff={props.patchStaff} />
        </div>
        <hr />
      </div>
    );
}

export default StaffDetail;
