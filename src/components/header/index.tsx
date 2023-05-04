import { DataPublicSelector } from "@/sp/redux/slice/data";
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";

const Sim_Header = () => {
  const Categorys = useSelector(DataPublicSelector.Categorys);
  const removeAscent = (str: string) => {
    if (str === null || str === undefined) {
      return str;
    } else {
      str = str.toLowerCase();
      str = str.trim();
      str = str.replace("-", "");
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      let myarray = str.split(" ");
      let newStr = myarray.join("");
      return newStr;
    }
  };
  return (
    <section id="sim_header">
      <div id="header_top" className="bg_blue">
        <div className="w-95">
          <Navbar expand="lg" className="p-0">
            <Container fluid>
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Liên hệ</Nav.Link>
                  <Nav.Link href="#action1">Thanh toán</Nav.Link>
                  <Nav.Link href="#action1">Về chúng tôi</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#action1">Đăng nhập</Nav.Link>
                  <Nav.Link href="#action1">Đăng ký</Nav.Link>
                  <Nav.Link href="#action1">Giỏ hàng</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
      <div id="header_main" className="bg_red">
        <div className="w-95">
          <Navbar expand="lg">
            <Container fluid>
              <Navbar.Brand href="/">
                <div className="logo">
                  <div className="g4">
                    <span className="material-symbols-outlined">sim_card</span>
                    <span>G</span>
                  </div>
                  <span className="data">DATA</span>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="/">TRANG CHỦ</Nav.Link>
                  {Categorys?.map((item, index) => {
                    return (
                      <Nav.Link
                        key={index}
                        href={`/${removeAscent(item.name)}`}
                      >
                        {item.name.toLocaleUpperCase()}
                      </Nav.Link>
                    );
                  })}
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Nơi bạn muốn đến"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-primary">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </section>
  );
};

export default Sim_Header;
