import { useState } from "react"
import { ShippingAddress } from "./ShippingAddress"
import AddShipping from "./AddShipping"

export const AddBillingadd = () => {
    const [shipping, setShipping] = useState(false)
    return <div className="checkoutBody">
        <div className="billingDetails">
            <h5>Billing Details</h5>



            <form className="row">
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                    <input type="text" className="form-control" name="bcountry" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">State</label>
                    <input type="text" className="form-control" name="bstate" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                    <input type="text" className="form-control" name="bcity" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">ZIP</label>
                    <input type="text" className="form-control" name="bzip" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">Province</label>
                    <input type="text" className="form-control" name="bprovince" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address Line1</label>
                    <input type="text" className="form-control" name="baddressLine1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">Address Line2</label>
                    <input type="text" className="form-control" name="baddressLine2" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">Landmark</label>
                    <input type="text" className="form-control" name="blandmark" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 col-6">
                    <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
                    <input type="text" className="form-control" name="bcompany" aria-describedby="emailHelp" />
                </div>

            </form>

            <button type="button" className="btn btn-primary extjwell" style={{ margin: "10px 0" }} >Add Address</button>
            <form id="checkout-form">



                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        checked={shipping}
                        onChange={() => { }}
                        onClick={() => setShipping(!shipping)}
                    />
                    <label
                        className="form-check-label"
                        onClick={() => setShipping(!shipping)}
                    >
                        Ship to a different address?
                    </label>
                </div>

                {/* shipping price */}

                {shipping && (<div>
                    <ShippingAddress />
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <AddShipping />
                    </div>

                </div>)}



                <div className="form-group mb-3">
                    <label className="order-comments">
                        Order notes (optional)
                    </label>
                    <textarea
                        className="form-control"
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        required
                        defaultValue={""}
                        rows="4"
                        name="notes"
                    />
                </div>
            </form>
        </div>
    </div>


}