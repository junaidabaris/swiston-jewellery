import React from "react";
import Link from "antd/es/typography/Link.js";
import desk1 from "./image/Desktop_1.jpg"
import desk2 from "./image/Desktop_2.jpg"
import desk3 from "./image/Desktop_3.jpg"
import desk4 from "./image/Desktop_4.jpg"
import desk5 from "./image/Desktop_5.jpg"
import desk6 from "./image/Desktop_6.jpg"

const adds = [
    {id:"0", image: desk1},
    {id:"1", image: desk2},
    {id:"2", image: desk3},
    {id:"3", image: desk4},
    {id:"4", image: desk5},
    {id:"5", image: desk6}
] 


export default function Adds(){
    return(
        <div className="main_add">
            <div className="row g-4">
                {adds?.map((index)=>{
                    return(
                    <div  className="col-12 col-md-4">
                        <Link to="/"> <img src={index.image} /> </Link>
                    </div>
                    )
                })}
            </div> 
        </div>
    )
}