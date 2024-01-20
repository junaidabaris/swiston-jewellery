import { FaStar } from "react-icons/fa";
import CardsList from "./CardsList";
function StorsList() {
    return <div className="container">
        <p className="storListnum">Showing 33 Stores in <span>110025</span></p>
        <div className="storItems">
           <CardsList/>
           <CardsList/>
           <CardsList/>
           <CardsList/>
           <CardsList/>
           <CardsList/>
           <CardsList/>
           <CardsList/>
           <CardsList/>
           <CardsList/>
           <CardsList/>
        </div>
    </div>
}
export default StorsList