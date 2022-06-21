import React from "react";
import { Card, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuStaffs({ staff, onClick }) {
  return (
    <Card>
      <Link to={`/nhanvien/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt="" />
        <p className="text-center text-dark">{staff.name}</p>
      </Link>
    </Card>
  );
}

function StaffList(props) {
  const danhsachnv = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-6 col-sm-4 col-md-2 mt-4">
        <RenderMenuStaffs staff={staff} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <h4>Danh sách Nhân Viên</h4>
      </div>
      <hr />
      <div className="row">{danhsachnv}</div>
      <br></br>
    </div>
  );
}
export default StaffList;
