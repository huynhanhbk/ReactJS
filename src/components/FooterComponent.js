import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Liên kết</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Trang chủ</Link>
              </li>
              <li>
                <Link to="/nhanvien">Nhân viên</Link>
              </li>
              <li>
                <Link to="/phongban">Phòng ban</Link>
              </li>
              <li>
                <Link to="/bangluong">Bảng lương</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Về chúng tôi</h5>
            <address>
              Tầng 0 tòa nhà FPT
              <br />
              Phố Duy Tân, Cầu Giấy
              <br />
              Hà Nội
              <br />
              <i className="fa fa-phone fa-lg"></i>: +84 78 231 3602
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:info@funix.edu.vn">info@funix.edu.vn</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google m-1"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook m-1"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin m-1"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter m-1"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google m-1"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a className="btn btn-social-icon m-1" href="mailto:">
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>Copyright by HuynhLA_FX16319</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
