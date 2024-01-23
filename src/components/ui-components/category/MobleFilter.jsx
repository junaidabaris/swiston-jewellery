import React, { useState } from "react";
import "../../ui-components/category/MobileFilter.css"
import { CiGrid31 } from "react-icons/ci";
import { GrFormFilter } from "react-icons/gr";
import MobileFilterCase from "./MobileFilterCase";

export default function MobileFilter(){
    
    return(
        <>
        <div className="mobile_filter">
            <div className="wrapper_mobileFilter"><MobileFilterCase /></div>
            <div className="main_categories"> 
            <span><CiGrid31 />categories</span></div>
            <div className="main_filterCase"> <span><GrFormFilter /> filter</span></div>
        </div>
        </>
    )
}