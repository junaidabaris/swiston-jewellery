import React from "react";
import "./CareDiamond.css";
import image from "../../images/DiamondBuyGuideImg/careimage.jpg";
export const CareDiamond = () => {
  return (
    <>
      <section className="diamond-care-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={image}
                alt="How Care of Diamond"
                className="w-100 h-100 transform-scal"
              />
            </div>
            <div className="col-lg-6">
              <h2>How to Care for Your Diamond:</h2>
              <ul className="care-info-list">
                <li>
                  Once every week, clean your diamond jewellery in lukewarm soap
                  water and rub it down gently with a brush, to remove the dirt
                  and grime from the surface and ensure a long lasting shine.
                </li>
                <li>
                  Remove your diamond jewellery when you go swimming or while
                  doing household chores, so that the grime doesn’t make your
                  jewellery look dull.
                </li>
                <li>
                  Keep your jewellery in separate boxes to reduce the chances of
                  scratches on the metal.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
