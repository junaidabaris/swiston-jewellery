import React from "react";
import "../exchangeProduct/exchangeProduct.css";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
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
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

const referContent = [
  {
    id: 1,
    referHeading: "Refer and Earn",
    referContent:
      "Refer 5 or more friends today and earn upto 750 Clusive Point.",
    path: "/refer-and-earn",
  },
  {
    id: 2,
    referHeading: "Old Gold Exchange",
    referContent: "Enjoy 0% Deduction on your gold exchange value.",
    path: "",
  },
  {
    id: 3,
    referHeading: "Pay In 6 month installments",
    referContent:
      "Refer 5 or more friends today and earn upto 750 Clusive Point.",
    path: "",
  },
  {
    id: 1,
    referHeading: "Customer Review",
    referContent:
      "Refer 5 or more friends today and earn upto 750 Clusive Point.",
    path: "",
  },
];
function ExchangeProduct() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="exchange_product mt-5">
        <div>
          <Slider {...settings}>
            {referContent.map((referContent, index) => (
              <div key={index}>
                <Link to={referContent.path}>
                  <div className="exchange_product_box">
                    <div className="exchange_product_content">
                      <h6>{referContent.referHeading}</h6>
                      <p>{referContent.referContent}</p>
                    </div>
                    <div className="see_more_content">
                      <p>
                        See More{" "}
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </p>
                      <p className="next">
                        <FaArrowRight />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ExchangeProduct;
