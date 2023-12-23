import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

export default class Carousel extends Component {
  render() {
    const settings = {
      customPaging: function (i) {
        return (
       
            <a>
            <img  src={require("../../../image/imagehero1.jpg")} />
            {/* <img  src={require("../../../image/imagehero2.jpg")} /> */}
          </a>
          
        
          
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Slider {...settings}  >
          <div className="styleImage">
            <img width="80%"  src={require("../../../image/imagehero1.jpg")} />
          </div>
          <div className="styleImage">
            <img width="80%"  src={require("../../../image/imagehero2.jpg")} />
          </div>
        </Slider>
      </div>
    );
  }
}
