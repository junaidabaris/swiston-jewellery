import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./TrendingSearche";
import "../../../components/ui-components/TrendingSearches/TrendingSearche.css";
import caret1 from "../../../images/TrendingSearchesImg/gifts-under-20k.jpg";
import { IoIosTrendingUp } from "react-icons/io";
import caret2 from "../../../images/TrendingSearchesImg/search.jpg";
import caret3 from "../../../images/TrendingSearchesImg/multi-pierce.jpg";
import caret4 from "../../../images/TrendingSearchesImg/infinity.jpg";
import caret5 from "../../../images/TrendingSearchesImg/bestseller.jpg";
// import subcaret1 from "../../images/TrendingSearchesImg/bestseller.jpgsubcaret1";
import subcaret1 from "../../../images/TrendingSearchesImg/caret1.png";
import subcaret2 from "../../../images/TrendingSearchesImg/caret2.png";
import subcaret3 from "../../../images/TrendingSearchesImg/caret3.png";

import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import TrendingSlide from "./TrendingSlide";

const TrendingSearche = ({ show, setShow }) => {
  const settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  const handleClose = () => setShow(false);
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="w-100vh">
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <section className="tranding-searche">
            <div className="">
              <div className="d-flex bg">
                <div className="color_section">
                  <div className="container p-0">
                    {/* here start treanding  */}
                    <div className="d-flex justify-content-between">
                      <h2 className="trending-heading">Trending Searches</h2>
                    </div>

                    <div className="wrapper-trending">
                      <div className="main">
                        <div>
                          <a href="#">
                            {" "}
                            <i className="me-4 treand-icon">
                              <IoIosTrendingUp />
                            </i>
                          </a>
                          <a href="#">
                            <span>Gifts under 20k</span>
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            {" "}
                            <img
                              src={caret1}
                              className="float-end  treanding-image"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="main px-2">
                        <div>
                          <a href="#">
                            <i className="me-4  treand-icon">
                              <IoIosTrendingUp />
                            </i>
                          </a>
                          <a href="#">
                            {" "}
                            <span>New Arrivals</span>
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            {" "}
                            <img
                              src={caret2}
                              className="float-end  treanding-image"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="main">
                        <div>
                          <a href="#">
                            <i className="me-4 treand-icon">
                              <IoIosTrendingUp />
                            </i>
                          </a>
                          <a href="#">
                            <span>Multipierce Earrings</span>
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <img
                              src={caret3}
                              className="float-end  treanding-image"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="main">
                        <div>
                          <a href="#">
                            <i className="me-4 color treand-icon">
                              <IoIosTrendingUp />
                            </i>
                          </a>
                          <a href="#">
                            <span> Bestsellers</span>
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <img
                              src={caret4}
                              className="float-end  treanding-image"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="main">
                        <div>
                          <a href="">
                            <i className="me-4  treand-icon">
                              <IoIosTrendingUp />
                            </i>
                          </a>
                          <a href="#">
                            <span>Infinity Jewellery</span>
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <img
                              src={caret5}
                              className="float-end treanding-image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* here start continue your brouser */}
                    <section className="recently_viewed">
                      <div className="auto_container">
                        <h2 className=" mb-4 " style={{ fontSize: 24 }}>
                          Recently Viewed
                        </h2>
                        <div>
                          <Slider {...settings1}>
                            <div className="view_product">
                              <img
                                src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08153-1YP9RS_12_listhover.jpg"
                                alt=""
                              />
                              <div className="rate_flex">
                                <p>₹14,256 </p>
                                <span>₹15,840</span>
                              </div>
                              <div className="item_name">
                                <span>Glinty Pair Gemstone Ring</span>
                              </div>
                            </div>
                            <div className="view_product">
                              <img
                                src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE08319-1RP9P0_11_listfront.jpg"
                                alt=""
                              />
                              <div className="rate_flex">
                                <p>₹14,256 </p>
                                <span>₹15,840</span>
                              </div>
                              <div className="item_name">
                                <span>Glinty Pair Gemstone Ring</span>
                              </div>
                            </div>
                            <div className="view_product">
                              <img
                                src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE08319-1RP9P0_11_listfront.jpg"
                                alt=""
                              />
                              <div className="rate_flex">
                                <p>₹14,256 </p>
                                <span>₹15,840</span>
                              </div>
                              <div className="item_name">
                                <span>Glinty Pair Gemstone Ring</span>
                              </div>
                            </div>
                            <div className="view_product">
                              <img
                                src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE08319-1RP9P0_11_listfront.jpg"
                                alt=""
                              />
                              <div className="rate_flex">
                                <p>₹14,256 </p>
                                <span>₹15,840</span>
                              </div>
                              <div className="item_name">
                                <span>Glinty Pair Gemstone Ring</span>
                              </div>
                            </div>
                            <div className="view_product">
                              <img
                                src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE08319-1RP9P0_11_listfront.jpg"
                                alt=""
                              />
                              <div className="rate_flex">
                                <p>₹14,256 </p>
                                <span>₹15,840</span>
                              </div>
                              <div className="item_name">
                                <span>Glinty Pair Gemstone Ring</span>
                              </div>
                            </div>
                            <div className="view_product">
                              <img
                                src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE08319-1RP9P0_11_listfront.jpg"
                                alt=""
                              />
                              <div className="rate_flex">
                                <p>₹14,256 </p>
                                <span>₹15,840</span>
                              </div>
                              <div className="item_name">
                                <span>Glinty Pair Gemstone Ring</span>
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </div>
                    </section>
                    <div className="row g-4">
                      <h2 className="continue-heading">
                        Continue Your Browsing
                      </h2>
                      <div className="col-6 sm-col-12">
                        <div className="continue-browsing">
                          <p className="browsing-prf">
                            Under
                            5000-5K-10K-15K-20K-Earrings-Rings-Necklaces-Pendants-Bracelets-Charms-Adjustable
                            Rings-Baby Bangles
                          </p>
                          <div className="main-continue d-flex align-content-center ">
                            <div className="continue-images">
                              <a href="#">
                                <img src={subcaret1} />
                              </a>
                            </div>
                            <div className="continue-images">
                              <a href="#">
                                <img src={subcaret2} />
                              </a>
                            </div>
                            <div className="continue-images">
                              <a href="#">
                                <img src={subcaret3} />
                              </a>
                            </div>
                            <div className="continue-images">
                              <a href="#">
                                <img src={subcaret1} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 sm-col-12">
                        <div className="continue-browsing">
                          <p className="browsing-prf">Jewellery</p>
                          <div className="main-continue d-flex align-content-center ">
                            <div className="continue-images">
                              <a href="#">
                                <img src={subcaret1} />
                              </a>
                            </div>
                            <div className="continue-images">
                              <a href="#">
                                <img src={subcaret1} />
                              </a>
                            </div>
                            <div className="continue-images">
                              <a href="#">
                                <img src={subcaret1} />
                              </a>
                            </div>
                            <div className="continue-images">
                              <a href="#">
                                <img src={subcaret1} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 sm-col-12 mt-5">
                        <div
                          className="continue-browsing"
                          n
                          style={{ backgroundColor: "rgb(233, 244, 249)" }}>
                          <p className="browsing-prf">Jewellery</p>
                          <div className="main-continue d-flex align-content-center ">
                            <div className="continue-images">
                              <a href="#">
                                <img src={subcaret1} />
                              </a>
                            </div>
                            <div className="continue-images">
                              <a href="#">
                                <img src={subcaret1} />
                              </a>
                            </div>
                            <div className="continue-images">
                              <a href="#">
                                <img src={subcaret1} />
                              </a>
                            </div>
                            <div className="continue-images">
                              <a href="#">
                                <img src={subcaret1} />
                              </a>
                            </div>
                            {/* <div className="continue-images-number">
                          <p>49999</p>
                      </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default TrendingSearche;
