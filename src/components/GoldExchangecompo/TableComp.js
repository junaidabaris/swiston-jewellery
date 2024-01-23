function TableComp() {
    return <div>
        <table class="table" style={{margin:"20px 0"}}>
            <thead>
                <tr>
                    <th scope="col">Standard Deduction</th>
                    <th scope="col">Below 18 Karat</th>
                    <th scope="col">18 Karat to 22 Karat</th>
                    <th scope="col">24 Karat</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Handling Charges</th>
                    <td>4%*  0%</td>
                    <td>2%*  0%</td>
                    <td>0%*</td>
                </tr>
                <tr>
                    <th scope="row">De-alloying Charges</th>
                    <td>--</td>
                    <td>--</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th scope="row">Total</th>
                    <td>4%*  0%</td>
                    <td>2%*  0%</td>
                    <td>0%*</td>
                </tr>
              
            </tbody>
        </table>
    </div>
}
export default TableComp