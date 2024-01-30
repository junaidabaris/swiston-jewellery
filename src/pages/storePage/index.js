import { StoreBanner } from "../../components/storecompo/StoreBanner"
import { Storemainsection } from "../../components/storecompo/Storemainsection"
import { Storeques } from "../../components/storecompo/Storeques"
import "./storepage.css"
function StorePage() {
    return <div>
        <StoreBanner />
        <Storemainsection />
        <Storeques/>
    </div>
}
export default StorePage