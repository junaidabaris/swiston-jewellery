import React, { useState } from "react";
import "../sidebar/sidebar.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import Example from "./path-to-your-Example-component";
import { PiCopySimpleDuotone } from "react-icons/pi";

import Slider from "react-slick";

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
function Sidebar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow1 = () => setShow(true);
  const settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="icon_box m-2" onClick={handleShow1}>
        <span>
          <PiCopySimpleDuotone />
        </span>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="bottom"
        style={{ height: 400 }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Similar Design</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <section className="">
            <div className="auto_container">
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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
