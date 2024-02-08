import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap"

function ModalCancel(props) {

    const [state, setState] = useState({
        orderId: 232,
        reason: '99998888',
        // user: userid,
        note: ""
    })

    const changeVal = (e) => {
        const clone = { ...state }
        clone[e.target.name] = e.target.value
        setState(clone)
    }


    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Cancel Order Id :22
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <select name="reason" onChange={changeVal} style={{ margin: "15px 0" }} className="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option>sds</option>

            </select>



            <div className="form-floating">
                <textarea className="form-control" name="note" onChange={changeVal} placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
            </div>

        </Modal.Body>
        <Modal.Footer>
            <Button >Send</Button>
        </Modal.Footer>
    </Modal>
}
export default ModalCancel