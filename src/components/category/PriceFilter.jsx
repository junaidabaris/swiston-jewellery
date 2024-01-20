import React from "react";

export default function PriceFilter(){
        const filerCase = [ "5-10K" , "10-15K", "15-20k", "20-30k","30-40K","40-50K", "50-75k", "75-100k", "1L-1.5l","1.5l-2l","2l-2.5l","above 2.5l"]
        console.log(filerCase)

    return(
        <div className="price_filter">
            <div className="filter_title">filter by price</div>
            <ul  className="filter_case">
            {filerCase.map((item,i)=>(
                <li key={i}>{item}</li>
            ))}
            </ul>
            
        </div>
    )
}