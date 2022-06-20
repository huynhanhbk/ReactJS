import React from "react";
import { Card, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuStaffs({ staff, onClick }) {
  return (
    <Card>
      <Link to={`/nhanvien/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt="" />
        <p>{staff.name}</p>
      </Link>
    </Card>
  );
}

function StaffList(props) {
  const danhsachnv = props.staffs.map((staff) => {
    return (
      <div key={staff.id} className="col-12 col-md-2">
        <RenderMenuStaffs staff={staff} />
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">
        <h3>Nhân Viên</h3>
      </div>
      <div className="row">{danhsachnv}</div>
    </div>
  );
}
export default StaffList;
