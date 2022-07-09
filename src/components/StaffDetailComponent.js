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
  Row,
  Col,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import dateFormat from "dateformat";
import { Loading } from "./LoadingComponent";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

class StaffDetail extends Component {
  constructor(props) {
    super(props);
    // const department = this.props.department.filter(
    //   (dept) => dept.id === this.props.staff.departmentId
    // )[0].name;
    this.state = {
      isModalOpen: false,
      // id: this.props.staff.id,
      // name: this.props.staff.name,
      // doB: dateFormat(this.props.staff.doB, "mm/dd/yyyy"),
      // startDate: dateFormat(this.props.staff.startDate, "mm/dd/yyyy"),
      // salaryScale: this.props.staff.salaryScale,
      // departmentId: this.props.staff.departmentId,
      // department: department,
      // annualLeave: this.props.staff.annualLeave,
      // overTime: this.props.staff.overTime,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleSubmit(values) {
    const update = {
      id: this.state.id,
      name: values.name,
      doB: values.doB,
      startDate: values.startDate,
      department: values.department,
      salaryScale: values.salaryScale,
      annualLeave: values.annualLeave,
      overTime: values.overTime,
    };
    this.props.patchStaff(update);
    this.toggleModal();
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
            <div className="col-12">
              {/* <h3>{this.props.nv.name}</h3> */}
              <Button onClick={this.toggleModal}>Cập nhật</Button>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                  Thêm Nhân Viên
                </ModalHeader>
                <ModalBody>
                  <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
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
              <hr />
            </div>
          </div>
          <div className="row">
            <RenderStaff
              staff={this.props.staff} //mac dinh staff={this.props.staff} ko doi
              patchStaff={this.props.patchStaff}
            />
          </div>
          <hr />
        </div>
      );
  }
}

function RenderStaff({ staff }) {
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
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default StaffDetail;
