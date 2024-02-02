import React, { useState } from "react";
import Modal from "react-modal";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import ProductSelectSize from "../../productSelectSize/ProductSelectSize";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import "./productInput.css";
function ProductInput() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="main_form1">
        <div className="main_from_flex1">
          <div>
            <div>
              <div className="select_size_form">
                <div className="selectInput_guide">
                  <div className="select_input_label">
                    <div className="select_input_label_name">Select Size</div>
                    <div>
                      <div className="label_guide">
                        <span className="label_guide_name">Size Guide</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product_select_input_form"
                    onClick={openModal}>
                    <p className="product_input_number">
                      12 (51.8 mm) -<span>in Stock</span>
                    </p>
                    <p className="down_arrow_icon">
                      {" "}
                      <IoIosArrowDown />
                    </p>
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
                <div className="selectInput_guide">
                  <div className="select_input_label">
                    <div className="select_input_label_name">Customization</div>
                    <div>
                      <div className="label_guide">
                        <span className="label_guide_name">Diamond Guide</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="product_select_input_form"
                    onClick={openModal}>
                    <p>
                      <span className="diamond_guide_small_box">
                        18 KT Rose
                      </span>
                      <span className="diamond_guide_small_box">GH-SI</span>
                    </p>
                    <p className="down_arrow_icon">
                      {" "}
                      <IoIosArrowDown />
                    </p>
                  </div>
                  <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="modal-content-right " // Add a class for styling
                    overlayClassName="modal-overlay" // Add a class for the overlay
                  >
                    <ProductSelectSize closeModal={closeModal} />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
          <div className="deliery_store">
            <div className="selectInput_guide">
              <div className="select_input_label">
                <div className="select_input_label_name">
                  Delivery & Store Details
                </div>
                <div>
                  <div className="locate_me">
                    <span className="locate_me_name">Locate Me</span>
                  </div>
                </div>
              </div>
              <div className="product_select_input_form">
                <p className="product_input_number">PINCODE</p>
                <p className="down_arrow_icon">
                  {" "}
                  <MdOutlineAddLocationAlt />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInput;
