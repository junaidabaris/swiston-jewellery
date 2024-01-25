import React from "react";
import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";

export default function NavCat(){
    const [openClass, setClass] = useState(null);

const colerEffect = (color) => {
    setClass((prevColor) => (prevColor === color ? null : color));
  };
    return(
        <>
        <nav className="jewellery">
            <div className="container">
                <div className="d-flex">
                    <h1 className="jew_title">jewellery</h1>
                    <span className="jew_design">4263 designs</span>
                </div>
                <ul className="d-flex path">
                    <li><a href="/">home</a></li>
                    <li><a href="/" className="f-8"><FaGreaterThan /></a></li>
                    <li><a href="/">jewellery</a></li>
                </ul>
            </div>
        </nav>
        <section className="container n-2">
            <ul className="wrapper_types d-flex">
                <li onClick={() => colerEffect(0)}><a href="#" className={`color_effect ${openClass === 0 ? 'color_effect' : ''}`}>All</a></li>
                <li onClick={() => colerEffect(1)}><a href="#" className={openClass === 1 ? 'color_effect' : ''}>Try at Home</a></li>
                <li onClick={() => colerEffect(2)}><a href="#" className={openClass === 2 ? 'color_effect' : ''}>Store Pickup</a></li>
                <li onClick={() => colerEffect(3)}><a href="#" className={openClass === 3 ? 'color_effect' : ''}>Fast Delivery</a></li>
                <li onClick={() => colerEffect(4)}><a href="#" className={openClass === 4 ? 'color_effect' : ''}>New In</a></li>
            </ul>
        </section>
        </>
    );
}