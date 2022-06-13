import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardImg } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
      columDefault: "col-12 col-sm-6 col-md-4 mt-3",
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
      //console.log("abc");

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
    //console.log(this.props.staffs);

    const staffList = this.props.staffs.map((staff) => {
      return (
        <div className={this.state.columDefault}>
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
        <div className="row m-3">
          <button
            onClick={() => this.onColumSelect("col-md-12 mt-2")}
            className="btn btn-primary col-2 m-1"
          >
            1 Cột
          </button>
          <button
            onClick={() => this.onColumSelect("col-md-6 mt-2")}
            className="btn btn-secondary col-2 m-1"
          >
            2 Cột
          </button>
          <button
            onClick={() => this.onColumSelect("col-md-4 mt-2")}
            className="btn btn-success col-2 m-1"
          >
            3 Cột
          </button>
          <button
            onClick={() => this.onColumSelect("col-md-3 mt-2")}
            className="btn btn-warning col-2 m-1"
          >
            4 Cột
          </button>
          <button
            onClick={() => this.onColumSelect("col-md-2 mt-2")}
            className="btn btn-info col-2 m-1"
          >
            6 Cột
          </button>
        </div>
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
