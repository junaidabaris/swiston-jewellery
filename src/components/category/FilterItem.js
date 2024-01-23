function FilterItem({ value1 = '', value2 = '', qty = '', str }) {
    return <li>
        <a href="#">
            <input type="checkbox" name="price" /> {str && <>&#8377;</>}{value1}{str && <>-</>}
            {str && <>&#8377;</>}{value2}
            {str &&  <span>({qty})</span>}
        </a>

        
        {/* <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
                {str && <>&#8377;</>}{value1}{str && <>-</>}
                {str && <>&#8377;</>}{value2}
                {str && <span>({qty})</span>}
            </label>
        </div> */}
    </li>
}
export default FilterItem