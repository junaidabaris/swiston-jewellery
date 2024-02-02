import React from "react";
import HT from "./image/T@H.webp"
import Stores from "./image/Store.webp";
import { Button } from "antd";
import { BiCurrentLocation } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Appointment(){
    return(
        <div className="wrap_appoitment">
            <div className="row g-5">
                <div className="col-12 col-md-6">
                    <div className="d-flex appoitment">
                        <div className="appoitment_img"> <img src={HT} /></div>
                        <div className="text-appoitment">
                            <h2>Unsure Which Design To Pick?</h2>
                            <p>book a free home trail!</p>
                            <div><Button className="shedule_appoitment">schedule Appointment</Button></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="d-flex appoitment">
                        <div  className="appoitment_img"> <img src={Stores} /></div>
                        <div className="text-appoitment">
                            <h2>Come visit us at any of our stores!</h2>
                            <div className="d-flex location">
                                <span><BiCurrentLocation /></span> 
                                <input type="text" placeholder="enter the pin code here" />
                                <Link to="/">locate me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}