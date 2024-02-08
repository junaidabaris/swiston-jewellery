import { Button } from "react-bootstrap"
import { FcCancel } from "react-icons/fc"
import { GrView } from "react-icons/gr"
import { TbShoppingCartPlus } from "react-icons/tb"
import { Link } from "react-router-dom"

export const ListCompon = ({item,setModalShow}) => {
    return <tr>
        <td>{item?._id}</td>
        <td>{item?.referenceNo}</td>
        <td>{item?.status?.[0]?.createdAt}</td>

        <td style={{ textAlign: "right", paddingRight: "20px" }}>{item?.currency?.symbol ? item?.currency?.symbol : 'QAR'} {item.grandTotal}</td>
        <td>{item?.status[0]?.orderStatusName && <strong>{item?.status[0]?.orderStatusName}</strong>}</td>
        <td>COD</td>
        <td>{item?.deliveryType}</td>
        <td style={{ display: "table-cell" }}>
            <Button variant=""> <Link to={`/order-detail/${item._id}`}><GrView /></Link></Button>
        </td>
        <td style={{ display: "table-cell" }}>
            <Button variant="" onClick={() => { setModalShow(true) }}><FcCancel /></Button>
        </td>
        <td style={{ display: "table-cell" }}>
            <Button variant=""> <TbShoppingCartPlus /></Button>
        </td>
    </tr>

}