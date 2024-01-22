import { RxCross2 } from "react-icons/rx"

export const SelectedCategory = ({val}) => {
    return <li className="item">
        <a href="#">
            {val}
            <span>
                <RxCross2 />
            </span>
        </a>
    </li>
}