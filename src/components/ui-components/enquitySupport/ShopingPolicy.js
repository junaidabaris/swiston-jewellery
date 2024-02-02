import React  from "react";
import Link from "antd/es/typography/Link";
import logo1 from "./image/return.PNG"
import logo2 from "./image/ship.PNG"
import logo3 from "./image/exchange.PNG"
import logo4 from "./image/lo.PNG"

const shopingpolicy = [
        {id:"0", image:logo2, title:"100% certified & free shipping", detail:"our jewellery always comes with a certificate of authentication"},
        {id:"1", image:logo1, title:"15 day money-Back", detail:"get 100% refund if you don't like your jewellery"},
        {id:"2", image:logo3, title:"LifeTime Exchange", detail:"exchange your old designs anytime want an upgarde"},
        {id:"3", image:logo4, title:"one year warranty", detail:"if your jewellery has a defect, we will fix it."},
]

export default function Shopingpolicy(){
    return(
        <div className="sPolicy mt-5">
            <div>
                <ul className="d-flex s_policyList">
                    {shopingpolicy.map((index)=>{
                        return(
                            <li >
                        <Link className="d-flex">
                            <span className="img_change">
                                <img src={index.image}/>
                            </span>
                            <p>
                                <span className="s_title">{index.title}</span>
                                <span className="s_detail">{index.detail}</span>
                            </p>
                        </Link>
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}