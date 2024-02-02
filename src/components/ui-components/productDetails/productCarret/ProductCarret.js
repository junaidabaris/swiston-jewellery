import React from "react";
import "./productCarret.css";
import { IoIosArrowDown } from "react-icons/io";
import { PiCopySimpleDuotone } from "react-icons/pi";
import { RxDimensions } from "react-icons/rx";
import { GiWeight } from "react-icons/gi";
import { TbCircleDashed } from "react-icons/tb";
import { IoDiamond } from "react-icons/io5";
import PriceBreakupDetails from "../priceBreakupDetails/PriceBreakupDetails";
function ProductCarret() {
  return (
    <>
      <section className="product_details">
        <div className="auto_container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="product_details_content">
                <span>SKU</span>
                <span className="sku_color">JR06350-1RP600</span>
                <h3>Product Details</h3>
                <p className="jewellary_about">
                  These beautiful Ber Leaf Diamond Stud Earrings are sure to add
                  a special sparkle to any outfit.
                </p>
                <div className="row mt-3 m-0 ">
                  <div className="col-md-3 col-sm-6 product_details_box m-0 ">
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
                  <div className="col-md-3 col-sm-6 product_details_box m-0">
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
                  <div className="col-md-3 col-sm-6 product_details_box m-0">
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
              className="col-lg-6 col-md-12"
              style={{ display: "flex", alignItems: "center" }}>
              <div className="product_details_box1">
                <div className=" diamond_item">
                  <h5>
                    <span className="margin_right_one">
                      <IoDiamond />
                    </span>
                    DIAMOND & GEMSTONES
                  </h5>
                  <div className="row mt-4 ">
                    <div className="col-md-3">
                      <h6 className="diamond_type">Diamond Type</h6>
                      <p className="text_align">IJ-SI</p>
                    </div>
                    <div className="col-md-3">
                      <h6 className="diamond_type">Setting Type</h6>
                      <p className="text_align">Prong</p>
                    </div>
                    <div className="col-md-3">
                      <h6 className="diamond_type">Total Number</h6>
                      <p className="text_align">1</p>
                    </div>
                    <div className="col-md-3">
                      <h6 className="diamond_type">Total weight</h6>
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
    </>
  );
}

export default ProductCarret;
