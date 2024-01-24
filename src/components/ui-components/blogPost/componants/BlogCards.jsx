import React from "react";
import "./BlogCards.css";
import woman from "../blog_assets/single_women_smile.webp";
import mother_son from "../blog_assets/mom_seleice_img.webp";
import earings from "../blog_assets/earrings_img.webp";
import girl_mirror from "../blog_assets/image_girl_lookup.webp";
import two_girl from "../blog_assets/two_girl_experssion.webp";
import rings from "../blog_assets/line_rings.webp";
import Blog_Single_CardCompo from "./Blog_Single_CardCompo";
import { spaceChildren } from "antd/es/button";
const blogPostData = [
  {
    id: 1,
    title: "10 Different Types of Hoop Earrings for your daily outfit",
    discription:
      "Hoop earrings have been around for centuries and have become increasingly popular over the years. From ancient times to the modern day, hoop earrings have been a go-to accessory for many people. But what makes these hoops so special?  The versatility of hoop earrings Hoop earrings are incredibly versatile. They",
    image: woman,
  },
  {
    id: 2,
    title: "Make this Makar Sankranti Special with These Gifts",
    discription:
      "Makar Sankranti, a festival marking the sun’s transition into the zodiac sign of Capricorn (Makara), is a time of joy and renewal celebrated across India. This auspicious day, typically in mid-January, is rich in cultural significance, embodying themes of harvest, the onset of spring, and the cessation of the cold",
    image: mother_son,
  },
  {
    id: 3,
    title: "Why buying gold during Makar Sankranti is auspicious ",
    discription:
      "Makar Sankranti, a festival celebrated with great fervour across India, marks the Sun’s transition into the zodiac sign of Capricorn (Makara in Sanskrit). This transition, known as Sankranti, typically falls on January 14th each year. While the festival is renowned for its colourful kites and sumptuous feasts, there’s another aspect",
    image: earings,
  },
  {
    id: 4,
    title: "Lohri Luxury: Exclusive CaratLane Pieces to Celebrate in Style ",
    discription:
      "Lohri, the vibrant festival heralding the end of winter and the onset of spring, is a time for joyous celebrations. What better way to add a touch of glamour and tradition to your festivities than with exquisite jewellery from CaratLane? Known for its luxurious and unique designs, CaratLane offers a",
    image: girl_mirror,
  },
  {
    id: 5,
    title:
      "Lohri Sparkle: Must-Have Traditional Jewellery Designs for the Festive Season",
    discription:
      "As the winter chill sets in, the excitement for Lohri, a popular North Indian festival, starts warming our hearts. Celebrated with much fervour on January 13th every year, Lohri marks the end of winter and serves as a tribute to the Sun God for gracing the land with his presence.",
    image: two_girl,
  },
  {
    id: 6,
    title: "7 Key Jewellery Trends To Know In 2024 ",
    discription:
      "Jewellery has always been a way to express individuality and keep pace with the changing tides of fashion. As we step into 2024, the world of adornments is shimmering with new trends that promise to redefine elegance and innovation. In this blog, we will delve into the seven key jewellery",
    image: rings,
  },
];

const BlogCards = () => {
  return (
    <div className="container">
      <div className="row ">
        {blogPostData.map((item) => (
          <div key={item.id} className="col-md-4">
            <Blog_Single_CardCompo
              image={item.image}
              title={item.title}
              description={item.discription}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
