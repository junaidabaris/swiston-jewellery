import { useState } from "react";
import SussessMsg from "./SussessMsg";
export const RigthSide = () => {
    const [state ,setState] = useState(false)
    const orderPlace = ()=>{
        setState(true)
        setTimeout(() => {
            setState(false)
        }, 3000);
    }
    return <div className="orderInfo" style={{ width: "545px" }}>
        <input placeholder="Apply Coupon" className="form-control" />
        <button type="button" className="btn btn-info extjwell" style={{ margin: '10px 0' }} >Apply Coupon</button>
        <h5 className="mb-4">Your Order has <span style={{ color: "red" }}>2</span> Items</h5>

        <div style={{ overflow: "auto" }}>

            <table className="table">
                <thead>
                    <tr className="fontHead">
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Variant</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sub Total</th>
                        {/* <th scope="col">Tax %</th> */}
                        <th scope="col">Tax</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td>1</td>
                        <td style={{ fontSize: "14px" }}>qq</td>
                        <td>1</td>
                        <td>34</td>
                        <td>352</td>
                        <td>343</td>
                        {/* <td>{item?.variant?.tax}</td> */}
                        <td>13</td>
                        <td>23</td>
                    </tr>

                </tbody>
            </table>
        </div>


        <div className="productAdd" style={{ textAlign: "right" }}>
            <div className="col">
                <div className="subTotal">
                    <h6>Subtotal</h6>

                </div>
                <div className="subTotal">
                    <h6>Coupon Applied</h6>
                    <p></p>
                </div>
                <div className="subTotal">
                    <h6>Shipping</h6>
                    <p></p>
                </div>
                <div className="subTotal">
                    <h6>GST</h6>

                </div>
                <div className="subTotal">
                    <h6>Cart Total</h6>
                    <p></p>
                </div>
            </div>

        </div>


        <div className="shipping">
            <div className="cartTotalFooter">
                <div className="totalAmount">

                </div>


                <div className="paymentMethods">
                    <h4>Payment </h4>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault4"
                            defaultChecked
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault4"
                        >
                            Cash on Delivery/Pay on Delivery
                        </label>
                    </div>


                </div>





                <div className="proceed">
                    <button
                        type="button"
                        className="btn btn-primary extjwell"
                        onClick={orderPlace}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
        {state && <SussessMsg />}
        
    </div>
}