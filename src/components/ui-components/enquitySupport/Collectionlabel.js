import React from "react";
import  col1 from "./image/Collection_Harry_potter3.jpg"
import  col2 from "./image/Collection_block_minions.jpg"
import { Button } from "antd";
import Link from "antd/es/typography/Link";


export default function CollectionLabel(){
    return(
        <div style={{margin: " 60px 0px"}} className="main_collection">
            <div className="d-flex align-items-center collections">
                <div><Link><img src={col2}/></Link></div>
                <div><Link><img src={col1}/></Link> <Button>view all collections</Button></div>
                <div><Link><img src={col2}/></Link></div>
            </div>
        </div>
    )
}