import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./SlideT.css";
import photo1 from "./../../image/slide1.png";
import photo2 from "./../../image/slide2.png";
// import photo3 from './../../image/slide3.png'

const SliText = [
  {
    id: 1,
    src: photo1,
    title1: "اخبار1",
    title2: "500 مشتری",
    text: "کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است",
    date: "1.2.2023",
  },
  {
    id: 2,
    src: photo2,
    title1: "اخبار2",
    title2: "300 مشتری",
    text: "کلید ارتباط موثر با جهان سخن گفتن به زبان جهانیان است",
    date: "3.5.2023",
  },
];
const SlideT = () => {
  return (
    <div className="mb-12 Conntainer">
      <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {SliText.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="row mb-6 justify-evenly">
                <div className=" col-sm-12 col-lg-5">
                  <div>
                    <h1
                      style={{
                        fontSize: "40px",
                        fontWeight: "bold",
                        marginBottom: "4rem",
                      }}
                    >
                      {item.title2}
                    </h1>
                    <p>{item.text}</p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-5 ">
                  <div className="row mb-16">
                    <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                      {item.title1}
                    </h1>
                  </div>
                  <div className="row text-center mb-12 styleRow">
                    <div className="col-5">
                      <div className="">
                        <h6
                          style={{
                            marginBottom: "10px",
                            color: "#7b7777",
                            textAlign: "end",
                            fontSize: "12px",
                            fontWeight: "bold",
                          }}
                        >
                          {item.date}
                        </h6>
                        <p
                          className="font-iransans"
                          style={{ textAlign: "justify" }}
                        >
                          {" "}
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div>
                        <img src={item.src} />
                      </div>
                    </div>
                  </div>
                  <div className="row text-center mb-12 styleRow">
                    <div className="col-5">
                      <div className="">
                        <h6
                          style={{
                            marginBottom: "10px",
                            color: "#7b7777",
                            textAlign: "end",
                            fontSize: "12px",
                            fontWeight: "bold",
                          }}
                        >
                          {item.date}
                        </h6>
                        <p
                          className="font-iransans"
                          style={{ textAlign: "justify" }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div>
                        <img src={item.src} />
                      </div>
                    </div>
                  </div>
                  <div className="row text-center mb-12 styleRow">
                    <div className="col-5">
                      <div className="">
                        <h6
                          style={{
                            marginBottom: "10px",
                            textAlign: "end",
                            color: "#7b7777",
                            fontSize: "12px",
                            fontWeight: "bold",
                          }}
                        >
                          {item.date}
                        </h6>
                        <p
                          className="font-iransans"
                          style={{ textAlign: "justify" }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div className="col-2">
                      <div>
                        <img src={item.src} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideT;
