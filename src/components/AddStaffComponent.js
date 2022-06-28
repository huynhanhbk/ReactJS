import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

class AddStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //isNavOpen: false,
      isModalOpen: false,
    };

    //this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  //   toggleNav() {
  //     this.setState({
  //       isNavOpen: !this.state.isNavOpen,
  //     });
  //   }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <div className="row">
        <div>
          <Button onClick={this.toggleModal}>+</Button>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Thêm Nhân Viên</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup row>
                  <Label md={4}>Tên</Label>
                  <Col md={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md={4}>Ngày sinh</Label>
                  <Col md={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md={4}>Ngày vào công ty</Label>
                  <Col md={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md={4}>Phòng ban</Label>
                  <Col md={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md={4}>Hệ số lương</Label>
                  <Col md={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md={4}>Số ngày nghỉ còn lại</Label>
                  <Col md={8}>
                    <Input />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label md={4}>Số ngày đã làm thêm</Label>
                  <Col md={8}>
                    <Input />
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
    );
  }
}

export default AddStaff;
