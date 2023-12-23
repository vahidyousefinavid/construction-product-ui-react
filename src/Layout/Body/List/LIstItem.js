import React from "react";
import felesh from "./felesh.svg";
import LogoSave from "../../Navbar/LogoSave.svg";
import LogoLike from "../../Navbar/LogoLike.svg";
import listimg1 from "./listimg1.png";
import listimg2 from "./listimg2.jpg";
import listimg3 from "./listimg3.jpg";
import listimg4 from "./listimg4.png";
import "./ListItem.css"
const LIstItem = () => {
  const items = [
    { id: 1, src: listimg1, SVG1: felesh, SVG2: LogoLike, SVG3: LogoSave },
    { id: 2, src: listimg2, SVG1: felesh, SVG2: LogoLike, SVG3: LogoSave },
    { id: 3, src: listimg3, SVG1: felesh, SVG2: LogoLike, SVG3: LogoSave },
    { id: 4, src: listimg4, SVG1: felesh, SVG2: LogoLike, SVG3: LogoSave },
  ];

  return (
    <div className="containe lg:w-3/4  sm:w-1/5 m-auto">
      <div className="row justify-evenly ">
        {items.map((item, index) => (
          <div className="col-6 col-lg-3 z-30" key={index}>
            <div className="text-center mb-3 relative">
              <img className="rounded-lg StyleImsge"  src={item.src} />
              <img className="absolute top-1 feleshStyle right-2" src={item.SVG1} />
              <div className=" absolute  flex z-40 bottom-0 styleImg w-full h-1/4">
                <img
                  className=" z-50 lg:size-10 sm:size-7 ml-2  bg-white rounded-full p-2"
                  src={item.SVG2}
                />
                <img
                  className="z-50  lg:size-10 sm:size-7    bg-white rounded-full p-2"
                  src={item.SVG3}
                />
              </div>
            </div>
          </div>
        ))}
        {/* 
      <div className="col-sm-6 col-lg-2">
        <div className="relative"> 
          <img className="rounded-2xl " src={require("./listimg1.png")} />
          <img className="absolute top-2 right-3" src={felesh}/>
          <div className="flex flex-row absolute">
            <div className="col-6 relative">
            <img className="absolute" src={LogoLike}/>
            <img className="absolute" src={LogoSave}/>
            </div>
            <div className="col-6">

            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2">
        <div className="relative">
          <img className="rounded-2xl" src={require("./listimg2.jpg")} />
          <img className="absolute top-2 right-3 " src={felesh}/>
          <div className="flex flex-row absolute">
            <div className="col-6">
            <img className="absolute" src={LogoLike}/>
            <img className="absolute" src={LogoSave}/>
            </div>
            <div className="col-6">
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2">
        <div className="relative">
          <img className="rounded-2xl" src={require("./listimg3.jpg")} />
          <img className="absolute top-2 right-3 " src={felesh}/>
          <div className="flex flex-row absolute">
            <div className="col-6">
            <img className="absolute" src={LogoLike}/>
            <img className="absolute" src={LogoSave}/>
            </div>
            <div className="col-6">
              
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-2">
        <div className="relative">
          <img className="rounded-2xl" src={require("./listimg4.png")} />
          <img className="absolute top-2 right-3 " src={felesh}/>
          <div className="flex flex-row absolute z-50">
            <div className="col-6">
            <img className="absolute" src={require('./listimg1.png')}/>
            <img className="absolute" />
            </div>
            <div className="col-6">
              
            </div>
          </div>
        </div>
      </div>
    </div> */}
      </div>
    </div>
  );
};

export default LIstItem;
