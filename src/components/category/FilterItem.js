function FilterItem({ value1 = '', value2 = '', qty = '' }) {
    return <li>
        <a href="#">
            <input type="checkbox" name="price" /> &#8377;{value1} -
            &#8377;{value2} <span>({qty})</span>{" "}
        </a>
    </li>
}
export default FilterItem