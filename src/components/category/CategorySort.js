import { SelectedCategory } from "./SelectedCategory"

function CategorySort({data}) {
    const shotBY = [
        "Popularity",
        "Price -- Low to High",
        "Price -- High to Low",
        "Newest First",
        "Discount",
        "Latest",
        "Feature",
      ];
    return <div className="d-flex wrapper_card_item">
        <ul className="d-flex main_item">
            <SelectedCategory val={'Rings'} />
        </ul>
        {/* <div className="item_showen">
            {" "}
            Sort :
            <ul className="d-flex">
                <li value="1">
                    <a href="#">erero</a>
                </li>
            </ul>
        </div> */}
         <div className="item_showen">
              {" "}
             <span>Sort :</span> 
              <ul className="d-flex">
                {shotBY.map((item, i) => (
                  <li value="1" key={i}>
                    {" "}
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
    </div>
}
export default CategorySort