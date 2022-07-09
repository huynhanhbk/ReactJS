import React, { Component } from "react";
import {
  Button,
  Card,
  CardImg,
  Form,
  FormGroup,
  Input,
  Col,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";
import { removeStaff } from "../redux/ActionCreators";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

// Hiển thị danh sách nhân viên
function RenderMenuStaffs({ staff, removeStaff }) {
  return (
    <Card>
      <Link to={`/nhanvien/${staff.id}`}>
        <CardImg width="100%" src={staff.image} alt="" />
        <p className="text-center text-dark">{staff.name}</p>
      </Link>
      <Button
        onClick={() => removeStaff(staff.id)}
        type="submit"
        color="warning"
      >
        {" "}
        Xóa
        {/* <span className="fa fa-trash"></span> */}
      </Button>
    </Card>
  );
}

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterArray: [],
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Hàm tìm kiếm nhân viên
  handleSearch = (event) => {
    event.preventDefault();
    let currentList = [];
    let newList = [];
    if (this.search.value !== "") {
      currentList = this.props.staffs.staffs;
      newList = currentList.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(this.search.value.toLowerCase());
      });
    } else {
      newList = this.props.staffs.staffs;
    }
    this.setState({
      filterArray: newList,
    });
  };

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  //hàm thêm nhân viên mới
  handleSubmit(values) {
    // const newStaff = {
    //   id: this.props.staffs.length,
    //   name: values.name,
    //   doB: values.doB,
    //   salaryScale: values.salaryScale,
    //   startDate: values.startDate,
    //   department: values.department
    //     ? { name: values.department }
    //     : { name: "Sale" },
    //   annualLeave: values.annualLeave ? values.annualLeave : 0,
    //   overTime: values.overTime ? values.overTime : 0,
    //   image: "/assets/images/alberto.png",
    // };
    // this.props.staffs.staffs.push(newStaff);

    this.props.postStaff(
      values.name,
      values.doB,
      values.startDate,
      values.department,
      values.salaryScale,
      values.annualLeave,
      values.overTime
    );
    this.toggleModal();
  }

  render() {
    const danhsachnv = this.state.filterArray.map((staff) => {
      return (
        <div key={staff.id} className="col-6 col-sm-4 col-md-2 mt-4">
          <RenderMenuStaffs
            staff={staff}
            removeStaff={this.props.removeStaff}
          />
        </div>
      );
    });
    //Kiem tra trang thai state, su dung component Loading
    if (this.props.staffLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.staffErrMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.staffErrMess}</h4>
          </div>
        </div>
      );
    } else
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mt-3">
              <div className="row">
                <div className="col-8 col-md-8">
                  <h4>Danh Sách Nhân Viên</h4>
                </div>
                <div className="col-4 col-md-4">
                  <Button onClick={this.toggleModal}>+</Button>
                  <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                  >
                    <ModalHeader toggle={this.toggleModal}>
                      Thêm Nhân Viên
                    </ModalHeader>
                    <ModalBody>
                      <LocalForm
                        onSubmit={(values) => this.handleSubmit(values)}
                      >
                        <Row className="form-group">
                          <Label htmlFor="name" md={4}>
                            Tên
                          </Label>
                          <Col md={8}>
                            <Control.text
                              model=".name"
                              id="name"
                              name="name"
                              placeholder="Tên nhân viên"
                              className="form-control"
                              validators={{
                                required,
                                minLength: minLength(3),
                                maxLength: maxLength(30),
                              }}
                            />
                            <Errors
                              className="text-danger"
                              model=".name"
                              show="touched"
                              messages={{
                                required: "Vui lòng nhập!",
                                minLength: "Tên phải lớn hơn 2 kí tự",
                                maxLength: "Tên phải bé hơn 30 kí tự",
                              }}
                            />
                          </Col>
                        </Row>
                        <Row className="form-group">
                          <Label htmlFor="doB" md={4}>
                            Ngày sinh
                          </Label>
                          <Col md={8}>
                            <Control
                              model=".doB"
                              type="date"
                              id="doB"
                              name="doB"
                              className="form-control"
                              validators={{
                                required,
                              }}
                            />
                            <Errors
                              className="text-danger"
                              model=".doB"
                              show="touched"
                              messages={{
                                required: "Vui lòng nhập!",
                              }}
                            />
                          </Col>
                        </Row>
                        <Row className="form-group">
                          <Label htmlFor="startDate" md={4}>
                            Ngày vào công ty
                          </Label>
                          <Col md={8}>
                            <Control
                              model=".startDate"
                              type="date"
                              id="startDate"
                              name="startDate"
                              className="form-control"
                              validators={{
                                required,
                              }}
                            />
                            <Errors
                              className="text-danger"
                              model=".startDate"
                              show="touched"
                              messages={{
                                required: "Vui lòng nhập!",
                              }}
                            />
                          </Col>
                        </Row>
                        <Row className="form-group">
                          <Label htmlFor="department" md={4}>
                            Phòng ban
                          </Label>
                          <Col md={8}>
                            <Control.select
                              model=".department"
                              id="department"
                              name="department"
                              className="form-control"
                            >
                              <option>Sale</option>
                              <option>HR</option>
                              <option>Marketing</option>
                              <option>IT</option>
                              <option>Finance</option>
                            </Control.select>
                          </Col>
                        </Row>
                        <Row className="form-group">
                          <Label htmlFor="salaryScale" md={4}>
                            Hệ số lương
                          </Label>
                          <Col md={8}>
                            <Control.text
                              model=".salaryScale"
                              id="salaryScale"
                              name="salaryScale"
                              placeholder="1.0 -> 4.0"
                              className="form-control"
                              validators={{
                                required,
                                isNumber,
                              }}
                            />
                            <Errors
                              className="text-danger"
                              model=".salaryScale"
                              show="touched"
                              messages={{
                                required: "Vui lòng nhập!",
                                isNumber: "Vui lòng nhập 1 số",
                              }}
                            />
                          </Col>
                        </Row>
                        <Row className="form-group">
                          <Label htmlFor="annualLeave" md={4}>
                            Số ngày nghỉ còn lại
                          </Label>
                          <Col md={8}>
                            <Control.text
                              model=".annualLeave"
                              id="annualLeave"
                              name="annualLeave"
                              className="form-control"
                              validators={{
                                required,
                                isNumber,
                              }}
                            />
                            <Errors
                              className="text-danger"
                              model=".annualLeave"
                              show="touched"
                              messages={{
                                required: "Vui lòng nhập!",
                                isNumber: "Vui lòng nhập 1 số",
                              }}
                            />
                          </Col>
                        </Row>
                        <Row className="form-group">
                          <Label htmlFor="overTime" md={4}>
                            Số ngày đã làm thêm
                          </Label>
                          <Col md={8}>
                            <Control.text
                              model=".overTime"
                              id="overTime"
                              name="overTime"
                              className="form-control"
                              validators={{
                                required,
                                isNumber,
                              }}
                            />
                            <Errors
                              className="text-danger"
                              model=".overTime"
                              show="touched"
                              messages={{
                                required: "Vui lòng nhập!",
                                isNumber: "Vui lòng nhập 1 số",
                              }}
                            />
                          </Col>
                        </Row>
                        <Row className="form-group">
                          <Col md={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="primary">
                              Thêm
                            </Button>
                          </Col>
                        </Row>
                      </LocalForm>
                    </ModalBody>
                  </Modal>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 mt-3">
              <Form onSubmit={this.handleSearch}>
                <FormGroup row>
                  <div className="col-8 col-md-8">
                    <Input
                      type="text"
                      className="input"
                      id="search"
                      name="search"
                      placeholder="Nhập tên nhân viên"
                      innerRef={(input) => (this.search = input)}
                    />
                  </div>
                  <div className="col-4 col-auto">
                    <Button md={2} type="submit" value="submit" color="primary">
                      Tìm
                    </Button>
                  </div>
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
      filterArray: this.props.staffs.staffs,
    });
  }
}

export default StaffList;
