import React from "react";
import tanishq from "./image/c656a495c4564a4c8ac8a1f5dee414bd.png"

export default function Tanishq(){
    return(
        <div className="tanishq_wrap">
            <div className="tanishq">
                <div><img src={tanishq} /></div>
                <h1>the spirit of <span>swiston jewellery</span></h1>
                <p>The highest quality of craftsmanship and innovation, that brings you modern, everyday designs.</p>
                <div className="know"><button className="btn_know">know</button></div>
            </div>    
        </div>
    )
}