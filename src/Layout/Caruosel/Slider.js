import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "../../image/slide1.png";
import Slide2 from "../../image/slide2.png";
import Slide3 from "../../image/slide3.png";
import Slide4 from "../../image/slide4.jpg";
import Slide5 from "../../image/slide5.jpg";
import Slide6 from "../../image/slide6.png";
import Slide7 from "../../image/slide7.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper/modules";
const Slider = () => {
  const Slides = [
    { id: 1, src: Slide1 },
    { id: 1, src: Slide2 },
    { id: 1, src: Slide3 },
    { id: 1, src: Slide4 },
    { id: 1, src: Slide5 },
    { id: 1, src: Slide5 },
    { id: 1, src: Slide6 },
    { id: 1, src: Slide7 },
  ];
  return (
    <div className="Containerr">
      <Swiper
        style={{ marginBottom: "50px" }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Slides.map((item, index) => (
          <SwiperSlide key={index} style={{ position: "relative" }}>
            <img style={{ height: "25rem" }} src={item.src} />
            <h4 className="font-iransans" style={{ position: "absolute", bottom: "3rem", fontSize: "20px",fontWeight:"bold" }}>
              ازخشت اول با شما هستیم
            </h4>
            <span className="font-iransans absolute bottom-3" style={{color:"#000", fontSize:"15px"}}>دیدن پروژه</span>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <img src={require("../../image/home1.jpg")} />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
