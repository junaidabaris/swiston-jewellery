import React from "react";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineTextsms } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };
    return(
        <footer>
            <div className="container">
            <ul className="footer_blocks">
                <li className="f_list">
                <h3 className={`list_title ${openAccordion === 0 ? 'open' : ''}`} onClick={() => handleAccordionClick(0)}>Know Your Jewellery <span className="add">{openAccordion === 0 ? <FaMinus />: <FaPlus />}</span></h3>
                <ul className={openAccordion === 0 ? 'block' : ''}>
                        <li className="listitem"><a href="/">DIAMOND GUIDE</a></li>
                        <li className="listitem"><a href="/">JEWELLERY GUIDE</a></li>
                        <li className="listitem"><a href="/">GEMSTONES GUIDE</a></li>
                        <li className="listitem"><a href="/">Gold Rate </a></li>
                        <li className="listitem"><a href="/">digital gold </a></li>
                        <li className="listitem"><a href="/">ear piercing </a></li>
                    </ul>
                </li>
                <li className="f_list">
                <h3 className={`list_title ${openAccordion === 1 ? 'open' : ''}`} onClick={() => handleAccordionClick(1)}>Swicton Advantage <span className="add">{openAccordion === 1 ? <FaMinus />: <FaPlus />}</span></h3>
                     <ul className={openAccordion === 1 ? 'block' : ''}>
                        <li className="listitem"><a href="/">15-day returns</a></li>
                        <li className="listitem"><a href="/">free shipping</a></li>
                        <li className="listitem"><a href="/">financing options</a></li>
                        <li className="listitem"><a href="/">old gold exchange</a></li>
                    </ul>
                </li>
                <li className="f_list">
                <h3 className={`list_title ${openAccordion === 2 ? 'open' : ''}`} onClick={() => handleAccordionClick(2)}>
          Customer Service <span className="add">{openAccordion === 2 ? <FaMinus />: <FaPlus />}</span>
        </h3>
        <ul className={openAccordion === 2 ? 'block' : ''}>
                        <li className="listitem"><a href="/">returns policy</a></li>
                        <li className="listitem"><a href="/">order status</a></li>
                    </ul>
                </li>
                <li className="f_list">
                <h3 className={`list_title ${openAccordion === 3 ? 'open' : ''}`} onClick={() => handleAccordionClick(3)}>
          About Us <span className="add">{openAccordion === 3 ? <FaMinus />: <FaPlus />}</span>
        </h3>
        <ul className={openAccordion === 3 ? 'block' : ''}>
                        <li className="listitem"><a href="/">our story</a></li>
                        <li className="listitem"><a href="/">press</a></li>
                       
                        <li className="listitem"><Link to='/blog'>Blog</Link></li>
                        <li className="listitem"><a href="/">careers</a></li>
                    </ul>
                </li>
                <li className="f_list">
                <h3 className={`list_title ${openAccordion === 4 ? 'open' : ''}`} onClick={() => handleAccordionClick(4)}>
          Contact Us <span className="add">{openAccordion === 4 ? <FaMinus />: <FaPlus />}</span>
        </h3>
        <ul className={openAccordion === 4 ? 'block' : ''}>
                        <li>
                            <ul className="d-flex s-media">
                                <li><a href="/"><IoMdCall /></a></li>
                                <li><a href="/"><MdOutlineTextsms /></a></li>
                                <li><a href="/"></a><FaWhatsapp /></li>
                            </ul>
                        </li>
                        <li className="c-listitem"><a href="/">24X7 Enquiry Support ( ALL Days )</a></li>
                        <li className="c-listitem"><a href="/">General : <span>contacus@Swicton.com</span></a></li>
                        <li className="c-listitem"><a href="/">Corporate : <span>B&B@Swicton.com</span></a></li>
                        <li className="c-listitem"><a href="/">HR : <span>Swicton@Swicton.com</span></a></li>
                        <li className="c-listitem"><a href="/">grievance : <span>Click here</span></a></li>
                        
                    </ul>
                </li>
            </ul> 
            <div className="store"><a href="/">find a store</a></div>
            <div>
                <ul className="social_icon">
                    <li className="facebook"></li>
                    <li className="insta"></li>
                    <li className="p"></li>
                    <li className="twetter"></li>
                    <li className="in"></li>
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
        </footer>

    )
}

// var myAccordion = document.getElementsByClassName('list_title')

// for (let index = 0; index < myAcordian.length; index++) {
//     const element = myAcordian[index]
//     element.addEventListener('click', function(){
//         element.nextElementSibling.classList.toggle("block");
//     })
// }