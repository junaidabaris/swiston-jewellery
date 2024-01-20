import React from "react";
import "../../../components/ui-components/jewelleryBuyGuide/PickRightMetal.css";
import pickrightimg from "../../../assets/jewelleryBuyGuideImg/rings-2634929_640.webp";
export default function PickRightMetal() {
  let rightMetal = [
    {
      name: "Yellow Gold",
      discription:
        " Yellow gold is the all natural version of gold. It’s our favourite choice for all things wedding! It’s super pleasing to the eye and complements most skin tones. Diamonds mounted on gold bands are what “happily ever after’s” are made up of.",
    },
    {
      name: "White Gold",
      discription:
        "White gold is an alloy of gold. This means that it is made up of pure yellow gold, mixed with alloy metals that have a silvery-white colour, such as palladium and silver. Its neutral colour and durability make it the perfect setting for all gemstones. It looks beautiful and classic, suiting all outfits and events.",
    },
    {
      name: " Rose Gold ",
      discription:
        "Rose gold is a gorgeous blend of gold with a small percentage of copper which adds strength and durability. It’s basically gold with a hint of pretty and has been trending a lot recently.",
    },
    {
      name: " Platinum",
      discription:
        "Platinum is a sturdy white toned metal. It's an exquisite metal and rarer than gold! Do you know what’s great about Platinum? It’s low maintenance!",
    },
  ];
  return (
    <>
      <div className=" container text-center p-5">
        <h2 className=" Pick-heading">1. Pick the Right Metal</h2>
        <div className="pick-right-top">
          <img src={pickrightimg} />
        </div>
        <div className="row">
          {rightMetal.map((item) => (
            <div className="col-lg-6 pick-right-text">
              <h2>{item.name}</h2>
              <p>{item.discription}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
