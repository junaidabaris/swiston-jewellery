import cart from "../../assets/img/cart.png"
import { RxCross1 } from "react-icons/rx";

export const WishCard = ({ url, val1, val2, name }) => {
    return <div className="wishCard">
        <div className="wistop">
            <img src={url} />
            <div className="croswish">
                <RxCross1 />
            </div>
        </div>
        <div className="btmWish">
            <h6>{val1} <span>{val2} </span></h6>
            <p>{name}</p>
        </div>
        <div className="wishBtn">
            <button type="button" className="tryno">TRY NOW</button>
            <button type="button" className="addcart_wish"><img src={cart} /></button>
        </div>
    </div>
}
