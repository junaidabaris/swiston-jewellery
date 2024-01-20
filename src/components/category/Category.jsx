import React from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Card from "./Card";
import { GiStoneBlock } from "react-icons/gi";
import { AiFillGolden } from "react-icons/ai";
import { GiJewelCrown } from "react-icons/gi";
// import imgg1 from '../../src/assets/img/image1.png'
import imgg1 from "../../assets/img/image1.png";
import imgg2 from "../../assets/img/image2.png";
import imgg3 from "../../assets/img/image3.png";
import imgg4 from "../../assets/img/image4.png";
import imgg5 from "../../assets/img/image5.png";
import imgg6 from "../../assets/img/image6.png";
import imgg7 from "../../assets/img/image7.png";
import imgg8 from "../../assets/img/image8.png";
import imgg9 from "../../assets/img/image9.png";
import imgg10 from "../../assets/img/image 10.png";
import imgg11 from "../../assets/img/image 11.png";
import imgg12 from "../../assets/img/image 12.png";
import imgg13 from "../../assets/img/image 13.png";
import imgg14 from "../../assets/img/image14.png";
import imgg15 from "../../assets/img/image15.png";
import imgg16 from "../../assets/img/image 16.png";
import PriceFilter from "./PriceFilter";
// import "../../src/assets/css/category_responsive.css";
import "../category/category_responsive.css";

