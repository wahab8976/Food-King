import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CarouselReal = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Link to="/menu">
      <div className="md:w-[50vw] mb-5 w-[80vw] mx-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative rounded-sm">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto "
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
                <span></span>
                <h3 className="text-xl">{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Link>
  );
};

export default CarouselReal;
