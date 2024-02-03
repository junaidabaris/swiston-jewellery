import React from "react";
import gold from "./image/OLD-GOLD_.png";

export default function Gold(){
    return(
        <div className="gold_wrap">
            <div className="row g-5 align-items-center">
                <div className="col-12 col-md-6">
                    <div className="gold-img">
                        <img src={gold} />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="gold-text">
                        <h1>A stylish upgrade</h1>
                        <ul>
                            <li>- Enjoy 0% Deduction on your gold exchange value. Please note: The old gold doesn’t have to be from only CaratLane, it can be any gold jewellery you have. </li>
                        </ul>
                        <div className="know"><button className="shedule_appoitment">know more</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}