import React from "react";
import "../../components/jewelleryBuyGuide/JewelleryBuyGuide.css";
import jewelleryTop from "../../assets/jewelleryBuyGuideImg/top-img.jpg";
// import PickRightMetal from "../../Components/jewelleryBuyGuide/PickRightMetal";
import ChooseDiamond from "./ChooseDiamond";
import { CareDiamond } from "../DiamondBuyingGuide/CareDiamond";
import { Container } from "react-bootstrap";
import BraceletStore from "./BraceletStore";
import RingStore from "./RingStore";
import EarringStore from "./EarringStore";
import PickRightMetal from "./PickRightMetal";
export default function JewelleryBuyGuide() {
  return (
    <>
      <section>
        <div className="container">
          <div className="Jewellery-Guide-top m-auto">
            <img src={jewelleryTop} />
          </div>
        </div>
        <div className="jewellery-top">
          <div className="jewellery-guide-contant m-auto">
            <h2>Jewellery Buying Guide</h2>
            <p>
              Having the right pieces of jewellery can take your simple look to
              a gorgeous statement look. Whether you love a traditional or
              classic style, if you prefer rose gold or gold or perhaps even a
              combination of the two, never be afraid to try something new.
              Jewellery always lets you accessorise with confidence and express
              your style. There are various categories of jewellery made with
              different types of metals that have unique personalities of their
              own, and we bet we can find something that best suits yours.
            </p>
          </div>
        </div>
      </section>

      <PickRightMetal />
      <EarringStore />
      <RingStore />
      <ChooseDiamond />
      <BraceletStore />

      <CareDiamond />
    </>
  );
}
