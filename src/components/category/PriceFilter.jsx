import React from "react";

export default function PriceFilter({ prices }) {
   
    return (
        <div className="price_filter">
            <div className="filter_title">filter by price</div>
            <ul className="filter_case">
                {prices.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

        </div>
    )
}