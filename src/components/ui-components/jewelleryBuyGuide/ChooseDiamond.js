import React from "react";
import "../../../components/ui-components/jewelleryBuyGuide/ChooseDiamond.css";
import chain from "../../../assets/jewelleryBuyGuideImg/chain.png";
import crown from "../../../assets/jewelleryBuyGuideImg/ring.png";

export default function ChooseDiamond() {
  let chooseDiamond = [
    {
      id: 1,
      image: chain,
      cardtitle: "Gemstone Selection",
      cardtext: "So many colours to know about and choose from",
      cardlink: "Diamond",
    },
    {
      id: 2,
      image: crown,
      cardtitle: "Diamond Selection",
      cardtext: " Become a diamond expert in under 5 minutes",
      cardlink: "Gemstones",
    },
  ];
  return (
    <>
      <div className="container-fluid py-5">
        <h2 className="text-center choose-heading">
          2. Choose Your Diamond or Gemstone
        </h2>
        <div className="row">
          {chooseDiamond.map((items) => {
            const { id, image, cardtitle, cardtext, cardlink } = items;
            return (
              <div className="col-lg-6 p-3">
                <div className="choose-diamond p-5">
                  <img src={image} className="" alt="image not found" />
                  <h2 className="card-title pb-2">{cardtitle}</h2>
                  <p className="card-text">{cardtext}</p>
                  <a href="#" className="choose-text">
                    {`Learn About ${cardlink}`}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
