import React from "react";
import logo1  from "./image/logo1.png";

export default function MoneyBack(){
    return(
        <div>
            <ul className="main_list">
                            <li className="first_line">
                                <p className="logo"><img src={logo1}  alt="logo"/></p>
                                <p className="days"><strong>15 DAY MONEY-BACK</strong></p>
                                <p>100% refund for returns within 15 days. No questions asked. (Not applicable on engraved and personalized products)</p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                         <span style={{color: "pink"}}>100%</span> of Invoice value*
                                    </strong>
                                    <span>*UPTO Rs. 1,00,000 for Diamond and Gemstone Studded/ Gold/ Platinum
                                        For orders delivered in India</span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>*UPTO $1,500</strong>
                                    <span>For orders delivered in USA and Canada</span>
                                </p>
                            </li>   
                            <li>
                                <p className="aplication">Not Applicable on Orders delivered to Australia, United Kingdom, Singapore, Dubai and other countries.</p>
                            </li>
                        </ul>
                 </div>
    )
}