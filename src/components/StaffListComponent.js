import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";
import { Link } from "react-router-dom";
// import TextField from "@material-ui/core/TextField";

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

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterArray: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    let currentList = [];
    let newList = [];
    if (event.target.value !== "") {
      currentList = this.props.staffs;
      newList = currentList.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
    } else {
      newList = this.props.staffs;
    }
    this.setState({
      filterArray: newList,
    });
  };

  render() {
    const danhsachnv = this.state.filterArray.map((staff) => {
      return (
        <div key={staff.id} className="col-6 col-sm-4 col-md-2 mt-4">
          <RenderMenuStaffs staff={staff} />
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <h4>Danh sách Nhân Viên</h4>
          </div>
          <div className="text-right col-12 col-md-9">
            <input
              type="text"
              className="input mt-2"
              onChange={this.handleInputChange}
              placeholder="Tim kiem"
            />
          </div>
        </div>
        <hr />
        <div className="row">{danhsachnv}</div>
        <br></br>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      filterArray: this.props.staffs,
    });
  }
}
export default StaffList;
