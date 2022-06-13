import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardImg } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
      columDefault: "col-12 col-md-6 col-lg-4 mt-3",
    };
  }
  onStaffSelect(staff) {
    this.setState({ selectedStaff: staff });
  }

  onColumSelect(col) {
    this.setState({
      columDefault: col,
    });
  }

  renderStaff(staff) {
    if (staff != null) {
      console.log("abc");

      return (
        <div className="col-12">
          <Card>
            <CardBody>
              <CardImg width="100%" src={staff.image} alt={staff.name} />
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
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    console.log(this.props.staffs);

    const staffList = this.props.staffs.map((staff) => {
      return (
        <div className="col-12 col-sm-6 col-md-4">
          <Card key={staff.id} onClick={() => this.onStaffSelect(staff)}>
            <CardBody>
              <CardTitle>{staff.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{staffList}</div>
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
