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
  FormFeedback,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { Link } from "react-router-dom";

class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterArray: [],
      isModalOpen: false,
      name: "",
      doB: "",
      startDate: "",
      department: "Sale",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
      salary: 3000000,
      image: "/assets/images/alberto.png",
      touched: {
        name: false,
        doB: false,
        startDate: false,
        department: false,
        salaryScale: false,
        annualLeave: false,
        overTime: false,
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addStaff = this.addStaff.bind(this);
  }

  addStaff = (staff) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newStaff = { id, ...staff };
    this.setState({
      staffs: [...this.state.staffs, newStaff],
    });
  };

  handleSearch = (event) => {
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

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleSubmit(event) {
    this.validate();
    const newStaff = {
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: this.state.department,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      image: this.state.image,
      salary: this.state.salary,
    };
    this.props.onAdd(newStaff);
    event.preventDefault();
  }

  validate(
    name,
    doB,
    salaryScale,
    startDate,
    department,
    annualLeave,
    overTime
  ) {
    const errors = {
      name: "",
      doB: "",
      startDate: "",
      department: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
    };
    if (this.state.touched.name && name.length < 3)
      errors.name = "Tên nhân viên phải >= 3 kí tự";
    else if (this.state.touched.name && name.length > 30)
      errors.name = "Tên nhân viên phải <= 30 kí tự";
    if (this.state.touched.doB && doB.length === 0)
      errors.doB = "Ngày sinh không được để trống!";
    if (this.state.touched.startDate && startDate.length === 0)
      errors.startDate = "Ngày vào công ty không được để trống!";
    if (this.state.touched.salaryScale && salaryScale.length === 0)
      errors.salaryScale = "Hệ số lương không được để trống";
    if (this.state.touched.department && department.length === 0)
      errors.department = "Phòng ban không được để trống!";

    const reg = /^\d+$/;
    if (this.state.touched.annualLeave && annualLeave.length === 0)
      errors.annualLeave = "Số ngày nghỉ còn lại không được để trống";
    else if (this.state.touched.annualLeave && !reg.test(annualLeave))
      errors.annualLeave = "Số ngày nghỉ còn lại phải là 1 số";

    if (this.state.touched.overTime && overTime.length === 0)
      errors.overTime = "Số ngày nghỉ còn lại không được để trống";
    else if (this.state.touched.overTime && !reg.test(overTime))
      errors.overTime = "Số ngày đã làm thêm phải là 1 số";

    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.salaryScale,
      this.state.startDate,
      this.state.department,
      this.state.annualLeave,
      this.state.overTime
    );

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
                    <Form onSubmit={this.handleSubmit}>
                      <FormGroup className="form-group row">
                        <Label htmlFor="name" md={4}>
                          Tên
                        </Label>
                        <Col md={8}>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tên nhân viên"
                            className="form-control"
                            value={this.state.name}
                            valid={errors.name === ""}
                            invalid={errors.name !== ""}
                            onBlur={this.handleBlur("name")}
                            onChange={this.handleInputChange}
                          />
                          <FormFeedback>{errors.name}</FormFeedback>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label htmlFor="doB" md={4}>
                          Ngày sinh
                        </Label>
                        <Col md={8}>
                          <Input
                            type="date"
                            id="doB"
                            name="doB"
                            value={this.state.doB}
                            valid={errors.doB === ""}
                            invalid={errors.doB !== ""}
                            onBlur={this.handleBlur("doB")}
                            onChange={this.handleInputChange}
                          />
                          <FormFeedback>{errors.doB}</FormFeedback>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label htmlFor="startDate" md={4}>
                          Ngày vào công ty
                        </Label>
                        <Col md={8}>
                          <Input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={this.state.startDate}
                            valid={errors.startDate === ""}
                            invalid={errors.startDate !== ""}
                            onBlur={this.handleBlur("startDate")}
                            onChange={this.handleInputChange}
                          />
                          <FormFeedback>{errors.startDate}</FormFeedback>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label htmlFor="department" md={4}>
                          Phòng ban
                        </Label>
                        <Col md={8}>
                          <Input
                            type="select"
                            id="department"
                            name="department"
                            //value={this.state.department}
                            valid={errors.department === ""}
                            invalid={errors.department !== ""}
                            onBlur={this.handleBlur("department")}
                            onChange={this.handleInputChange}
                            //onChange={this.onChangeDeparment}
                          >
                            <option value="sale">Sale</option>
                            <option value="hr">HR</option>
                            <option value="marketing">Marketing</option>
                            <option value="it">IT</option>
                            <option value="finance">Finance</option>
                          </Input>
                          <FormFeedback>{errors.department}</FormFeedback>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label htmlFor="salaryScale" md={4}>
                          Hệ số lương
                        </Label>
                        <Col md={8}>
                          <Input
                            type="number"
                            id="salaryScale"
                            name="salaryScale"
                            placeholder="1.0 -> 4.0"
                            value={this.state.salaryScale}
                            valid={errors.salaryScale === ""}
                            invalid={errors.salaryScale !== ""}
                            onBlur={this.handleBlur("salaryScale")}
                            onChange={this.handleInputChange}
                          />
                          <FormFeedback>{errors.salaryScale}</FormFeedback>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label htmlFor="annualLeave" md={4}>
                          Số ngày nghỉ còn lại
                        </Label>
                        <Col md={8}>
                          <Input
                            type="tel"
                            id="annualLeave"
                            name="annualLeave"
                            value={this.state.annualLeave}
                            valid={errors.annualLeave === ""}
                            invalid={errors.annualLeave !== ""}
                            onBlur={this.handleBlur("annualLeave")}
                            onChange={this.handleInputChange}
                          />
                          <FormFeedback>{errors.annualLeave}</FormFeedback>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Label htmlFor="overTime" md={4}>
                          Số ngày đã làm thêm
                        </Label>
                        <Col md={8}>
                          <Input
                            type="tel"
                            id="overTime"
                            name="overTime"
                            value={this.state.overTime}
                            valid={errors.overTime === ""}
                            invalid={errors.overTime !== ""}
                            onBlur={this.handleBlur("overTime")}
                            onChange={this.handleInputChange}
                          />
                          <FormFeedback>{errors.overTime}</FormFeedback>
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col md={{ size: 10, offset: 2 }}>
                          <Button type="submit" color="primary">
                            Thêm
                          </Button>
                        </Col>
                      </FormGroup>
                    </Form>
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
