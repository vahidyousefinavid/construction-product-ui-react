import React from "react";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "./../../image/Logo.svg";
import { Link } from "react-router-dom";
import "./NavbarMain.css";
const NavbarMain = () => {
  return (
    <div>
      <div className="Container">
        <Navbar expand="lg" className=" font-iransans">
          {/* <Container> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-around sm:z-0"
          >
            <div className="col-lg-1 text-center">
              <span>فارسی/انگلیسی</span>
            </div>
            <div className="col-lg-8">
              <Nav className="me-auto justify-center">
                <Nav.Link
                  href="#home"
                  style={{ color: "#000", fontWeight: "bold" }}
                >
                  خانه
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  style={{ color: "#000", fontWeight: "bold" }}
                >
                  دیده شوید
                </Nav.Link>
                
                <Nav.Link
                  href="#link"
                  style={{ color: "#000", fontWeight: "bold" }}
                >
                  درباره ما
                  
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  style={{ color: "#000", fontWeight: "bold" }}
                ></Nav.Link>
                <Nav.Link
                  href="#link"
                  style={{ color: "#000", fontWeight: "bold" }}
                >
                  پنل فروشکاه
                </Nav.Link>
                <Nav.Link
                  href="#link"
                  style={{ color: "#000", fontWeight: "bold" }}
                >
                  نقشه راه
                </Nav.Link>
              </Nav>
            </div>
            <div className="col-lg-1">
              <span>
                <img className="w-15" src={Logo} />
              </span>
            </div>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarMain;
