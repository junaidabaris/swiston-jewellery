import React from "react";
import dev1 from "../../../images/GoldRateImages/istfront1.png"
export default function GoldRateCard() {
  return (
    <>
       <a href="#" className="text-decoration-none">
       <div
        className="card text-white  mb-3"
        style={{ width: " 15rem" }}
      >
        <img src={dev1} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-dark fw-bold">₹ 12,4000</h5>
          <p className="card-text lh-base  text-dark font-weight ">
          20g, 24Kt Lord Balaji Gold Coin
          </p>
        </div>
      </div>
       </a>
    </>
  );
}
