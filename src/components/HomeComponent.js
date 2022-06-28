import React from "react";
import { Jumbotron } from "reactstrap";

function Home() {
  return (
    <div>
      <div>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6 col-md-12">
                <h1>Ứng dụng quản lý nhân viên v2.0</h1>
                <p>
                  Môn học: RJS101x_01-A_VN_Lập trình web front end với react
                </p>
                <p>Bài tập số: Assignment 2</p>
                <p>Tên dự án: React Router và SPA</p>
                <p>Tác giả: Vũ Ngọc Trung</p>
                <p>Người thực hiện: Lê Anh Huỳnh</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    </div>
  );
}

export default Home;
