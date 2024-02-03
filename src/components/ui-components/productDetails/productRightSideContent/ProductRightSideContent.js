import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import Sidebar from "../sidebar/Sidebar";
import CallSchedule from "../callSchedule/CallSchedule";
import ExchangeProduct from "../exchangeProduct/ExchangeProduct";
import "./productRightSideContent.css";
import ProductInput from "./productInput/ProductInput";
import ProductSellerRate from "./ProductSellerRate/ProductSellerRate";

function ProductRightSideContent() {
  return (
    <>
      <div className="col-lg-7 product_content_details_background1">
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
            <div className="icon_box m-2">
              <span>
                <FaRegHeart />
              </span>
            </div>
            <div className="icon_box m-2">
              <span>
                <FaDownload />
              </span>
            </div>
            <Sidebar />
          </div>
        </div>
        {/* product input  */}
        <ProductInput />
        {/* product seller rate */}
        <ProductSellerRate />
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
    </>
  );
}

export default ProductRightSideContent;
