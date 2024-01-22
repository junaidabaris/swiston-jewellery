import { SelectedCategory } from "./SelectedCategory"

function CategorySort({data}) {
    return <div className="d-flex wrapper_card_item">
        <ul className="d-flex main_item">
            <SelectedCategory val={'Rings'} />
        </ul>
        <div className="item_showen">
            {" "}
            Sort :
            <ul className="d-flex">
                <li value="1">
                    <a href="#">erero</a>
                </li>
            </ul>
        </div>
    </div>
}
export default CategorySort