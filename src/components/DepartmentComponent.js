import React from "react";
import { Card, CardText, CardTitle } from "reactstrap";

function RenderDepartment({ department }) {
  return (
    <Card>
      <CardTitle className="ml-1">{department.name}</CardTitle>
      <CardText className="text-dark ml-4">
        Số lượng nhân viên: {department.numberOfStaff}
      </CardText>
    </Card>
  );
}

function Department(props) {
  console.log(props);
  const danhsachPhongban = props.departments.map((item) => {
    return (
      <div key={item.id} className="col-12 col-sm-6 col-md-4 mt-4">
        <RenderDepartment department={item} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <h3>Danh Sách Phòng Ban</h3>
      </div>
      <hr />
      <div className="row">{danhsachPhongban}</div>
      <br></br>
    </div>
  );
}

export default Department;
