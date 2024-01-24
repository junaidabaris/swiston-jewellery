import React from "react";
import PressHomeSection from "../pressHomeSection/PressHomeSection";
import PressNewsContent from "../pressNewsContent/PressNewsContent";
import Newsletter from "../newsLetter/Newsletter";

function WebStories() {
  const pressNewsArray = [
    {
      title:
        "How to wear trendy ear cuff earrings: Everything you need to know!",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2024/01/COVER.jpg",
      excerpt: "",
    },
    {
      title: "Find the Perfect Rings for Your Girlfriend",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2024/01/cover-3.jpg",
      excerpt: "",
    },

    {
      title: "5 Gold Pendants that Make the Perfect Gift for Her",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2024/01/cover-2.jpg",
      excerpt: "",
    },
    {
      title: "Modern Diamond Mangalsutras For Modern Brides",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2024/01/cover-1.jpg",
      excerpt: "",
    },
    {
      title: "5 Must-Have Party Wear Earrings for women",
      date: "MARCH 7, 2023",
      imgageSrc:
        "https://www.caratlane.com/blog/wp-content/uploads/2024/01/Untitled-1.jpg",
      excerpt: "",
    },
  ];

  return (
    <div className="web-stories">
      <PressHomeSection pressHeading={"Stories"} />
      <div className="container">
        <PressNewsContent data={pressNewsArray} />
      </div>
      <div className="container">
        <Newsletter />
      </div>
    </div>
  );
}

export default WebStories;
