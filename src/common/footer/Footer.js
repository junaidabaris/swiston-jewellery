import React from "react";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineTextsms } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import "../footer/footer.css";


import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
export default function Footer() {
  const [openAccordion, setOpenAccordion   ] = useState(null);
  const handleAccordionClick = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <footer>
      <div className="container">
        <ul className="footer_blocks">
          <li className="f_list">
            <h3
              className={`list_title ${openAccordion === 0 ? "open" : ""}`}
              onClick={() => handleAccordionClick(0)}>
              Know Your Jewellery{" "}
              <span className="add">
                {openAccordion === 0 ? <FaMinus /> : <FaPlus />}
              </span>
            </h3>
            <ul className={openAccordion === 0 ? "block" : ""}>
              <li className="listitem">
                <Link to="/diamond-buy-guide">DIAMOND GUIDE</Link>
              </li>
              <li className="listitem">
                <Link to="/jewellery-guide">JEWELLERY GUIDE</Link>
              </li>
              <li className="listitem">
                <Link to="/gemstone-guide">GEMSTONES GUIDE</Link>
              </li>
              <li className="listitem">
                <Link to="/gold-rate">Gold Rate </Link>
              </li>
              <li className="listitem">
                <Link to="/digi_gold">digital gold </Link>
              </li>
              <li className="listitem">
                <Link to="/">ear piercing </Link>
              </li>
            </ul>
          </li>
          <li className="f_list">
            <h3
              className={`list_title ${openAccordion === 1 ? "open" : ""}`}
              onClick={() => handleAccordionClick(1)}>
              Swicton Advantage{" "}
              <span className="add">
                {openAccordion === 1 ? <FaMinus /> : <FaPlus />}
              </span>
            </h3>
            <ul className={openAccordion === 1 ? "block" : ""}>
              <li className="listitem">
                 <Link to="/returnpolicy" >15-day returns</Link>
              </li>
              <li className="listitem">
                <Link to ="/shipping-policy">free shipping</Link>
              </li>
              <li className="listitem">
                <Link to="/financialoption">financing options</Link>
              </li>
              <li className="listitem">
                <Link to="/gold-exchange">old gold exchange</Link>
              </li>
            </ul>
          </li>
          <li className="f_list">
            <h3
              className={`list_title ${openAccordion === 2 ? "open" : ""}`}
              onClick={() => handleAccordionClick(2)}>
              Customer Service{" "}
              <span className="add">
                {openAccordion === 2 ? <FaMinus /> : <FaPlus />}
              </span>
            </h3>
            <ul className={openAccordion === 2 ? "block" : ""}>
              <li className="listitem">
                <Link to="/returnpolicy">returns policy</Link>
              </li>
              <li className="listitem">
                <a href="/">order status</a>
              </li>
            </ul>
          </li>
          <li className="f_list">
            <h3
              className={`list_title ${openAccordion === 3 ? "open" : ""}`}
              onClick={() => handleAccordionClick(3)}>
              About Us{" "}
              <span className="add">
                {openAccordion === 3 ? <FaMinus /> : <FaPlus />}
              </span>
            </h3>
            <ul className={openAccordion === 3 ? "block" : ""}>
              <li className="listitem">
                <a href="/">our story</a>
              </li>
              <li className="listitem">
                <Link to="/press">press</Link>
              </li>
              {/* <li className="listitem">
                <a href="/">blog</a>
              </li> */}
              <li className="listitem">
                <Link to="/blog">blog</Link>
              </li>
              <li className="listitem">
                <Link to="/career">careers</Link>
              </li>
              <li className="listitem">
                <Link to="/testimonial">testimonial</Link>
              </li>
              <li className="listitem">
                <Link to="/vedio-gallery">vedio gallery</Link>
              </li>
            </ul>
          </li>
          <li className="f_list">
            <h3
              className={`list_title ${openAccordion === 4 ? "open" : ""}`}
              onClick={() => handleAccordionClick(4)}>
              Contact Us{" "}
              <span className="add">
                {openAccordion === 4 ? <FaMinus /> : <FaPlus />}
              </span>
            </h3>
            <ul className={openAccordion === 4 ? "block" : ""}>
              <li>
                <ul className="d-flex s-media">
                  <li>
                    <a href="/">
                      <IoMdCall />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <MdOutlineTextsms />
                    </a>
                  </li>
                  <li>
                    <a href="#"></a>

                    <ReactWhatsapp style={{ border: "none", backgroundColor: "transparent", padding: '0' }} number='+97 466362210' massage="Hello Mamass Tycoon"><FaWhatsapp /></ReactWhatsapp>
                  </li>
                </ul>
              </li>
              <li className="c-listitem">
                <Link to="/enquiry-support">24X7 Enquiry Support ( ALL Days )</Link>
              </li>
              <li className="c-listitem">
                <a href="/">
                  General : <span>contacus@Swiston.com</span>
                </a>
              </li>
              <li className="c-listitem">
                <a href="/">
                  Corporate : <span>B&B@Swiston.com</span>
                </a>
              </li>
              <li className="c-listitem">
                <a href="/">
                  HR : <span>Swiston@Swiston .com</span>
                </a>
              </li>
              <li className="c-listitem">
                <a href="/">
                  Grievance : <span>Click here</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="store">
          <Link to="/stors">find a store</Link>
        </div>
        <div>
          <ul className="social_icon">
            <a href="https://www.facebook.com/swistonjewellery" target="blank"> <li className="facebook">

            </li></a>
            <a href="https://www.instagram.com/swistonjewellery/" target="blank"> <li className="insta"></li></a>
            <a href="https://www.linkedin.com/in/swiston-jewellery-953a182ab/" target="blank"> <li className="in"></li></a>


            <li className="p"></li>
            <li className="twetter"></li>
          </ul>
        </div>
        <div className="app_store">
          <div className="apps_store">
            <ul className="apps">
              <li className="google_play"></li>
              <li className="apple"></li>
            </ul>
          </div>
          <div className="visa"></div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          Copyright © 2024{" "}
          <Link to="https://www.abarissoftech.com/">
            <span>Abaris Softech Pvt Ltd.</span>
          </Link>{" "}
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// var myAccordion = document.getElementsByClassName('list_title')

// for (let index = 0; index < myAcordian.length; index++) {
//     const element = myAcordian[index]
//     element.addEventListener('click', function(){
//         element.nextElementSibling.classList.toggle("block");
//     })
// }
