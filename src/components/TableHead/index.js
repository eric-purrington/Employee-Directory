import React from "react";
import "./style.css";

function TableHead(props) {
    return(
        <tr>
            <th>Image</th>
            <th>Name <span onClick={props.handleClick}>sortbylast</span></th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
        </tr>
    );
}

export default TableHead;