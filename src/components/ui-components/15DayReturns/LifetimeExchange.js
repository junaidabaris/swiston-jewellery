import React from "react";
import logo2 from "./image/logo2.png"

export default function LifeTimeExcahnge(){
    return(
        <div>
             <ul className="main_list">
                            <li className="first_line">
                                <p className="logo"><img src={logo2}  alt="logo"/></p>
                                <p className="days"><strong>LIFETIME EXCHANGE</strong></p>
                                <p>Exchange or upgrade your jewellery anytime.</p>
                            </li>
                            <li className="meterail">
                                <p>
                                    <strong>
                                        Gold/ Platinum
                                    </strong>
                                    <span><span style={{color: "pink"}}>100%</span>  value of metal weight at the prevailing metal rate*</span>
                                </p>
                            </li>
                            <li className="meterail">
                               <p>
                                    <strong>
                                    Diamond
                                    </strong>
                                    <span><span style={{color: "pink"}}>100%</span> of the prevailing diamond value*</span>
                                </p>
                            </li>
                            <li className="meterail">
                               <p>
                                    <strong>
                                    Gemstone
                                    </strong>
                                    <span><span style={{color: "pink"}}>90%</span> of the prevailing gemstone value*</span>
                                </p>
                            </li>    
                            <li>
                                <p className="application">Not Applicable on International Orders</p>
                                <p className="note-application">* In case of any discount given during the original purchase on the metal and stone value, an equivalent amount will be deducted from the Exchange amount (Maximum value of Rs. 10 lakhs). The xCLusive Points used while placing an order will be deducted from the Lifetime Exchange value.</p>
                            </li>
                        </ul>
        </div>
    )
}