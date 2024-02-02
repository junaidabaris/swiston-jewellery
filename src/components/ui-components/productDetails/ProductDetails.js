import React from "react";
import "../productDetails/productDetails.css";

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

import { IoIosArrowDown } from "react-icons/io";
import { PiCopySimpleDuotone } from "react-icons/pi";
import { RxDimensions } from "react-icons/rx";
import { GiWeight } from "react-icons/gi";
import { TbCircleDashed } from "react-icons/tb";
import { IoDiamond } from "react-icons/io5";
import PriceBreakupDetails from "./priceBreakupDetails/PriceBreakupDetails";
import NearLocation from "./nearLocation/NearLocation";
import ServiceTileSection from "./serviceTileSection/ServiceTileSection";
import { Link } from "react-router-dom";

import ProductRelatedCategories from "./productRelatedCategories/ProductRelatedCategories";
import SimilarProduct from "./similarProduct/SimilarProduct";
import ProductDetailsLeftSlide from "./productDetailsLeftSlide/ProductDetailsLeftSlide";
import ProductRightSideContent from "./productRightSideContent/ProductRightSideContent";

function ProductDetails() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <>
      <section>
        <div className="row p-0 m-0">
          <ProductDetailsLeftSlide />

          <ProductRightSideContent />
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
