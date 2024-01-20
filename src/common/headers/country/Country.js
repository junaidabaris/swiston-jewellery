import React from "react";
import "../country/country.css";
import { IoClose } from "react-icons/io5";
function Country({ show, onClose }) {
  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ width: 350 }}>
        {/* Your modal content goes here */}
        <div className="country_close_button">
          <span onClick={onClose}>
            <IoClose />
          </span>
        </div>
        <div className="country_heading">
          <p>Change Country /Currency</p>
        </div>
        <div className="flag_image">
          <img
            src="https://knowindia.india.gov.in/assets/images/national_flag_inner.jpg"
            alt=""
          />
          <p>INDIA (INR)</p>
        </div>
        <div className="flag_selected">
          <select className="form-select" aria-label="Default select example">
            <option selected="">India (INR)</option>
            <option value={1}>United States (USD)</option>
            <option value={2}>Austraila (AUD)</option>
            <option value={3}>Dubai</option>
          </select>
        </div>
        <div className="btn btn-primary flag_btn">Update Country</div>
      </div>
    </div>
  );
}

export default Country;
