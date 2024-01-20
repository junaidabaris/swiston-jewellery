import React from "react";
import "../../../components/ui-components/jewelleryBuyGuide/RingStore.css";
import ring1 from "../../../assets/jewelleryBuyGuideImg/ring.png";
import ring2 from "../../../assets/jewelleryBuyGuideImg/ring2.avif";
import ring3 from "../../../assets/jewelleryBuyGuideImg/ring3.avif";
import ring4 from "../../../assets/jewelleryBuyGuideImg/ring4.avif";
import ring5 from "../../../assets/jewelleryBuyGuideImg/ring5.avif";
import ring6 from "../../../assets/jewelleryBuyGuideImg/ring6.avif";
import ring7 from "../../../assets/jewelleryBuyGuideImg/ring7.avif";
import ring8 from "../../../assets/jewelleryBuyGuideImg/ring8.avif";

export default function RingStore() {
  const ringStore = [
    {
      id: 1,
      image: ring1,
      title: "BRIDAL SET",
    },
    {
      id: 2,
      image: ring2,
      title: "ENGAGEMENT",
    },
    {
      id: 3,
      image: ring3,
      title: "COCKTAIL",
    },
    {
      id: 4,
      image: ring4,
      title: " BANDS",
    },
    {
      id: 5,
      image: ring5,
      title: "FLEXI RINGS",
    },
    {
      id: 6,
      image: ring6,
      title: "TRENDY",
    },
    {
      id: 7,
      image: ring7,
      title: "CASUAL",
    },

    {
      id: 9,
      image: ring8,
      title: " PLATINUM COUPLE",
    },
  ];
  return (
    <>
      <div className="container-fluid py-5">
        <h3 className="text-center">Rings</h3>
        <div className="ring-contant">
          <p>
            From timeless classics to today's latest fashion trends, earrings
            are the most versatile parts of every woman's jewellery wardrobe.
            From studs to statement-making drops, take your pick.
          </p>
          <span style={{ color: "darkgoldenrod" }}>Swiston Style Tip :</span>
          <p>
            Make an impact by mismatching your earrings. It shows individuality
            and your style.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 ring-list-store">
            {ringStore.map((items, i) => {
              const { id, image, title } = items;
              return (
                <div className="ring-store">
                  <div className="ring-image">
                    <a href="#">
                      {" "}
                      <img src={image} alt="image not found" />
                    </a>
                  </div>
                  <span>{title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
