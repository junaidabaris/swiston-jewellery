import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Offer from "./Offer";

const TermCondition = [
    { id: "0", title: "Diamond and Gemstone Studded/ Gold/ Platinum", open: true },
    { id: "1", title: "Solitaires (loose diamonds)", open: false },
    { id: "2", title: "Mounts", open: false },
    { id: "3", title: "Preset Solitaire", open: false },
    { id: "4", title: "Gold Coins", open: false },
    { id: "5", title: "Shipping", open: false },
]


export default function TermConditon() {
    const [state, setState] = useState(TermCondition)
    const changeIndex = (id) => {
        const clone = [...state]
        const maped = clone.map((item) => {
            if (item.id == id) {
                return { ...item, open: !item.open }
            } else {
                return item
            }
        })
        setState(maped)
    }
    return (
        <div className="container">
            <div className="mt-3">
                <div className="seeT_C"><Link to="/" className="t-c">See detailed Terms & Conditions</Link></div>
                <div>
                    <ul className="term-condition-list">
                        {state?.map((text) => {
                            return (
                                <li onClick={() => { changeIndex(text.id) }}> <div className="header_title"><span><FaPlus /></span> {text.title} <span className="down-icon"><FaAngleDown /></span></div>
                                    {text.open && <Offer />}
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
}