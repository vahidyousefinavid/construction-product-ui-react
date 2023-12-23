import React from "react";
import LogoSave from "./LogoSave.svg";
import LogoLike from "./LogoLike.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar2.css";
const Navbar2 = () => {
  return (
    <div className="row sm:justify-around">
     
       <div className=" col-lg-5">
        <button className="bg-slate-900 text-white  inline py-2 rounded-full w-48">
          کلیک کنید
        </button>
        <img
          className="mr-4 inline border rounded-full w-7 h-7 p-1"
          src={LogoSave}
        />
        <img
          className="mr-4 inline border rounded-full w-7 h-7 p-1"
          src={LogoLike}
        />
      </div>
      <div className=" col-lg-5">
        <div className="flex justify-end">
          <div className="basus-1/2">
            <h5>متن آزمایشی</h5>
            <p className="textheader">
              <span className="moon"></span>
              اتصال به شبکه
            </p>
          </div>
          <div className="basus-1/2">
            <img src={require("../../image/1.png")} />
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Navbar2;
