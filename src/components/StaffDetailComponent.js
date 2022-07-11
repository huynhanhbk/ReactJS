import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardBody,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Col,
  Label,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import dateFormat from "dateformat";
import { Loading } from "./LoadingComponent";

class StaffDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      id: this.props.staff.id,
      name: this.props.staff.name,
      doB: dateFormat(this.props.staff.doB, "mm/dd/yyyy"),
      startDate: dateFormat(this.props.staff.startDate, "mm/dd/yyyy"),
      salaryScale: this.props.staff.salaryScale,
      departmentId: this.props.staff.departmentId,
      department: this.props.staff.departmentId,
      annualLeave: this.props.staff.annualLeave,
      overTime: this.props.staff.overTime,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.RenderStaff = this.RenderStaff.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const update = {
      id: this.state.id,
      name: this.state.name,
      doB: dateFormat(this.state.doB, "mm/dd/yyyy"),
      startDate: dateFormat(this.state.startDate, "mm/dd/yyyy"),
      salaryScale: this.state.salaryScale,
      departmentId: this.state.departmentId,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
    };
    this.props.patchStaff(update);
    this.toggleModal();
  }

  RenderStaff({ staff }) {
    switch (staff.departmentId) {
      case "Dept01":
        staff.departmentId = "Sale";
        break;
      case "Dept02":
        staff.departmentId = "HR";
        break;
      case "Dept03":
        staff.departmentId = "Marketing";
        break;
      case "Dept04":
        staff.departmentId = "IT";
        break;
      case "Dept05":
        staff.departmentId = "Finance";
        break;
    }
    return (
      <div className="col-12">
        <Card key={staff.id}>
          <CardBody>
            <div className="row">
              <div className="col-12 col-sm-4 col-md-3">
                <CardImg width="100%" src={staff.image} alt={staff.name} />
              </div>
              <div className="col-12 col-sm-8 col-md-9">
                <CardTitle>Họ và tên: {staff.name}</CardTitle>
                <CardText>
                  Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}
                </CardText>
                <CardText>
                  Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
                </CardText>
                <CardText>Phòng ban: {staff.departmentId}</CardText>
                <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
              </div>
              <Button onClick={this.toggleModal} type="submit" color="primary">
                <span className="fa fa-pencil"></span> Edit
              </Button>
            </div>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Sửa thông tin nhân viên
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="name" sm={4}>
                  Tên
                </Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tên"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="doB" sm={4}>
                  Ngày sinh
                </Label>
                <Col sm={8}>
                  <Input
                    type="date"
                    id="doB"
                    name="doB"
                    placeholder="Ngày sinh"
                    value={this.state.doB}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="startDate" sm={4}>
                  Ngày vào công ty
                </Label>
                <Col sm={8}>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    placeholder="startDate"
                    value={this.state.startDate}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="departmentId" sm={4}>
                  Phòng ban
                </Label>
                <Col sm={8}>
                  <Input
                    type="select"
                    id="departmentId"
                    name="departmentId"
                    value={this.state.departmentId}
                    onChange={this.handleInputChange}
                  >
                    <option value="Dept01">Sale</option>
                    <option value="Dept02">HR</option>
                    <option value="Dept03">Marketing</option>
                    <option value="Dept04">IT</option>
                    <option value="Dept05">Finance</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="salaryScale" sm={4}>
                  Hệ số lương
                </Label>
                <Col sm={8}>
                  <Input
                    type="number"
                    id="salaryScale"
                    name="salaryScale"
                    placeholder="1.0 -> 3.0"
                    value={this.state.salaryScale}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="annualLeave" sm={4}>
                  Số ngày nghỉ còn lại
                </Label>
                <Col sm={8}>
                  <Input
                    type="number"
                    id="annualLeave"
                    name="annualLeave"
                    placeholder="Số ngày nghỉ còn lại"
                    value={this.state.annualLeave}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="overTime" sm={4}>
                  Số ngày đã làm thêm
                </Label>
                <Col sm={8}>
                  <Input
                    type="number"
                    id="overTime"
                    name="overTime"
                    placeholder="Số ngày đã làm thêm"
                    value={this.state.overTime}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Button type="submit" color="primary">
                    Update
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }

  render() {
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
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/nhanvien">Nhân Viên</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.staff.name}</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div className="row">
            <this.RenderStaff
              staff={this.props.staff} //mac dinh staff={this.props.staff} ko doi
              patchStaff={this.props.patchStaff}
            />
          </div>
          <hr />
        </div>
      );
  }
}

export default StaffDetail;
