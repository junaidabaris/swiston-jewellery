import React from "react";

function PriceBreakupDetails() {
  return (
    <>
      <div className="">
        <section className="price_breakup_details">
          <ul className="price_breakup_heading_flex">
            <li>COMPONENTS</li>
            <li>RATE</li>
            <li>WEIGHT</li>
            <li>VALUE</li>
            <li>FINAL VALUE</li>
          </ul>
          <div className="price_breakup_item">GOLD</div>
          <ul className="price_breakup_item_flex">
            <li>14 KT Rose Gold</li>
            <li>₹3,789 / g</li>
            <li>1.230 g</li>
            <li>₹4,660</li>
            <li>
              ₹4,194 <span> ₹4,660 </span>
            </li>
          </ul>
          <ul className="price_breakup_item_flex">
            <li>
              {" "}
              <strong>Total Gold Value </strong>
            </li>
            <li>-</li>
            <li>-</li>
            <li>₹4,660</li>
            <li>
              <strong>₹4,194 </strong> <span>₹4,660</span>{" "}
            </li>
          </ul>
          <div className="price_breakup_item">DIAMOND</div>
          <ul className="price_breakup_item_flex">
            <li>IJ-SI Tappers-3 Nos.</li>
            <li>-</li>
            <li>0.045 ct</li>
            <li>₹5,198</li>
            <li>
              ₹4,678 <span>₹5,198 </span>
            </li>
          </ul>
          <ul className="price_breakup_item_flex">
            <li>IJ-SI Round-8 Nos.</li>
            <li>-</li>
            <li>0.055 ct</li>
            <li>₹6,353</li>
            <li>
              ₹5,717 <span>₹6,353 </span>{" "}
            </li>
          </ul>
          <ul className="price_breakup_item_flex">
            <li>
              <strong>Total Diamond Value</strong>
            </li>
            <li>-</li>
            <li>-</li>
            <li>₹11,551</li>
            <li>
              <strong> ₹10,395 </strong>
              <span> ₹11,551 </span>
            </li>
          </ul>
          <ul className="price_breakup_item_flex bottom_border">
            <li>Making Charges</li>
            <li>-</li>
            <li>-</li>
            <li>₹3,000</li>
            <li>
              ₹2,700 <span> ₹3,000 </span>
            </li>
          </ul>
          <ul className="price_breakup_item_flex ">
            <li>Subtotal</li>
            <li>-</li>
            <li>-</li>
            <li>₹19,211</li>
            <li>
              ₹17,290 <span> ₹19,211 </span>
            </li>
          </ul>
          <ul className="price_breakup_item_flex">
            <li>Tax</li>
            <li>-</li>
            <li>-</li>
            <li>₹576</li>
            <li>
              ₹519 <span> ₹576 </span>
            </li>
          </ul>
          <ul className="price_breakup_item_flex">
            <li>
              {" "}
              <strong>GRAND TOTAL </strong>
            </li>
            <li>-</li>
            <li>-</li>
            <li>₹19,787</li>
            <li>
              {" "}
              <strong>₹17,809 </strong>
            </li>
          </ul>
          <ul className="price_breakup_item_flex">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li>
              <strong>(MRP Incl. of all taxes) </strong>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default PriceBreakupDetails;
