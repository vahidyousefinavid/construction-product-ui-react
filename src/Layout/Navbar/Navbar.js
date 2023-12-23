import React, { useRef, useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "./logo.svg";
import Navbar2 from "./Navbar2";

import "./Navbar.css";
import Carousel from "./Carousrl/Carousel";
import Carousel2 from "./Carousrl/Carousel2";
import Comment from "../Body/Comment.svg";
import Details from "../Body/Details.svg";
import Shair from "../Body/Shair.svg";
import TextHero from "../Body/TextHero/TextHero";
import LIstItem from "../Body/List/LIstItem";
import NavbarMain from "./NavbarMain/NavbarMain";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className=" mx-auto px-8">
      <div className="w-full">
        <NavbarMain />
      </div>
      <section className="container px-40">
        <div className="mt-20 mb-5" style={{ direction: "ltr" }}>
          <p>متن آزمایشی3</p>
        </div>
        <div className="w-full">
          <Navbar2 />
        </div>
      </section>
      <section>
        <div className="flex flex-row ">
          <div className="col-sm-2 relative my-30 ">
            <img
              className="mr-4  block border rounded-full w-7 h-7 p-1 my-8"
              src={Comment}
            />
            <span className="absolute top-5 border rounded-full p-1 text-xs">
              20
            </span>
            <img
              className="mr-4 block border rounded-full w-7 h-7 p-1 my-8"
              src={Details}
            />
            <img
              className="mr-4 block border rounded-full w-7 h-7 p-1 my-8 "
              src={Shair}
            />
          </div>
          <div className=" col-sm-10 rounded-xl bg-slate-200 carosel">
            <div className="">
              <Carousel />
              
            </div>
          </div>
        </div>
        <div className="mt-8 mb-24 flex justify-center">
          <TextHero />
        </div>
      </section>
      <section>
        <div className="mb-40">
          <LIstItem />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
