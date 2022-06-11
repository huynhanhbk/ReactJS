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
        <div key={staff.id} className="col-12 col-md-5 m-1">
          <Card>
            <CardTitle>{staff.name}</CardTitle>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <div>{menu}</div>
      </div>
    );
  }
}

export default StaffList;
