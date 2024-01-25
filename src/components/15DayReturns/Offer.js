import React from "react";
import MoneyBack from "./MonyBack";
import LifeTimeExcahnge from "./LifetimeExchange";
import LifeTimeBuyBack from "./LifetimeBuyBack";


export default function Offer(){
    return(
        <div>
            <div className="row">
                <div className="col-12 col-md-4 main-offer-list">
                    <MoneyBack />
                </div>
                <div className="col-12 col-md-4 main-offer-list">
                    <LifeTimeExcahnge />
                </div>
                <div className="col-12 col-md-4 main-offer-list">
                    <LifeTimeBuyBack />
                </div>
            </div>
        </div>
    )
}