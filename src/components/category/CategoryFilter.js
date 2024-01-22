import { FaAngleDown } from "react-icons/fa"
import { FaAnglesDown } from "react-icons/fa6";
import FilterItem from "./FilterItem";
import { useState } from "react";
import { Material, ProductType, price } from "../../pages/category/mockData";

function CategoryFilter({ data }) {
    const [showMore, setShowMore] = useState(4);
    const [text, setText] = useState("more");
    const [hidden, setHidden] = useState(false);
    const handleMoreClick = (filter) => {
        setShowMore(showMore + filter.length);
        setText("less more");
    };
    return <div className="wrapper_filter">
        <div className="main-filter">
            <p className="filter-heading">
                filter <span>1</span>
            </p>
            <div className="clear">clear all</div>
        </div>
        <div className="types_main">
            <div className="types">
                <div className="filter-title">Price</div>
                <ul className="filter_type">
                    <FilterItem value1={10000} value2={20000} qty={53} />

                </ul>
                <button type="button" className="more" onClick={() => handleMoreClick(price)}>
                    <FaAngleDown className="down" /> {4} {text}
                </button>
            </div>
            <div className="types">
                <div className="filter-title">Product type</div>
                <ul className="filter_type">
                    <FilterItem value1={2290} />

                </ul>

                <button type="button" className="more" onClick={() => handleMoreClick(ProductType)}>
                    <FaAngleDown className="down" /> {4} more
                </button>
            </div>
            <div className="types">
                <div className="filter-title">Weight Ranges</div>
                <ul className="filter_type">
                    <FilterItem value1={'44cc '} qty={133} />

                </ul>
            </div>
            <div className="types">
                <div className="filter-title">Material</div>
                <ul className="filter_type">
                    <ul className="filter_type">
                        <FilterItem value1={'553 '} qty={133} />
                        <button type="button" className="more" onClick={() => handleMoreClick(Material)}>
                            <FaAngleDown className="down" /> {4} more
                        </button>
                    </ul>
                </ul>
            </div>
            <div className="types">
                <div className="filter-title">Metal</div>

                <ul className="filter_type">
                    <FilterItem value1={'545 '} qty={13} />

                    <button type="button" className="more" onClick={() => handleMoreClick(Material)}>
                        <FaAnglesDown className="down" /> {4} more
                    </button>
                </ul>
            </div>
            <div className="ring-size">
                <div className="filter-title">Ring Size</div>
                <ul className="filter_type">
                    <FilterItem value1={'74645 '} qty={133} />

                    <button type="button" className="more" onClick={() => handleMoreClick(Material)}>
                        <FaAnglesDown className="down" /> {4} more
                    </button>
                </ul>
            </div>


            <div className="btn_viewMore">
                <a href="#" onClick={() => (setHidden = !hidden)}>
                    view more
                </a>
            </div>
        </div>
    </div>
}
export default CategoryFilter