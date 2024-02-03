import React from "react";
import "./productDetailsLeftSlide.css";

import { FaRegGrinHearts } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import { HiOutlineCurrencyRupee } from "react-icons/hi";
import ProductDetailsSlide from "./productDetailsSlide/ProductDetailsSlide";
import ProductDetailsBreadcrumb from "./productDetailsBreadcrumb/ProductDetailsBreadcrumb";
function ProductDetailsLeftSlide() {
  return (
    <>
      <div className="col-lg-5 slide_breadcrumb_image">
        <div className="container left_slide_container">
          <ProductDetailsBreadcrumb />
          <ProductDetailsSlide />
          <marquee>
            <div className="slick_image_flex">
              <div className="slick_image_item pl-3">
                <span>
                  <HiOutlineCurrencyRupee />
                </span>
                <p>15 Day Money Back</p>
              </div>
              <div className="slick_image_item pl-3">
                <span>
                  <FaRegGrinHearts />
                </span>
                <p>Lifetime Exchange</p>
              </div>
              <div className="slick_image_item pl-3">
                <span>
                  <FaRegStar />
                </span>
                <p>100% Certified</p>
              </div>
            </div>
          </marquee>
        </div>
      </div>
    </>
  );
}

export default ProductDetailsLeftSlide;
