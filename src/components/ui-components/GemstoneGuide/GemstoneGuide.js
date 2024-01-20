import React from "react";
import GarentTopImage from "../../../images/GemstoneGuideImg/diamond-1300411_640.webp";
import { GemstoneGarnet } from "./GemstoneGarnet";
import { CareDiamond } from "../DiamondBuyingGuide/CareDiamond";
import "../../../components/ui-components/GemstoneGuide/GemstoneGuide.css";
export const GemstoneGuide = () => {
  return (
    <>
      <section>
        <div className="container m-auto">
          <div className="gemstonegarent-top">
            <img src={GarentTopImage} alt="Not found image" />
          </div>
        </div>
        <div className="garent-bg">
          <div className="garent-top-contant">
            <h2>Gemstone Guide</h2>
            <p>
              Here’s your guide to Everything-Gemstones! With more than a
              rainbow of colors to choose from - you can go with your very own
              birthstone, or just pick your favourite colour too!
            </p>
          </div>
        </div>
      </section>
      <GemstoneGarnet />
      <CareDiamond />
    </>
  );
};
