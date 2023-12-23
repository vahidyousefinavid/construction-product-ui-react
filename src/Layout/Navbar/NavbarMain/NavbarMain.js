import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../logo.svg";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./NavbarMain.css";

const NavbarMain = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="row ">
      <Navbar
        expand="lg"
        // className="bg-body-tertiary"
        style={{ backgroundColor: "inherit" }}
      >
        {/* <Container> */}
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-around">
          <div className="col-lg-4">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="font-iransans"  >خانه</Nav.Link>
              <Nav.Link href="#link" className="font-iransans"  >صفحه اصلی</Nav.Link>
              <Nav.Link href="#link" className="font-iransans"  >نقضه راه</Nav.Link>
              <Nav.Link href="#link"  className="font-iransans" >لینک</Nav.Link>
              <NavDropdown title="لیست" id="basic-nav-dropdown" className="font-iransans" >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
          <div className="styleLogo col-lg-2">
            <div>
              <img src={logo} />
            </div>
          </div>
          <div className="col-lg-3 row" style={{ alignItems: "center" }}>
            <div className="styleInput relative col-9">
              <input type="text" className="font-iransans" placeholder="جستجو ..." />
              <img
                className="absolute top-2"
                src={require("../../../image/icons8-search-30.png")}
              />
            </div>
            <div className="col-2">
              <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#2310b7",
                  padding: "10px",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                A
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  <Button
                    aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}
                    style={{
                      borderRadius: "50%",
                      backgroundColor: "#2310b7",
                      padding: "10px",
                      fontSize: "25px",
                      fontWeight: "bold",
                    }}
                  >
                    A
                  </Button>
                  <p className="font-iransans">متن آزمایشی 6</p>
                </Typography>
              </Popover>
            </div>
          </div>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
};

export default NavbarMain;
