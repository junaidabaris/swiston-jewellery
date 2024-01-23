import { FaAngleDown } from "react-icons/fa"
import { FaAnglesDown } from "react-icons/fa6";
import FilterItem from "./FilterItem";
import { useState } from "react";
import { Material, ProductType, price } from "../../pages/category/mockData";

function CategoryFilter({ data }) {
    const [showMore, setShowMore] = useState({ price: 8, type: 8, materials: 8, metalType: 8 ,ringsize:4,gemstone:5,themes:4});
    const [text, setText] = useState("Show All");
    const handleMoreClick = (filter, foruse) => {
        if (foruse == 'type') {
            if (text == 'Hide') {
                setShowMore({ ...showMore, type: 8 });
                setText("Show All");

            } else {
                setShowMore({ ...showMore, type: showMore.type + filter.length });
                setText("Hide");
            }
        }
        if (foruse == 'material') {
            if (showMore.materials > filter.length) {
                return
            }
            if (text == 'Hide') {
                setShowMore({ ...showMore, materials: 8 });
                setText("Show All");

            } else {
                setShowMore({ ...showMore, materials: showMore.materials + filter.length });
                setText("Hide");
            }
        }
        if (foruse == 'metalType') {
            if (showMore.metalType > filter.length) {
                return
            }
            if (text == 'Hide') {
                setShowMore({ ...showMore, metalType: 8 });
                setText("Show All");

            } else {
                setShowMore({ ...showMore, metalType: showMore.metalType + filter.length });
                setText("Hide");
            }
        }
        if (foruse == 'ringsize') {
            if (showMore.ringsize > filter.length) {
                return
            }
            if (text == 'Hide') {
                setShowMore({ ...showMore, ringsize:4 });
                setText("Show All");

            } else {
                setShowMore({ ...showMore, ringsize: showMore.ringsize + filter.length });
                setText("Hide");
            }
        }
        if (foruse == 'gemstone') {
            if (showMore.gemstone > filter.length) {
                return
            }
            if (text == 'Hide') {
                setShowMore({ ...showMore, gemstone: 5 });
                setText("Show All");

            } else {
                setShowMore({ ...showMore, gemstone: showMore.gemstone + filter.length });
                setText("Hide");
            }
        }
        if (foruse == 'themes') {
            if (showMore.themes > filter.length) {
                return
            }
            if (text == 'Hide') {
                setShowMore({ ...showMore, themes: 4 });
                setText("Show All");

            } else {
                setShowMore({ ...showMore, themes: showMore.themes + filter.length });
                setText("Hide");
            }
        }


    };
    return <div className="wrapper_filter">
        <div className="main-filter">
            <p className="filter-heading">
                filter <span>1</span>
            </p>
            <div className="clear">Clear All</div>
        </div>
        <div className="types_main">
            <div className="types">
                <div className="filter-title">Price</div>
                <ul className="filter_type">
                    <FilterItem value1={10000} value2={20000} qty={53} str={true} />
                </ul>
                <p className="more" onClick={() => handleMoreClick(price, 'price')}>
                    <FaAngleDown className="down" /> {4} {text}
                </p>
            </div>
            <div className="types">
                <div className="filter-title">Product Type</div>
                <ul className="filter_type">
                    {data?.types && data?.types?.slice(0, showMore.type).map((item) => {
                        return <FilterItem key={item._id} value1={item?.name} str={false} />
                    })}
                </ul>

                <p className="more" onClick={() => handleMoreClick(data?.types, 'type')}>
                    <FaAngleDown className="down" /> {text}
                </p>
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
                        {data?.material && data?.material?.slice(0, showMore.materials).map((item) => {
                            return <FilterItem key={item._id} value1={item?.name} str={false} />
                        })}
                        <p className="more" onClick={() => handleMoreClick(data?.material, 'material')}>
                            <FaAngleDown className="down" /> {text}
                        </p>
                    </ul>
                </ul>
            </div>
            <div className="types">
                <div className="filter-title">Metal</div>

                <ul className="filter_type">
                    {data?.metalType && data?.metalType?.slice(0, showMore.metalType).map((item) => {
                        return <FilterItem key={item._id} value1={item?.name} str={false} />
                    })}

                    <p className="more" onClick={() => handleMoreClick(data?.metalType, 'metalType')}>
                        <FaAngleDown className="down" /> {text}
                    </p>
                </ul>
            </div>
            <div className="types">
                <div className="filter-title">Shop For</div>

                <ul className="filter_type">
                    {data?.shopfor && data?.shopfor.map((item) => {
                        return <FilterItem key={item._id} value1={item?.name} str={false} />
                    })}

                </ul>
            </div>
            <div className="types ring-size">
                <div className="filter-title">Ring Size</div>
                <ul className="filter_type">
                    
                    <ul className="filter_type">
                    {data?.ringsize && data?.ringsize?.slice(0, showMore.ringsize).map((item) => {
                        return <FilterItem key={item._id} value1={item?.name} str={false} />
                    })}

                </ul>
                    <p className="more" onClick={() =>  handleMoreClick(data?.ringsize, 'ringsize')}>
                        <FaAnglesDown className="down" />  {text}
                    </p>
                </ul>
            </div>
            <div className="types ring-size">
                <div className="filter-title">Gemstone</div>
                <ul className="filter_type">
                    
                    <ul className="filter_type">
                    {data?.gemstone && data?.gemstone?.slice(0, showMore.gemstone).map((item) => {
                        return <FilterItem key={item._id} value1={item?.name} str={false} />
                    })}

                </ul>
                    <p className="more" onClick={() =>  handleMoreClick(data?.gemstone, 'gemstone')}>
                        <FaAnglesDown className="down" />  {text}
                    </p>
                </ul>
            </div>
            <div className="types ring-size">
                <div className="filter-title">Themes</div>
                <ul className="filter_type">
                    
                    <ul className="filter_type">
                    {data?.themes && data?.themes?.slice(0, showMore.themes).map((item) => {
                        return <FilterItem key={item._id} value1={item?.name} str={false} />
                    })}

                </ul>
                    <p className="more" onClick={() =>  handleMoreClick(data?.themes, 'themes')}>
                        <FaAnglesDown className="down" />  {text}
                    </p>
                </ul>
            </div>

            {/* 
            <div className="btn_viewMore">
                <a href="#" onClick={() => (setHidden = !hidden)}>
                    view more
                </a>
            </div> */}
        </div>
    </div>
}
export default CategoryFilter