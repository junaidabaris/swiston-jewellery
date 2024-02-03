import { FaVideo } from "react-icons/fa"

export const Card = ({item}) => {
    return <div class="card_text">
        <p className="rate">
            <span className="current-rate">{item?.currentRate}</span>
            <span className="prev-rate">{item?.prevRate}</span>
        </p>
        <div>
            <p className="delivery_date">check delivery date</p>
        </div>
        <div className="about">{item.name}</div>
        <ul className=" home_try">
            <li className="tried">
                <a href="#">try at home</a>
            </li>
            <li className="video">
                <a href="#">
                    <FaVideo />
                </a>
            </li>
        </ul>
    </div>
}