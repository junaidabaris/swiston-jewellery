import { useState } from "react"
import { Modal } from "react-bootstrap"
import { FaEdit } from "react-icons/fa"
import FormBillAdd from "../../components/profile/FormBillAdd";
import EditAddress from "../../components/profile/EditAddress";
import { useEffect } from "react";
import { CompBillAdd } from "./CompBillAdd";

function BillingAddress() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [state, setState] = useState(false)
    const handleClose2 = () => setState(false);
    const handleShow2 = () => setState(true);
    return <div className="addressInfo mt-3">


        <div className="card container" style={{ margin: "10px auto" }}>
            <div className="card-header">
                <h5 className="mb-0 h6">Billing Address</h5>
            </div>
            <div className="card-body">
                <div onClick={handleShow2} className="col-lg-6 mx-auto">
                    <div className="border p-3 rounded mb-3 c-pointer text-center bg-light">
                        <i className="la la-plus la-2x" />
                        <div className="alpha-7" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Billing Address</div>
                    </div>
                </div>
                <div className="row gutters-10">

                    {true && [
                        { _id: 1, type: 'b', province: 's', addressLine1: 's', addressLine2: 's' },
                        { _id: 1, type: 'b', province: 's', addressLine1: 's', addressLine2: 's' },
                        { _id: 1, type: 'b', province: 's', addressLine1: 's', addressLine2: 's' },
                        { _id: 1, type: 'b', province: 's', addressLine1: 's', addressLine2: 's' }
                    ].map((item) => {
                        return <CompBillAdd key={item._id} item={item} handleShow={handleShow} />
                    })}

                </div>
            </div>
            <Modal show={state} style={{ padding: "20px" }} ship='Shipping' onHide={handleClose2}>
                <FormBillAdd ship='Shipping' type='shipping' />
            </Modal>

            {/* edit modal */}

            <Modal show={show} style={{ padding: "20px" }} onHide={handleClose}>
                <EditAddress handleClose={handleClose} ship='billing' type='billing' />
            </Modal>
        </div>
    </div>
}
export default BillingAddress