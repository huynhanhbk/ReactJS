import React, { Component } from "react";
import { Card, CardTitle } from "reactstrap";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStaff: null,
    };
  }

  render() {
    const menu = this.props.staffs.map((staff) => {
      return (
        <div key={staff.id} className="col-12 col-sm-6 col-md-4">
          <Card>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div>Bấm vào tên nhân viên để xem thông tin</div>
      </div>
    );
  }
}

export default StaffList;
