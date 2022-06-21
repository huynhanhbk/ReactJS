import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logofunix.jpg"
              height="40"
              width="41"
              alt="logo"
            />
          </NavbarBrand>
          <Collapse navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/trangchu">
                  <span className="fa fa-home fa-lg"></span> Trang Chủ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/nhanvien">
                  <span className="fa fa-user-circle fa-lg"></span> Nhân Viên
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/phongban">
                  <span className="fa fa-address-card fa-lg"></span> Phòng Ban
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/bangluong">
                  <span className="fa fa-money fa-lg"></span> Bảng Lương
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      {/* <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante Con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culimate senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron> */}
    </React.Fragment>
  );
}

export default Header;
