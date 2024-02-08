import { useState } from "react";
import { useEffect } from "react"

function FormBillAdd({ getData, ship, type }) {
    const [show, setShow] = useState(false)
    const [state, setState] = useState({
        type: type,
        country: "",
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        zip: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        province: "",
        company: "",
        userid: window.localStorage.getItem('user_id')
    })
   
    const onchengeHandle = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }
    const token = window.localStorage.getItem('token')
  
    const setAddress = (val) => {
        const clone = { ...state, type: val }
        setState(clone)
    }


    return <form className="row">
        <div className="mb-3 col-6">
            {ship === 'Shipping' && <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => { setAddress('shipping') }} />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Shipping Address
                </label>
            </div>}

            {ship === 'billing' && <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={() => { setAddress('billing') }} />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Billing Address
                </label>
            </div>}

        </div>

        {ship === 'Shipping' && <>
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                <input type="text" className="form-control" name="firstname" onChange={onchengeHandle} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                <input type="text" className="form-control" name="lastname" onChange={onchengeHandle} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="text" className="form-control" name="email" onChange={onchengeHandle} aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                <input type="text" className="form-control" name="phone" onChange={onchengeHandle} aria-describedby="emailHelp" />
            </div>
        </>}


        <div className="mb-3 col-6">
            <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
            <input type="text" className="form-control" name="country" onChange={onchengeHandle} aria-describedby="emailHelp" />
        </div>

        <div className="mb-3 col-6">
            <label htmlFor="exampleInputEmail1" className="form-label">State</label>
            <input type="text" className="form-control" name="state" onChange={onchengeHandle} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 col-6">
            <label htmlFor="exampleInputEmail1" className="form-label">City</label>
            <input type="text" className="form-control" name="city" onChange={onchengeHandle} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 col-6">
            <label htmlFor="exampleInputEmail1" className="form-label">ZIP</label>
            <input type="text" className="form-control" name="zip" onChange={onchengeHandle} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 col-6">
            <label htmlFor="exampleInputEmail1" className="form-label">Province</label>
            <input type="text" className="form-control" name="province" onChange={onchengeHandle} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 col-6">
            <label htmlFor="exampleInputEmail1" className="form-label">Address Line1</label>
            <input type="text" className="form-control" name="addressLine1" onChange={onchengeHandle} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 col-6">
            <label htmlFor="exampleInputEmail1" className="form-label">Address Line2</label>
            <input type="text" className="form-control" name="addressLine2" onChange={onchengeHandle} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 col-6">
            <label htmlFor="exampleInputEmail1" className="form-label">Landmark</label>
            <input type="text" className="form-control" name="landmark" onChange={onchengeHandle} aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 col-6">
            <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
            <input type="text" className="form-control" name="company" onChange={onchengeHandle} aria-describedby="emailHelp" />
        </div>
        {/* {isSuccess && (<div className="alert alert-success" role="alert">
            Address Add Successfully!
        </div>)}
        {isAddsuss && (<div className="alert alert-success" role="alert">
            Address Add Successfully!
        </div>)} */}

        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary" >Submit  {show && <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>}</button>
    </form>
}
export default FormBillAdd