import React from "react";
import "./press.css";
import PressNewsContent from "./pressNewsContent/PressNewsContent";
import Newsletter from "./newsLetter/Newsletter";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import PressHomeSection from "./pressHomeSection/PressHomeSection";
import NewsTab from "./newsTab/NewsTab";
function Press() {
  const pressNewsArray = [
    {
      title: "Collection – Blaze",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2023/03/1673522010_Bs6NPR_CaratLane_Blaze_Collection_1_1_.jpg",
      excerpt:
        "The collection is available at all 170+ CaratLane stores across the country Swiston has launched its first dazzling collection for 2023, Blaze. This collection is",
    },
    {
      title: "Marketer’s guide to 2023",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2023/03/Add-a-heading-36.png",
      excerpt:
        "Marketing heads discuss which strategies are best to employ this year, and which ones are best avoided From reinventing consumer segmentation and the marketing mix",
    },

    {
      title:
        "Propose Day 2023: 5 Stylish Ring Trends She Will Not Be Able To Say No To",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2023/03/ilj9ld2g_rings_625x300_08_February_23.png",
      excerpt:
        "Propose Day 2023: She will surely say yes to you and these stunning rings   These rings are perfect for your partner",
    },
    {
      title:
        "From Heart Soaked Bags To Sexy Lingerie, A Style Guide To Build Your Valentine’s Day Look",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2023/03/design829.jpg",
      excerpt:
        "It is the month of love and the perfect time to dress up and swipe right to that cute date. And while most of us",
    },
    {
      title:
        "Swiston kickstarts new ‘Khul ke karo express’ campaign for Valentine’s Day",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2023/03/BeFunky-design-2023-02-06T142514.285.png",
      excerpt:
        "Propose Day 2023: She will surely say yes to you and these stunning rings   These rings are perfect for your partner",
    },
  ];
  return (
    <>
      <div className="news-section">
        {/* <NewsTab /> */}
        <PressHomeSection
          pressHeading={"Press Release"}
          pressNews={"Browser News"}
        />
        <div className="container">
          <PressNewsContent data={pressNewsArray} />;
        </div>
        <div className="container">
          <Newsletter />
        </div>
      </div>
    </>
  );
}

export default Press;
