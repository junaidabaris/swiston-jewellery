import React from "react";
import "../productDetails/productDetails.css";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { FaRegGrinHearts } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { PiCopySimpleDuotone } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RxDimensions } from "react-icons/rx";
import { GiWeight } from "react-icons/gi";
import { TbCircleDashed } from "react-icons/tb";
import { IoDiamond } from "react-icons/io5";
import PriceBreakupDetails from "./priceBreakupDetails/PriceBreakupDetails";
import NearLocation from "./nearLocation/NearLocation";
import ServiceTileSection from "./serviceTileSection/ServiceTileSection";
import { Link } from "react-router-dom";
import ProductSelectSize from "./productSelectSize/ProductSelectSize";
import Modal from "react-modal";
import Sidebar from "./sidebar/Sidebar";
import Backdrop from "./backdrop/Backdrop";
import CallSchedule from "./callSchedule/CallSchedule";
import ExchangeProduct from "./exchangeProduct/ExchangeProduct";
import ProductRelatedCategories from "./productRelatedCategories/ProductRelatedCategories";
import SimilarProduct from "./similarProduct/SimilarProduct";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
function ProductDetails() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  // const [isProfileBoxOpen, setIsProfileBoxOpen] = useState(null);
  // const toggleProfileBox = (index) => {
  //   setIsProfileBoxOpen((preIndex) => (preIndex === index ? null : index));
  //   console.log("Toggling profile box");
  // setIsProfileBoxOpen(!isProfileBoxOpen);
  // };
  // const [items, setItems] = useState(null);
  // const openItems = (index) => {
  //   setItems((prevTndex) => (prevTndex === index ? null : index));
  // };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <section>
        <div className="row p-0 m-0">
          <div className="col-lg-5 slide_breadcrumb_image">
            <div className="auto_container">
              <div className="breadcrumbs">
                <p>
                  Home{" "}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </p>
                <p>
                  Rings{" "}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </p>
                <p>
                  Diamond Rings{" "}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </p>
                <p>Infinty Fore Life Diamond Ring </p>
              </div>
              <div>
                <Slider asNavFor={nav2} ref={slider1}>
                  <div className="slick1_image">
                    <img
                      src="https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_1_lar.jpg"
                      alt=""
                    />
                  </div>
                  <div className="slick1_image">
                    <img
                      src="https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_3_lar.jpg"
                      alt=""
                    />
                  </div>
                  <div className="slick1_image">
                    <img
                      src="https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_5_lar.jpg"
                      alt=""
                    />
                  </div>
                  <div className="slick1_image">
                    <img
                      src="https://cdn.caratlane.com/media/static/images/Placeholder/Placeholder.png"
                      alt=""
                    />
                  </div>
                  <div className="slick1_image">
                    <img
                      src="https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_9_lar.jpg"
                      alt=""
                    />
                  </div>
                  <div className="slick1_image">
                    <img
                      src="https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_4_lar.jpg"
                      alt=""
                    />
                  </div>
                </Slider>
                <Slider
                  asNavFor={nav1}
                  ref={slider2}
                  slidesToShow={6}
                  swipeToSlide={true}
                  focusOnSelect={true}>
                  <div className="slick2_image">
                    <img
                      src="https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_1_lar.jpg"
                      alt=""
                    />
                  </div>
                  <div className="slick2_image">
                    <img
                      src="https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_3_lar.jpg"
                      alt=""
                    />
                  </div>
                  <div className="slick2_image">
                    <img
                      src="https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_5_lar.jpg"
                      alt=""
                    />
                  </div>
                  <div className="slick2_image">
                    <img
                      src="https://cdn.caratlane.com/media/static/images/Placeholder/Placeholder.png"
                      alt=""
                    />
                  </div>
                  <div className="slick2_image">
                    <img
                      src="https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_9_lar.jpg"
                      alt=""
                    />
                  </div>
                  <div className="slick2_image">
                    <img
                      src="https://cdn.caratlane.com/media/catalog/product/J/R/JR06350-1RP600_4_lar.jpg"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>
              <div className="slick_image_flex">
                <div className="slick_image_item">
                  <span>
                    <HiOutlineCurrencyRupee />
                  </span>
                  <p>15 Day Money Back</p>
                </div>
                <div className="slick_image_item">
                  <span>
                    <FaRegGrinHearts />
                  </span>
                  <p>Lifetime Exchange</p>
                </div>
                <div className="slick_image_item">
                  <span>
                    <FaRegStar />
                  </span>
                  <p>100% Certified</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 product_content_details_background">
            <div className="rating_flex">
              <p className="rating_box">4.9 * 890</p>
              <p className="rating_details_paragraph ">
                See Product Details{" "}
                <span>
                  <IoMdDownload />
                </span>
              </p>
            </div>
            <div className="content_item">
              <h3>Infinity Fore Life Diamond R...</h3>
              <div className="product_icon_flex">
                <div className="icon_box">
                  <span>
                    <FaRegHeart />
                  </span>
                </div>
                <div className="icon_box">
                  <span>
                    <FaDownload />
                  </span>
                </div>
                {/* <div className="icon_box"> */}
                {/* <span><PiCopySimpleDuotone /></span> */}
                {/* </div> */}
                <Sidebar />
              </div>
            </div>
            <div className="main_form mt-3">
              <div className="form_input">
                <div className="labal">
                  <div className="select">Select Size</div>
                </div>
                <div
                  className="form_inp "
                  // onClick={toggleProfileBox}
                  // onClick={() => toggleProfileBox(0)}
                  onClick={openModal}>
                  <p>
                    12(51.8mm) - <small>in sock</small>
                  </p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
                {/* <div
                // className={
                //   isProfileBoxOpen ? "profileboxvisible" : "profileboxhidden"
                // }
                // className={`profileboxhidden  ${
                //   isProfileBoxOpen === 0 ? "opened" : " "
                //   }`}
                ></div> */}
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                  className="modal-content-right " // Add a class for styling
                  overlayClassName="modal-overlay" // Add a class for the overlay
                >
                  <ProductSelectSize closeModal={closeModal} />
                </Modal>{" "}
              </div>
              <div className="form_input">
                <div className="labal">
                  <div className="select">Delivery & Store Details</div>
                </div>
                <div className="form_inp">
                  <input type="search" placeholder="PINCODE" />
                  <span>
                    <FaLocationDot />
                  </span>
                </div>
              </div>
              <div className="form_input">
                <div className="labal">
                  <div className="select">Customization</div>
                </div>
                <div className="form_inp" onClick={openModal}>
                  <p>
                    12(51.8mm) - <small>in sock</small>
                  </p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                  className="modal-content-right " // Add a class for styling
                  overlayClassName="modal-overlay" // Add a class for the overlay
                >
                  <ProductSelectSize closeModal={closeModal} />
                </Modal>{" "}
              </div>
            </div>
            <div className="bestseller">BESTSELLER</div>
            <div className="rate_flex">
              <p>₹14,256 </p>
              <span>₹15,840</span>
            </div>
            <div className="offer">
              <p className="flat">
                Flat 5% off on MRP + Get Rs.1000 Shaya Voucher with Your Order.
                TCA.
              </p>
              <p className="expires">Offer Expires in 2 days</p>
            </div>
            <div className="main_addcart">
              <div className="add_cart">
                <button>ADD TO CART</button>
                <p>
                  Upon Price Drop,{" "}
                  <a href="/" className="notify">
                    Notify Me
                  </a>
                </p>
              </div>
              <div className="find">find in store</div>
            </div>
            <CallSchedule />
            <ExchangeProduct />
          </div>
        </div>
      </section>
      <section className="product_details">
        <div className="auto_container">
          <div className="row">
            <div className="col-md-6">
              <div className="product_details_content">
                <span>SKU</span>
                <span className="sku_color">JR06350-1RP600</span>
                <h3>Product Details</h3>
                <p className="jewellary_about">
                  These beautiful Ber Leaf Diamond Stud Earrings are sure to add
                  a special sparkle to any outfit.
                </p>
                <div className="row mt-3">
                  <div className="col-md-3 product_details_box">
                    <h6>
                      <span>
                        <RxDimensions />
                      </span>
                      Dimensions
                    </h6>
                    <p>
                      <span>Width</span> <span>-</span>
                      <span> 19.9 mm</span>
                    </p>
                    <p>
                      <span>Height </span> <span>-</span>
                      <span> 19.9 mm</span>
                    </p>
                    <p>
                      <span>Size </span> <span>-</span>
                      <span> 19.9 mm</span>
                    </p>
                  </div>
                  <div className="col-md-3 product_details_box">
                    <h6>
                      <span>
                        <GiWeight />
                      </span>
                      Weight
                    </h6>
                    <p>
                      <span>Gross</span> <span>-</span>
                      <span> 2.620 g</span>
                    </p>
                  </div>
                  <div className="col-md-3 product_details_box">
                    <h6>
                      <span>
                        <TbCircleDashed />
                      </span>
                      Purity
                    </h6>
                    <p>
                      <span>18</span> <span>KT</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{ display: "flex", alignItems: "center" }}>
              <div className="product_details_box1">
                <div className="">
                  <h5>
                    <span className="margin_right_one">
                      <IoDiamond />
                    </span>
                    DIAMOND & GEMSTONES
                  </h5>
                  <div className="row mt-4 ">
                    <div className="col-md-3">
                      <h6>Diamond Type</h6>
                      <p className="text_align">IJ-SI</p>
                    </div>
                    <div className="col-md-3">
                      <h6>Setting Type</h6>
                      <p className="text_align">Prong</p>
                    </div>
                    <div className="col-md-3">
                      <h6>Total Number</h6>
                      <p className="text_align">1</p>
                    </div>
                    <div className="col-md-3">
                      <h6>Total weight</h6>
                      <p className="text_align">0.250 ct</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="price_breakup_flex">
            <h5>Price Breakup</h5>
            <button className="price_breakub_btn">
              <p>
                Show more{" "}
                <span>
                  <IoIosArrowDown />
                </span>
              </p>
            </button>
          </div>
          <PriceBreakupDetails />
        </div>
      </section>
      <section id="near-location">
        <NearLocation />
      </section>
      <section id="serviceTileSection">
        <ServiceTileSection />
      </section>
      <section id="product_related_categories">
        <ProductRelatedCategories />
      </section>
      <section id="similar-product">
        <SimilarProduct />
      </section>
    </>
  );
}

export default ProductDetails;
