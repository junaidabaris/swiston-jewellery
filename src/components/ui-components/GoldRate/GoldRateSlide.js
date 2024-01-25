import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../components/ui-components/GoldRate/GoldRateSlide.css";
import GoldRateCard from "./GoldRateCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
export default function GoldRateSlide() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
     <div className="d-flex explore-button-contant py-4">
          <h4>Invest in Gold Jewellery</h4>
          <button className="explore-button">
            <a href="#"> Explore Gold Jewellery</a>
          </button>
        </div>
      <div className="container">
        
        <Slider {...settings}>
          <div>
            <GoldRateCard />
          </div>
          <div>
            <GoldRateCard />
          </div>
          <div>
            <GoldRateCard />
          </div>
          <div>
            <GoldRateCard />
          </div>
          <div>
            <GoldRateCard />
          </div>
          <div>
            <GoldRateCard />
          </div>
        </Slider>
      </div>
    </>
  );
}
