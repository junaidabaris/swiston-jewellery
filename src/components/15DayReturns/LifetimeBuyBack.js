import React from "react";
import logo3  from "./image/logo3.png";

export default function LifeTimeBuyBack(){
    return(
        <div>
            <ul className="main_list">
                            <li className="first_line">
                                <p className="logo"><img src={logo3}  alt="logo"/></p>
                                <p className="days"><strong>LIFETIME BUYBACK</strong></p>
                                <p>Sell your diamond jewellery back to us.</p>
                            </li>
                            <li>
                                <p>
                                    <strong>
                                             Diamond Jewellery
                                    </strong>
                                    <span>Additional <span style={{color: "pick"}}>10% </span> will be deducted from the LTE value*</span>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Plain Gold /Platinum/ Gemstone Jewellery</strong>
                                    <span>Additional <span style={{color: "pick"}}>3%</span> will be deducted from the LTE value *</span>
                                    <p className="remark">*Maximum value of Rs. 10 lakhs
                                    </p>
                                </p>
                            </li>   
                            <li>
                                <p className="application">Not Applicable on International Orders</p>
                            </li>
                        </ul>
                 </div>
    )
}