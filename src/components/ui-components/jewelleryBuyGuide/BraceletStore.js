import React from "react";
import "../../../components/ui-components/jewelleryBuyGuide/BraceletStore.css";
import bracelet1 from "../../../assets/jewelleryBuyGuideImg/braclete1.webp";
import bracelet2 from "../../../assets/jewelleryBuyGuideImg/bracelete2.png";
import bracelet3 from "../../../assets/jewelleryBuyGuideImg/bracelete3.png";
import bracelet4 from "../../../assets/jewelleryBuyGuideImg/bracelete4.webp";
import bracelet5 from "../../../assets/jewelleryBuyGuideImg/earring5.jpeg";

export default function BraceletStore() {
  let bracelet = [
    {
      id: 1,
      image: bracelet1,
      title: "CHAIN BRACELETS",
    },
    {
      id: 2,
      image: bracelet2,
      title: " LIGHTWEAR BANGLES",
    },
    {
      id: 1,
      image: bracelet3,
      title: "MANGALSUTRA BRACELETS",
    },
    {
      id: 1,
      image: bracelet4,
      title: "OVAL BRACELETS",
    },

    {
      id: 1,
      image: bracelet5,
      title: "FLEXIBLE BRACELETS",
    },
  ];
  return (
    <>
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-12">
            <div className="bracelet-container">
              {bracelet.map((items) => {
                const { id, image, title } = items;
                return (
                  <div className="bracelet-store">
                    <div className="bracelet-img">
                      <a href="\" className="card-link">
                        <img src={image} />
                      </a>
                    </div>
                    <p>{title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
