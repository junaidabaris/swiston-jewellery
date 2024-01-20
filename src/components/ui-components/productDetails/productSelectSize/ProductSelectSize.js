import React, { useState } from "react";
import Modal from "react-modal";
import "../productSelectSize/productSelectSize.css";
import { IoMdClose } from "react-icons/io";
function ProductSelectSize({ closeModal }) {
  const [isModalOpen, setModalOpen] = useState(true);

  return (
    <>
      <div className="product_select_size">
        <div className="product_select_rate">
          <p className="rate">
            <span>₹49,599</span>
          </p>
          <p className="deal_rate">₹53,864</p>
          <p className="select_close_modal" onClick={closeModal} style={{}}>
            <span>
              {" "}
              <IoMdClose />
            </span>
          </p>
        </div>
        <div className="product-select-outer">
          <div className="product_select_category">
            <div className="choice_of_metal">
              <h3>Choice of Metal</h3>
              <div className="product_select_box_flex">
                <div className="product_select_box">
                  <p className="metal_name">
                    <span>
                      18 KT <br /> Rose Gold{" "}
                    </span>{" "}
                  </p>
                  <div className="metal_btn">in Stock!</div>
                </div>
              </div>
            </div>
          </div>
          <div className="product_select_category">
            <div className="choice_of_metal">
              <h3>Diamond Quality</h3>
              <div className="product_select_box_flex">
                <div className="product_select_box">
                  <p className="metal_name">
                    <span>
                      GH-SI
                      <br />{" "}
                    </span>{" "}
                  </p>
                  <div className="metal_btn">in Stock!</div>
                </div>
              </div>
            </div>
          </div>
          <div className="product_select_category">
            <div className="choice_of_metal">
              <h3>Select Size</h3>
              <div className="product_select_box_flex">
                <div className="product_select_box">
                  <p className="metal_name">
                    <span className="metal_num_bold">5</span>
                    <br />
                    <span>44.8mm</span>{" "}
                  </p>
                  <div className="metal_btn">Made to Order</div>
                </div>
                <div className="product_select_box">
                  <p className="metal_name">
                    <span className="metal_num_bold">6</span>
                    <br />
                    <span>45.8mm</span>{" "}
                  </p>
                  <div className="metal_btn">Made to Order</div>
                </div>
                <div className="product_select_box">
                  <p className="metal_name">
                    <span className="metal_num_bold">7</span>
                    <br />
                    <span>45.8mm</span>{" "}
                  </p>
                  <div className="metal_btn">Made to Order</div>
                </div>
                <div className="product_select_box">
                  <p className="metal_name">
                    <span className="metal_num_bold">8</span>
                    <br />
                    <span>45.8mm</span>{" "}
                  </p>
                  <div className="metal_btn">in Stock!</div>
                </div>
                <div className="product_select_box">
                  <p className="metal_name">
                    <span className="metal_num_bold">9</span>
                    <br />
                    <span>45.8mm</span>{" "}
                  </p>
                  <div className="metal_btn">Made to Order</div>
                </div>
                <div className="product_select_box">
                  <p className="metal_name">
                    <span className="metal_num_bold">10</span>
                    <br />
                    <span>45.8mm</span>{" "}
                  </p>
                  <div className="metal_btn">Made to Order</div>
                </div>
                <div className="product_select_box">
                  <p className="metal_name">
                    <span className="metal_num_bold">11</span>
                    <br />
                    <span>45.8mm</span>{" "}
                  </p>
                  <div className="metal_btn">Made to Order</div>
                </div>
                <div className="product_select_box">
                  <p className="metal_name">
                    <span className="metal_num_bold">612</span>
                    <br />
                    <span>45.8mm</span>{" "}
                  </p>
                  <div className="metal_btn">Made to Order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="product_confirm_btn">
          CONFIRM CUSTOMIZATION
        </button>
      </div>
    </>
  );
}

export default ProductSelectSize;
