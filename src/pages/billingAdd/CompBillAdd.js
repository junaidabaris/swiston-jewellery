import { FaEdit } from "react-icons/fa"

export const CompBillAdd = ({ item, handleShow }) => {
    return <div className="col-lg-6" >
        <div className="border p-3 pr-5 rounded mb-3 position-relative">
            <h6 style={{ fontSize: "17px", fontWeight: "bold", display: "flex", justifyContent: "space-between" }} >Type :{item?.type} Address
                <div className="form-check form-switch">
                    <FaEdit onClick={handleShow} />
                    <input className="form-check-input" type="checkbox" checked={item?.active ? true : false} role="switch" id="flexSwitchCheckChecked" />
                </div></h6>

            <div>
                <span className="w-50 fw-600">Address Line 1:</span>
                <span className="ml-2">{item?.addressLine1}</span>
            </div>
            <div>
                <span className="w-50 fw-600">Address Line 2:</span>
                <span className="ml-2">{item?.addressLine2}</span>
            </div>
            <div>
                <span className="w-50 fw-600">Postal code:</span>
                <span className="ml-2">{item?.zip}</span>
            </div>
            <div>
                <span className="w-50 fw-600">City:</span>
                <span className="ml-2">{item?.city}</span>
            </div>
            <div>
                <span className="w-50 fw-600">State:</span>
                <span className="ml-2">{item?.state}</span>
            </div>
            <div>
                <span className="w-50 fw-600">Country:</span>
                <span className="ml-2">{item?.country}</span>
            </div>


            <div className="dropdown position-absolute right-0 top-0">
                <button
                    className="btn bg-gray px-2"
                    type="button"
                    data-toggle="dropdown"
                >
                    <i className="la la-ellipsis-v" />
                </button>
                <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="dropdownMenuButton"
                >
                    <a className="dropdown-item">Edit</a>
                    <a
                        className="dropdown-item"
                        href=""
                    >
                        Make This Default
                    </a>
                    <a
                        className="dropdown-item"
                        href=""
                    >
                        Delete
                    </a>
                </div>
            </div>
        </div>
    </div>
}