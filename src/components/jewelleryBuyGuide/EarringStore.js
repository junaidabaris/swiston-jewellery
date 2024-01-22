import React from "react";
// import "../../Components/jewelleryBuyGuide/EarringStore.css";
import earring1 from "../../assets/jewelleryBuyGuideImg/earring1.webp";
import earring2 from "../../assets/jewelleryBuyGuideImg/earring2.jpeg";
import earring3 from "../../assets/jewelleryBuyGuideImg/earring3.jpeg";
import earring4 from "../../assets/jewelleryBuyGuideImg/earring4.jpeg";
import earring5 from "../../assets/jewelleryBuyGuideImg/earring5.jpeg";
import earring6 from "../../assets/jewelleryBuyGuideImg/earring6.jpeg";
import earring7 from "../../assets/jewelleryBuyGuideImg/earring7.jpeg";
import earring8 from "../../assets/jewelleryBuyGuideImg/earring8.jpeg";
export default function EarringStore() {
  const ringStore = [
    {
      id: 1,
      image: earring1,
      title: "BRIDAL SET",
    },
    {
      id: 2,
      image: earring2,
      title: "ENGAGEMENT",
    },
    {
      id: 3,
      image: earring3,
      title: "COCKTAIL",
    },
    {
      id: 4,
      image: earring4,
      title: " BANDS",
    },
    {
      id: 5,
      image: earring5,
      title: "FLEXI RINGS",
    },
    {
      id: 6,
      image: earring6,
      title: "TRENDY",
    },
    {
      id: 7,
      image: earring7,
      title: "CASUAL",
    },

    {
      id: 9,
      image: earring8,
      title: " PLATINUM COUPLE",
    },
  ];
  return (
    <>
      <div className="container-fluid py-5">
        <h3 className="text-center">Earrings</h3>
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
