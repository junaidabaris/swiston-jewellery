import { useEffect, useState } from "react"
import { Button, Table } from "react-bootstrap"
import { GrView } from "react-icons/gr"
import { FcCancel } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { TbShoppingCartPlus } from "react-icons/tb"
import ModalCancel from "./ModalCancel"
import { ListCompon } from "./ListCompon"
function MyAccountDetail() {

    const [modalShow, setModalShow] = useState(false);


    return <>
        <h2 style={{ display: "flex", justifyContent: "center" }}>Purchase History</h2>
        <div style={{
            display: 'flex',
            justifyContent: 'start',
            width: '1294px',
            margin: 'auto',
            cursor: "pointer",
            justifyContent: "space-between"
        }}>
            <h5>See Your Cancel Orders</h5>
            <div style={{ width: "300px" }}>
                <select class="form-select" aria-label="Default select example">
                    <option value="1">All Status</option>
                    <option>pending</option>
                </select>
            </div>
        </div >
        <div className="container classOverflow" style={{ margin: "20px auto" }} >
            <Table bordered hover className="table aiz-table mb-0 footable footable-1 breakpoint-xl">
                <thead>
                    <tr className="footable-header">
                        <th>Order Code</th>
                        <th>Order No</th>
                        <th>Order Date</th>
                        <th>Order Amount</th>
                        <th>Order Delivery Status</th>
                        <th>Order Payment Status</th>
                        <th>Delivery Type</th>
                        <th>Action</th>
                        <th>Cancel</th>
                        <th>Re-Order</th>
                    </tr>
                </thead>
                <tbody>
                    {true ? [{ _id: 232323, referenceNo: 22, status: [{ createdAt: '1 / 21 / 12', orderStatusName: 'pending' }] }].map((item, i) => {
                        return <ListCompon key={item._id} setModalShow={setModalShow} item={item} />
                    }) : <tr>
                        <th><div className="preloaderCount">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div></th></tr>}



                </tbody>
            </Table>

            {modalShow && <ModalCancel
                show={modalShow}
                onHide={() => setModalShow(false)}
            />}
        </div>
    </>
}
export default MyAccountDetail