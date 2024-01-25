import { use } from "i18next";
import React from "react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const Filter = [
    { id: "0", title: "price", subTitle: ['under ₹5000', '₹5001-₹10000', '₹10001-₹15000', '₹15001-₹20000', '₹25001-₹30000', '₹30001-₹40000', '₹40001-₹50000', '₹50001-₹75000', '₹750001-₹100000', '₹10001-₹150000', '₹150001-₹20000', '₹20001-₹2500000', 'above ₹2500000'] },
    {
        id: "1", title: "product type", subTitle: ["earrring",
            "ring",
            "necklaces",
            "pendants",
            "bracelets",
            "chains",
            "sets",
            "mangalsutra",
            "nose pin",
            "nath",
            "charms",
            "adjustable Rings",
            "charm builders",
            "tanmaniya",
            "baby bangles",]
    },
    { id: "2", title: "weight ranges", subTitle: ["0-2 g ", "2-5 g", "5-10 g", "10-20 g", "20-30 g", ">30g"] },
    { id: "3", title: "metarial", subTitle: ["platinum", "gold", "daimond", "gemeStone", "solirane"] },
    {
        id: "4", title: "rings size", subTitle: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
            26, 27, 28, 29, 30,]
    },
    { id: "5", title: "bangle size", subTitle: [2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10] },
    { id: "6", title: "chain length", subTitle: [14, 16, 17, 18, 20, 22, 24] },
    { id: "7", title: "shop for", subTitle: ["women", "men", "baby", "kids", "men & women"] },
    {
        id: "8", title: "occasion", subTitle: ["everyday",
            "anniversary",
            "emagegment",
            "work wear",
            "desk to dinner",
            "eveving",
            "party wear",]
    },
    { id: "9", title: "earring style", subTitle: ["studs and tops", "chain eariing"] },
    { id: "10", title: "gemstone", subTitle: ["pearl", "top", "topaz", "citrine"] },
    { id: "11", title: "ring style", subTitle: ["casual ring", "bands", "cocktail", "cluster", "midi", "halo"] },
]

export default function MobileFilterCase({Click, setClick,ClickEvent }) {
    const [showAll, setshowAll] = React.useState(8)
    const [showText, setshowText] = useState("Show More")
    const handleMoreClick = () => {
        setshowAll(showAll + Filter.length);
        setshowText(" ")
    };
    const [state, setState] = useState(0)
    const bbbb=()=>{
        setClick(null)
    }
    return (
        <div className="wrapp_case">
            <div className="filterCase" onClick={()=>{ClickEvent(0)}}><span><RxCross2 /></span> <h2>filter</h2></div>
            <div className="main_list">
            <ul className="case_list">
                {Filter?.slice(0, showAll).map((item) => {
                    return <li onClick={()=>{setState(item.id)}} className={item.id == state && 'ActiveClass'}><span>{item?.title}</span>
                        <ul className={`drop ${item.id == state ? 'd-block' : 'd-none'}`}>
                            {item.subTitle?.map((i) => {
                                return <li><span><TiTick /></span> {i}</li>
                            })}
                        </ul>
                    </li>
                })}

                <a href="#" className="show_more" onClick={handleMoreClick}>{showText}</a>
            </ul>
            </div>
        </div>
    )
}