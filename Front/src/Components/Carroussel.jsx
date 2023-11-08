import React from 'react';
import Slider from "react-slick";
import '.././CSS/style.css';

const CarouselPage = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    

  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://www.bettybossi.ch/rdbimg/bb_itku120801_0243a/bb_itku120801_0243a_r01_v004_x0020.jpg" />
      </div>
      <div>
        <img src="https://www.bettybossi.ch/rdbimg/bb_itku120801_0243a/bb_itku120801_0243a_r01_v004_x0020.jpg" />
      </div>
      <div>
        <img src="https://www.bettybossi.ch/rdbimg/bb_itku120801_0243a/bb_itku120801_0243a_r01_v004_x0020.jpg" />
      </div>
    </Slider>
  );
};

export default CarouselPage;