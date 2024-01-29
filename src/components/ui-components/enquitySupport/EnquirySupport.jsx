import React from "react";
import  ImageSlide  from "./ImageSlide.js";
import OneOfKind from "./OneOFKind.js";
import "./EnquirySupport.css"
import EveryDay from "./EveryDay.js";
import Adds from "./Adds.js";
import CollectionLabel from "./Collectionlabel.js";
import Banner from "./Banners.js";


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
            </div>
        </>
    )
}

export default  EnquirySupport