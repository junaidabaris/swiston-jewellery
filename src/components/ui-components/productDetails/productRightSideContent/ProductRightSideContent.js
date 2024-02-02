import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import Modal from "react-modal";
import Sidebar from "../sidebar/Sidebar";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import ProductSelectSize from "../productSelectSize/ProductSelectSize";
import CallSchedule from "../callSchedule/CallSchedule";
import ExchangeProduct from "../exchangeProduct/ExchangeProduct";
import "./productRightSideContent.css";

function ProductRightSideContent() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
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
        <div className="main_form mt-3">
          <div className="form_input">
            <div className="labal">
              <div className="select">Select Size</div>
            </div>
            <div className="form_inp " onClick={openModal}>
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
            Flat 5% off on MRP + Get Rs.1000 Shaya Voucher with Your Order. TCA.
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
    </>
  );
}

export default ProductRightSideContent;
