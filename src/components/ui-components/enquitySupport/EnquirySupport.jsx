import React from "react";
import  ImageSlide  from "./ImageSlide.js";
import OneOfKind from "./OneOFKind.js";
import "./EnquirySupport.css"
import EveryDay from "./EveryDay.js";
import Adds from "./Adds.js";
import CollectionLabel from "./Collectionlabel.js";
import Banner from "./Banners.js";
import Appointment from "./Appointment.js";
import Gold from "./Gold.js";
import Tanishq from "./Tanishq.js";
import BestOf from "./BestOf.js";
import Shopingpolicy from "./ShopingPolicy.js";
import ViaInstagram from "./ViaInstagram.js";
import ShopBYinsta from "./ShopInsta.js";
import Form from "./EnquriyFrom.js";


const EnquirySupport=()=>{
    return(
        <>
            <div>
                <ImageSlide />
                <div className="mainBox">
                    <OneOfKind />
                    <EveryDay />
                    <Adds />
                    <CollectionLabel />
                    <Banner />
                </div>
                <Appointment />
                <Gold />
                <Tanishq />
                <BestOf />
                <Shopingpolicy />
                <ViaInstagram />
                <ShopBYinsta />
                <Form />
            </div>
        </>
    )
}

export default  EnquirySupport