const mockData = [
  {
    id: "1",
    title: "Brilliant Solitaire Bridal Ring set",
    currentRate: "₹2,89,906",
    prevRate: "₹3,18,906",
    img1: [
      { id: "1", img: imgg1 },
      { id: "2", img: imgg2 },
    ],
  },
  {
    id: "2",
    title: "poala halo solitaire ring",
    currentRate: "₹2,83,039",
    prevRate: "₹3,11,162",
    img1: [
      { id: "1", img: imgg2 },
      { id: "2", img: imgg3 },
    ],
  },
  {
    id: "3",
    title: "ruth elegant Solitaire Ring ",
    currentRate: "₹2,81,778",
    prevRate: "₹3,10,148",
    img1: [
      { id: "1", img: imgg3 },
      { id: "2", img: imgg4 },
    ],
  },
  {
    id: "4",
    title: "evelyn Solitaire Ring ",
    currentRate: "₹2,89,906",
    prevRate: "₹2,92,253",
    img1: [
      { id: "1", img: imgg4 },
      { id: "2", img: imgg5 },
    ],
  },
  {
    id: "5",
    title: "overt broad daimaond Ring",
    currentRate: "₹2,52,053",
    prevRate: "₹2,74,6565",
    img1: [
      { id: "1", img: imgg5 },
      { id: "2", img: imgg6 },
    ],
  },
  {
    id: "6",
    title: "lustre Solitaire bridal Ring set",
    currentRate: "₹2,48,845",
    prevRate: "₹2,68,845",
    img1: [
      { id: "1", img: imgg6 },
      { id: "2", img: imgg7 },
    ],
  },
  {
    id: "7",
    title: "emppess Solitaire Ring",
    currentRate: "₹2,48,845",
    prevRate: "₹2,74,373",
    img1: [
      { id: "1", img: imgg7 },
      { id: "2", img: imgg8 },
    ],
  },
  {
    id: "8",
    title: "dazzaling Solitaire Bridal Ring set",
    currentRate: "₹2,89,906",
    prevRate: "₹3,18,906",
    img1: [
      { id: "1", img: imgg8 },
      { id: "2", img: imgg9 },
    ],
  },
  {
    id: "9",
    title: "Brilliant Solitaire Bridal Ring set",
    currentRate: "₹2,89,906",
    prevRate: "₹3,18,906",
    img1: [
      { id: "1", img: imgg9 },
      { id: "2", img: imgg10 },
    ],
  },
  {
    id: "10",
    title: "poala halo solitaire ring",
    currentRate: "₹2,83,039",
    prevRate: "₹3,11,162",
    img1: [
      { id: "1", img: imgg10 },
      { id: "2", img: imgg11 },
    ],
  },
  {
    id: "11",
    title: "ruth elegant Solitaire Ring ",
    currentRate: "₹2,81,778",
    prevRate: "₹3,10,148",
    img1: [
      { id: "1", img: imgg11 },
      { id: "2", img: imgg12 },
    ],
  },
  {
    id: "12",
    title: "evelyn Solitaire Ring ",
    currentRate: "₹2,89,906",
    prevRate: "₹2,92,253",
    img1: [
      { id: "1", img: imgg12 },
      { id: "2", img: imgg13 },
    ],
  },
  {
    id: "13",
    title: "overt broad daimaond Ring",
    currentRate: "₹2,52,053",
    prevRate: "₹2,74,6565",
    img1: [
      { id: "1", img: imgg13 },
      { id: "2", img: imgg14 },
    ],
  },
  {
    id: "14",
    title: "lustre Solitaire bridal Ring set",
    currentRate: "₹2,48,845",
    prevRate: "₹2,68,845",
    img1: [
      { id: "1", img: imgg14 },
      { id: "2", img: imgg15 },
    ],
  },
  {
    id: "15",
    title: "emppess Solitaire Ring",
    currentRate: "₹2,48,845",
    prevRate: "₹2,74,373",
    img1: [
      { id: "1", img: imgg15 },
      { id: "2", img: imgg16 },
    ],
  },
  {
    id: "16",
    title: "dazzaling Solitaire Bridal Ring set",
    currentRate: "₹2,89,906",
    prevRate: "₹3,18,906",
    img1: [
      { id: "1", img: imgg16 },
      { id: "2", img: imgg1 },
    ],
  },
  {
    id: "17",
    title: "Brilliant Solitaire Bridal Ring set",
    currentRate: "₹2,89,906",
    prevRate: "₹3,18,906",
    img1: [
      { id: "1", img: imgg1 },
      { id: "2", img: imgg2 },
    ],
  },
  {
    id: "18",
    title: "poala halo solitaire ring",
    currentRate: "₹2,83,039",
    prevRate: "₹3,11,162",
    img1: [
      { id: "1", img: imgg2 },
      { id: "2", img: imgg3 },
    ],
  },
  {
    id: "19",
    title: "ruth elegant Solitaire Ring ",
    currentRate: "₹2,81,778",
    prevRate: "₹3,10,148",
    img1: [
      { id: "1", img: imgg3 },
      { id: "2", img: imgg4 },
    ],
  },
  {
    id: "20",
    title: "evelyn Solitaire Ring ",
    currentRate: "₹2,89,906",
    prevRate: "₹2,92,253",
    img1: [
      { id: "1", img: imgg4 },
      { id: "2", img: imgg5 },
    ],
  },
  {
    id: "21",
    title: "overt broad daimaond Ring",
    currentRate: "₹2,52,053",
    prevRate: "₹2,74,6565",
    img1: [
      { id: "1", img: imgg5 },
      { id: "2", img: imgg6 },
    ],
  },
  {
    id: "22",
    title: "lustre Solitaire bridal Ring set",
    currentRate: "₹2,48,845",
    prevRate: "₹2,68,845",
    img1: [
      { id: "1", img: imgg6 },
      { id: "2", img: imgg7 },
    ],
  },
];

