import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export default function Silder({ item }) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="next" onClick={onClick}>
        <MdOutlineNavigateNext />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="prev" onClick={onClick}>
        <GrFormPrevious />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="silder">
        <Slider {...settings} className="slider_box">
          {item?.gallery_image &&
            item?.gallery_image?.map((item) => {
              return (
                <div className="card_img" key={item?.id}>
                  <Link to="/product-details">
                    {" "}
                    <img src={item.url} alt="ring" />
                  </Link>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
}
