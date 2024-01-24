import React from "react";
import PressHomeSection from "../pressHomeSection/PressHomeSection";
import PressNewsContent from "../pressNewsContent/PressNewsContent";
import Newsletter from "../newsLetter/Newsletter";
function JewellaryEdit() {
  const pressNewsArray = [
    {
      title: "What is the price of the gold rings?",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2023/04/GIF-Ring-1.gif",
      excerpt:
        "Gold rings are popular for couples looking to celebrate their love with timeless and beautiful jewellery pieces. But what exactly is the price of gold",
    },
    {
      title: "Are diamonds a good investment today and in the future",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2023/04/99Artboard-7-1.jpg",
      excerpt:
        "When you think of diamond jewellery, you don’t always think of them as an investment. You think of the glamour of diamond jewellery, the way",
    },

    {
      title: "How to measure bangle size at Home",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2023/04/83Artboard-2-copy.jpg",
      excerpt:
        "When it comes to bangles, one size does not fit all. In fact, bangles come in all sorts of sizes to accommodate different wrist sizes.",
    },
    {
      title:
        "10 Must-Have Gold and Diamond Jewellery Pieces for Akshaya Tritiya",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2023/04/1A-3.jpg",
      excerpt:
        "Akshaya Tritiya is the best time to think of gold jewellery, not merely because it is an auspicious day to bring home the precious metal",
    },
    {
      title:
        "10 Must-Have Gold and Diamond Jewellery Pieces for Akshaya Tritiya",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2023/04/1A-2-1.jpg",
      excerpt:
        "Akshaya Tritiya is a special day for Hindus and Jains and is celebrated with great joy across India. We look forward to this day for",
    },
  ];

  return (
    <>
      <div>
        <PressHomeSection
          pressHeading={"Jewellery Edit"}
          //   pressNews={"pressNews"}
        />
        <div className="container">
          <PressNewsContent data={pressNewsArray} />
        </div>
        <div className="container">
          <Newsletter />
        </div>
      </div>
    </>
  );
}

export default JewellaryEdit;
