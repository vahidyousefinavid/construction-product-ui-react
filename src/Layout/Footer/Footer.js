import React from "react";
import "./Footer.css";
import Logo from "../../image/Logo.svg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Bottom from "../../image/bottom.png";
import Twitter from "../../image/icons8-twitter.svg";
import Facebook from "../../image/icons8-facebook.svg";
import G from "../../image/icons8-google-old.svg";
import Insta from "../../image/icons8-insta.svg";
const Footer = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="Conntaineer font-iransans"
      style={{
        marginTop: "60px",
        backgroundColor: "#2d2c33",
        color: "#fff",
        padding: "5rem",
      }}
    >
      <div className="row" style={{ position: "relative" }}>
        <div className="col-sm-12 col-lg-3 mb-10">
          <div style={{ borderTop: "1px solid #fff" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "15px",
                paddingTop: "10px",
              }}
            >
              خبرنامه
            </h1>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است. خدمات ترجمه
              تخصصی ما که در کلاس جهانی ارائه می‌شود به شما کمک می‌کند
            </p>
            <input type="text" placeholder="آدرس ایمیل..." />
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 mb-10">
          <div style={{ borderTop: "1px solid #fff" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "15px",
                paddingTop: "10px",
              }}
            >
              لینک های سریع
            </h1>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              1
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              2
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              3
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              4
            </h3>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 mb-10">
          <div style={{ borderTop: "1px solid #fff" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "15px",
                paddingTop: "10px",
              }}
            >
              شرکت
            </h1>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              درباره ما
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              تیم
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              مشاغل
            </h3>
            <h3
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              دفاتر
            </h3>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 mb-10">
          <div>
            <h6 style={{ width: "6rem", marginBottom: "15px" }}>
              <img style={{ color: "#fff" }} src={Logo} />
            </h6>
            <p
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#7b7777",
                marginBottom: "12px",
              }}
            >
              کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است. خدمات ترجمه
              تخصصی ما که در کلاس جهانی ارائه می‌شود به شما کمک می‌کند
            </p>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{
                  backgroundColor: "#787373",
                  color: "#fff",
                  border: "none",
                  borderRadius: "3px",
                  padding: "8px 30px",
                  position: "relative",
                  fontFamily: "iransans",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    right: "11rem",
                    width: "1.5rem",
                    color: "#fff",
                  }}
                >
                  <img src={Bottom} />
                </span>
                لیست شرکت های همکار
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
            
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
            <div
              className="row StyleObject"
              style={{ position: "absolute", bottom: "-3rem",alignItems:"center" }}
            >
              <div className="col-6 col-lg-3" >
                <div style={{display:"inline-block"}}>
                  <img src={Twitter} />
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "50px",
                    padding: "4px",
                    display:"inline-block"
                  }}
                >
                  <img src={Facebook} />
                </div>
              </div>

              <div className="col-6 col-lg-3">
                <div
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "50px",
                    padding: "4px",
                    display:"inline-block"
                  }}
                >
                  <img src={G} />
                </div>
              </div>

              <div className="col-6 col-lg-3">
                <div style={{
                    backgroundColor: "#fff",
                    borderRadius: "50px",
                    padding: "4px",
                    display:"inline-block"
                  }}>
                  <img src={Insta} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
