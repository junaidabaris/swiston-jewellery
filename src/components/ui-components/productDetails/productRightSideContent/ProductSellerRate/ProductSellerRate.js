import React from "react";
import "./productSellerRate.css";
function ProductSellerRate() {
  return (
    <>
      <div className="positionAbsolute">
        <div className="bestseller">BESTSELLER</div>
        <div className="rate_flex1">
          <p>₹14,256 </p>
          <span>₹15,840</span>
        </div>
        <div className="offer">
          <p className="flat">
            Flat 5% off on MRP + Get Rs.1000 Shaya Voucher with Your Order. TCA.
          </p>
          <p className="expires">Offer Expires in 2 days</p>
        </div>
      </div>
    </>
  );
}

export default ProductSellerRate;