const price = [
  "₹ 5,001 - ₹10,000",
  "₹10,001 - ₹15,000",
  "₹15,001 - ₹20,000",
  "₹20,001 - ₹30,000",
  "₹30,001 - ₹40,000",
  "₹ 40,001 - ₹50,000",
  "₹50,001 - ₹75,000",
  "₹75,001 - 1,00,000",
  "₹1,00,001 - ₹1,50,000",
  "₹1,50,001 - ₹2,00,000",
  "₹2,00,001 - ₹2,50,000",
  "Over ₹2,50,000",
];
const ProductType = [
  "earrring",
  "ring",
  "necklaces",
  "pendants",
  "bracelets",
  "chains",
  "sets",
  "mangalsutra",
  "nose pin",
  "nath",
  "charms",
  "adjustable Rings",
  "charm builders",
  "tanmaniya",
  "baby bangles",
];
const weightRanges = ["0-2 g ", "2-5 g"];
const Material = ["platinum", "gold", "daimond", "gemeStone", "solirane"];
const shotBY = [
  "Popularity",
  "Price -- Low to High",
  "Price -- High to Low",
  "Newest First",
  "Discount",
  "Latest",
  "Feature",
];
const Metal = [
  "18KT yellow",
  "18KT white",
  "18KT Rose",
  "14KT yellow",
  "14KT white",
  "14KT rose",
  "14KT two tone",
];
const ringSize = [
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30,
];
const shopFor = ["Man", "Women"];
const occasion = [
  "everyday",
  "anniversary",
  "emagegment",
  "work wear",
  "desk to dinner",
  "eveving",
  "party wear",
];
const earringStyle = ["studs and tops"];
const gemeStone = ["as", "dv", "vdva", "fafa", "affaf"];
export default function Category() {
  const [showMore, setShowMore] = useState(4);
  const [text, setText] = useState("more");
  const [hidden, setHidden] = React.useState(false);
  const handleMoreClick = (filter) => {
    setShowMore(showMore + filter.length);
    setText("less more");
  };

  return (
    <section className="p-5">
      <div className="d-flex">
        <div className="wrapper_filter">
          <div className="main-filter">
            <p className="filter-heading">
              filter <span>1</span>
            </p>
            <div className="clear">clear all</div>
          </div>
          <div className="types_main">
            <div className="types">
              <div className="filter-title">Price</div>
              <ul className="filter_type">
                {price?.slice(0, showMore).map((item, i) => (
                  <li>
                    <a href="#">
                      <input type="checkbox" name="price" /> &#8377;10,001 -
                      &#8377;15,000 <span>(76)</span>{" "}
                    </a>
                  </li>
                ))}
                <p className="more" onClick={() => handleMoreClick(price)}>
                  <FaAngleDown className="down" /> {price?.length - 4} {text}
                </p>
              </ul>
            </div>
            <div className="types">
              <div className="filter-title">Product type</div>
              <ul className="filter_type">
                {ProductType?.slice(0, showMore).map((item, i) => (
                  <li key={i}>
                    <a href="#">
                      <input type="checkbox" name="price" />
                      {item} <span>(2290)</span>{" "}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="more" onClick={() => handleMoreClick(ProductType)}>
                <FaAngleDown className="down" /> {ProductType?.length - 4} more
              </p>
            </div>
            <div className="types">
              <div className="filter-title">Weight Ranges</div>
              <ul className="filter_type">
                {weightRanges?.slice(0, showMore).map((item, i) => (
                  <li key={i}>
                    <a href="#">
                      <input type="checkbox" name="price" />
                      {item} <span>(133)</span>{" "}
                    </a>
                  </li>
                ))}
                {/* <p className="more"><FaAngleDown className="down"/> {weightRanges?.length - 4} more</p> */}
              </ul>
            </div>
            <div className="types">
              <div className="filter-title">Material</div>
              <ul className="filter_type">
                <ul className="filter_type">
                  {Material?.slice(0, showMore).map((item, i) => (
                    <li key={i}>
                      <a href="#">
                        <input type="checkbox" name="price" />
                        {item} <span>(133)</span>{" "}
                      </a>
                    </li>
                  ))}
                  <p className="more" onClick={() => handleMoreClick(Material)}>
                    <FaAngleDown className="down" /> {Material?.length - 4} more
                  </p>
                </ul>
              </ul>
            </div>
            <div className="types">
              <div className="filter-title">Metal</div>

              <ul className="filter_type">
                {Metal?.slice(0, showMore).map((item, i) => (
                  <li key={i}>
                    <a href="#">
                      <input type="checkbox" name="price" />
                      {item} <span>(13)</span>{" "}
                    </a>
                  </li>
                ))}
                <p className="more" onClick={() => handleMoreClick(Metal)}>
                  <FaAngleDown className="down" /> {Metal?.length - 4} more
                </p>
              </ul>
            </div>
            <div className="ring-size">
              <div className="filter-title">Ring Size</div>
              <ul className="filter_type">
                {ringSize?.slice(0, showMore).map((item, i) => (
                  <li key={i}>
                    <a href="#">
                      <input type="checkbox" name="price" />
                      {item} <span>(133)</span>{" "}
                    </a>
                  </li>
                ))}
                <p className="more" onClick={() => handleMoreClick(ringSize)}>
                  <FaAngleDown className="down" /> {ringSize?.length - 4} more
                </p>
              </ul>
            </div>
            {hidden ? (
              <div className="hidden_type">
                <div className="types">
                  <div className="filter-title">shop for</div>

                  <ul className="filter_type">
                    {shopFor?.slice(0, showMore).map((item, i) => (
                      <li key={i}>
                        <a href="#">
                          <input type="checkbox" name="price" />
                          {item} <span>(13)</span>{" "}
                        </a>
                      </li>
                    ))}
                    <p className="more">
                      <FaAngleDown className="down" /> {shopFor?.length - 4}{" "}
                      more
                    </p>
                  </ul>
                </div>
                <div className="types">
                  <div className="filter-title">occasion</div>

                  <ul className="filter_type">
                    {occasion?.slice(0, showMore).map((item, i) => (
                      <li key={i}>
                        <a href="#">
                          <input type="checkbox" name="price" />
                          {item} <span>(13)</span>{" "}
                        </a>
                      </li>
                    ))}
                    <p
                      className="more"
                      onClick={() => handleMoreClick(occasion)}>
                      <FaAngleDown className="down" /> {occasion?.length - 4}{" "}
                      more
                    </p>
                  </ul>
                </div>
                <div className="types">
                  <div className="filter-title">earring style</div>

                  <ul className="filter_type">
                    {earringStyle?.slice(0, showMore).map((item, i) => (
                      <li key={i}>
                        <a href="#">
                          <input type="checkbox" name="price" />
                          {item} <span>(13)</span>{" "}
                        </a>
                      </li>
                    ))}
                    {/* <p className="more"><FaAngleDown className="down"/> {earringStyle?.length - 4} more</p> */}
                  </ul>
                </div>
                <div className="types">
                  <div className="filter-title">GemeStone</div>

                  <ul className="filter_type">
                    {gemeStone?.slice(0, showMore).map((item, i) => (
                      <li key={i}>
                        <a href="#">
                          <input type="checkbox" name="price" />
                          {item} <span>(13)</span>{" "}
                        </a>
                      </li>
                    ))}
                    <p
                      className="more"
                      onClick={() => handleMoreClick(gemeStone)}>
                      <FaAngleDown className="down" /> {gemeStone?.length - 4}{" "}
                      more
                    </p>
                  </ul>
                </div>
              </div>
            ) : null}

            <div className="btn_viewMore">
              <a href="#" onClick={() => (setHidden = !hidden)}>
                view more
              </a>
            </div>
          </div>
        </div>

        <div className="wrapper_product">
          <div className="d-flex wrapper_card_item">
            <ul className="d-flex main_item">
              <li className="item">
                <a href="#">
                  Rings{" "}
                  <span>
                    <RxCross2 />
                  </span>
                </a>
              </li>
            </ul>
            <div className="item_showen">
              {" "}
              Sort :
              <ul className="d-flex">
                {shotBY.map((item, i) => (
                  <li value="1" key={i}>
                    {" "}
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-100">
            <div className="wrapper_card">
              <div className="main-card">
                <Card mockData={mockData} />
                <PriceFilter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
