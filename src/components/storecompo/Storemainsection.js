import CardsStore from "./CardsStore"

export const Storemainsection = () => {
    return <div className="store-main">
        <div className="">
            <div className="card-holder">
                <p className="cardpera">Showing 5 Stores in <span>Delhi</span></p>
                <div className="carslists">
                    <CardsStore />
                    <CardsStore />
                    <CardsStore />
                    <CardsStore />
                    <CardsStore />
                </div>
            </div>
        </div>
    </div>
}