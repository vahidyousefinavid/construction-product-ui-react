import React from 'react'
import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src="../../../image/imagehero1.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img src="../../../image/imagehero1.jpg" onDragStart={handleDragStart} role="presentation" />,
    <img src="../../../image/imagehero1.jpg" onDragStart={handleDragStart} role="presentation" />,
  ];
const Carousel2 = () => {
  return (
    <div>
       <AliceCarousel mouseTracking items={items} />
       {/* <img src={require('../../../image/imagehero1.jpg')}/> */}
    </div>
  )
}

export default Carousel2
