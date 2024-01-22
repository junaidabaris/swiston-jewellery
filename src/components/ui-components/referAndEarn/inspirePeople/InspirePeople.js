import React from "react";
import "./inspirePeople.css";
const imageUrls = [
  "https://assets.cltstatic.com/images/responsive/referral/Girl1.jpg",
  "https://assets.cltstatic.com/images/responsive/referral/Girl2.jpg",
  "https://assets.cltstatic.com/images/responsive/referral/Girl3.jpg",
  "https://assets.cltstatic.com/images/responsive/referral/Girl4.jpg",
];
function InspirePeople() {
  return (
    <>
      <div className="ins_people_content">
        <h2 className="inspire_heading">
          Get a chance to inspire{" "}
          <h2 className="inspire_heading_heading">900K+ people</h2>
        </h2>
        <div className="inspire_people_content">
          <div className="peoplebox">
            <div className="people_img_flex">
              {imageUrls.map((imageUrls, index) => (
                <div className="img_box">
                  <img src={imageUrls} alt={`Girl  ${index + 1}`} />
                </div>
              ))}
            </div>
            <hr className="bottom_line" />
            <h3 className="inspire_heading2">
              Just <span> Refer 5 or More </span> friends and get featured on
              our Instagram page*
            </h3>
            <p className="inspire_content">
              *When your friends make their first purchase.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InspirePeople;
