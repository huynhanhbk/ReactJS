import React, { Component } from "react";
import { Button, Card, CardImg, Form, FormGroup, Input, Col } from "reactstrap";
import { Link } from "react-router-dom";
import AddStaff from "./AddStaffComponent";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterArray: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    event.preventDefault();
    let currentList = [];
    let newList = [];
    if (this.search.value !== "") {
      currentList = this.props.staffs;
      newList = currentList.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(this.search.value.toLowerCase());
      });
    } else {
      newList = this.props.staffs;
    }
    this.setState({
      filterArray: newList,
    });
  };

  // handleInputChange = (event) => {
  //   let currentList = [];
  //   let newList = [];
  //   if (event.target.value !== "") {
  //     currentList = this.props.staffs;
  //     newList = currentList.filter((item) => {
  //       return item.name
  //         .toLowerCase()
  //         .includes(event.target.value.toLowerCase());
  //     });
  //   } else {
  //     newList = this.props.staffs;
  //   }
  //   this.setState({
  //     filterArray: newList,
  //   });
  // };

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
          <div className="col-12 col-md-3 mt-3">
            <h4>Nhân Viên</h4>
          </div>
          <div className="col-12 col-md-2 mt-3">
            <AddStaff />
          </div>

          <div className="col-12 col-md-6 mt-3">
            <Form onSubmit={this.handleInputChange}>
              <FormGroup>
                <Col md={10}>
                  <Input
                    type="text"
                    className="input"
                    id="search"
                    name="search"
                    placeholder="Nhập tên nhân viên"
                    innerRef={(input) => (this.search = input)}
                  />
                </Col>
                <Col>
                  <Button md={2} type="submit" value="submit" color="primary">
                    Tìm
                  </Button>
                </Col>
              </FormGroup>
            </Form>
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
