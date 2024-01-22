import { useState } from "react"

function GoldCalculate() {
    const [state, setstate] = useState(true)
    const [actives, setActives] = useState({ A: true, B: false })
    const changeStates = (st) => {
        const clone = { ...actives }
        if (st == 'A') {
            clone.A = true
            clone.B = false
            setstate(true)
        } else {
            clone.B = true
            clone.A = false
            setstate(false)
        }
        setActives(clone)

    }
    return <div className="row secB">
        <div className="head">
            <h3 style={{ color: "#4f3267" }}>Calculate by purity or karatage</h3>
            <p style={{ color: "#4f3267" }}>
                Calculate by Purity or Karatage to help you find the best old gold exchange value in the market
            </p>
            <div className="foots">
                <div>
                    <div className="chenger">
                        <div onClick={() => { changeStates('A') }} className={`${actives.A && 'actives'}`}>Karatage</div>
                        <div onClick={() => { changeStates('B') }} className={`${actives.B && 'actives'}`}>Purity</div>
                    </div>
                    <form className="formkt">
                        {state ? <select class="form-select" aria-label="Default select example">
                            <option selected>Select Karatage</option>
                            <option value="1">14kt</option>
                            <option value="2">18kt</option>
                            <option value="3">22kt</option>
                            <option value="3">24kt</option>
                        </select> :

                            <input style={{ margin: "15px 0" }} className="form-control" placeholder="Enter Purity (%)" />}

                        <input style={{ margin: "15px 0" }} className="form-control" placeholder="Enter Grams" />
                        <button type="button" class="e1fx9tzi10 css-1kvvx77 e1jmj0hg0" disabled>CALCULATE EXCHANGE VALUE</button>
                    </form>
                </div>
                <div>
                   
                    <div class="gold-rate-container">
                        <div className="gold-item">
                            <div className="left">
                                <p>14 Karatage Gold</p>
                                <p className="bottom">(1 Gram)</p>
                            </div>
                            <div className="right">3751</div>
                        </div>

                        <div className="gold-item">
                            <div className="left">
                                <p>18 Karatage Gold</p>
                                <p className="bottom">(1 Gram)</p>
                            </div>
                            <div className="right">3751</div>
                        </div>
                        <div className="gold-item">
                            <div className="left">
                                <p>22 Karatage Gold</p>
                                <p className="bottom">(1 Gram)</p>
                            </div>
                            <div className="right">3751</div>
                        </div>
                        <div className="gold-item">
                            <div className="left">
                                <p>24 Karatage Gold</p>
                                <p className="bottom">(1 Gram)</p>
                            </div>
                            <div className="right">3751</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default GoldCalculate