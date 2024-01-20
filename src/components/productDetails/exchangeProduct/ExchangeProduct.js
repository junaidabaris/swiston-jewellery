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
function ExchangeProduct() {
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
      <div className="exchange_product mt-5">
        <div>
          <Slider {...settings}>
            <div>
              <Link to="/refer-and-earn">
                <div className="exchange_product_box">
                  <div className="exchange_product_content">
                    <h6>Refer and Earn</h6>
                    <p>
                      Refer 5 or more friends today and earn upto 750 Clusive
                      Point.
                    </p>
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
            <div>
              <div className="exchange_product_box">
                <div className="exchange_product_content">
                  <h6>Old Gold Exchange</h6>
                  <p>Enjoy 0% Deduction on your gold exchange value.</p>
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
            </div>
            <div>
              <div className="exchange_product_box">
                <div className="exchange_product_content">
                  <h6>Pay in 6 installments</h6>
                  <p>
                    Refer 5 or more friends today and earn upto 750 Clusive
                    Point.
                  </p>
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
            </div>
            <div>
              <div className="exchange_product_box">
                <div className="exchange_product_content">
                  <h6>Refer and Earn</h6>
                  <p>
                    Refer 5 or more friends today and earn upto 750 Clusive
                    Point.
                  </p>
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
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ExchangeProduct;
