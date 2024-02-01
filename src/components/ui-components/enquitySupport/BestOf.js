import Link from "antd/es/typography/Link";
import React, { useState } from "react";
import Slider from "react-slick";
import p1 from "./image/p2_files/1.jpg"
import p2 from "./image/p2_files/2.jpg"
import p3 from "./image/p2_files/3.jpg"
import p4 from "./image/p2_files/4.jpg"
import p5 from "./image/p2_files/5.jpg"
import p6 from "./image/p2_files/6.jpg"


const BestCard = [
    {id:"0", image:p1, currentPrice:"₹18,113", prePrice:"₹30,200", detail:"Isha Delight Diamond Nose Pin"},
    {id:"1", image:p2, currentPrice:"₹15,113", prePrice:"₹40,200", detail:"Isha Delight Diamond Nose Pin"},
    {id:"2", image:p3, currentPrice:"₹14,113", prePrice:"₹20,200", detail:"Isha Delight Diamond Nose Pin"},
    {id:"3", image:p4, currentPrice:"₹19,143", prePrice:"₹60,200", detail:"Isha Delight Diamond Nose Pin"},
    {id:"4", image:p5, currentPrice:"₹16,113", prePrice:"₹30,200", detail:"Isha Delight Diamond Nose Pin"},
    {id:"5", image:p6, currentPrice:"₹18,163", prePrice:"₹20,700", detail:"Isha Delight Diamond Nose Pin"},
]
export default function BestOf(){
    const [ classAdd, SetClassAdd] = useState(false)
    
  console.log(classAdd)
    const getData =()=>{
        console.log('mouse enter')
        SetClassAdd(true)
    }
    const removeClase =()=>{
        SetClassAdd(false)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive : [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div className="wrapper-BestOf">
                <div className="d-flex bestOf">
                    <h2>Best of SwistonJewellery</h2>
                    <ul className="d-flex B_catagory">
                        <li className="effect" onMouseEnter={getData} onMouseLeave={removeClase}><Link to="/" >women</Link></li>
                        <li className={classAdd ? 'effect' : ''} onMouseEnter={getData} onMouseLeave={removeClase}><Link to="/" >men</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="mt-5">
                        <Slider {...settings}>
                            {BestCard.map((index)=>{
                                return(
                                    <div>
                                        <div className="b_card">
                                        <img src={index.image} />
                                        <div>
                                            <p><span className="currentPrice">{index.currentPrice}</span> <span className="prePrice">{index.prePrice}</span></p>
                                            <p className="detail">{index.detail}</p>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
        </div>
    )
}