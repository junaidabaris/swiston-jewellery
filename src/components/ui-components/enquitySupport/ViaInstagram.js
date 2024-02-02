import React  from "react";
import { BsInstagram } from "react-icons/bs";
import Slider from "react-slick";

const viainsta = [
    {id:"0", text:'”My brother surprised me with this necklace last Raksha Bandhan. It was just an aww moment for me. 🥰 Engraving my name on it is the best part!”', name:"- Diksha Saxena via Instagram"},
    {id:"1", text:'”My brother surprised me with this necklace last Raksha Bandhan. It was just an aww moment for me. 🥰 Engraving my name on it is the best part!”', name:"- Diksha Saxena via Instagram"},
    {id:"2", text:'”My brother surprised me with this necklace last Raksha Bandhan. It was just an aww moment for me. 🥰 Engraving my name on it is the best part!”', name:"- Diksha Saxena via Instagram"},
]

export default function ViaInstagram(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoPlay: true,
      };
    return(
        <div className="via_insta">
            <div className="wrapper_element">
            <Slider {...settings} className="silde">
                {viainsta.map((index)=>
                <div>
                    <div className="insta_deatail">
                        <div><span><BsInstagram /></span></div>
                        <h1>{index.text}</h1>
                        <p>{index.name}</p>
                        <button>read more</button>
                    </div>
                </div>
                )} 
             </Slider>
             </div>
        </div>
    )
}