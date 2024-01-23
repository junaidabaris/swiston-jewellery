import React, { useState } from "react";
import "../../ui-components/category/MobileFilter.css"
import { CiGrid31 } from "react-icons/ci";
import { GrFormFilter } from "react-icons/gr";
import MobileFilterCase from "./MobileFilterCase";

export default function MobileFilter(){
    const [click, setClick ] = useState(null)
    const ClickEvent = (index) => {
        setClick((prevIndex) => (prevIndex === index ? null : index));
      };
    
    return(
        <>
        <div className="mobile_filter">
            <div className={ `wrapper_mobileFilter ${click === 1 ? 'show' : ''}`}><MobileFilterCase ClickEvent={ClickEvent} /></div>
            <div className={`main_categories ${click === 3 ? 'open' : ''}`} onClick={() => ClickEvent(0)} > 
            <span><CiGrid31 />categories</span></div>
            <div className={`main_filterCase ${click === 1 ? 'open' : ''}`} onClick={() => ClickEvent(1)} > <span><GrFormFilter /> filter</span></div>
        </div>
        </>
    )
}