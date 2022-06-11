import React, { Component } from "react";
import { Card, CardTitle, CardText, CardImg } from "reactstrap";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
    };
  }
  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }
  renderStaff(staff) {
    if (staff != null) {
      return (
        <Card>
          <CardImg width="100%" src={staff.image} alt={staff.name} />
          <CardTitle>Họ và tên: {staff.name}</CardTitle>
          <CardText>Ngày sinh: {staff.doB}</CardText>
          <CardText>Ngày vào công ty: {staff.startDate}</CardText>
          <CardText>Phòng ban: {staff.department}</CardText>
          <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
          <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const menu = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-sm-6 col-md-4">
          <Card onClick={() => this.onStaffSelect(staff)}>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div>Bấm vào tên nhân viên để xem thông tin</div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderStaff(this.state.selectedStaff)}
          </div>
        </div>
      </div>
    );
  }
}

export default StaffList;
