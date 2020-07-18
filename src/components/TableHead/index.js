import React from "react";
import "./style.css";

function TableHead(props) {
    return(
        <tr>
            <th scope="col">Image</th>
            <th scope="col">Name <button onClick={props.handleClick}>sortbylast</button></th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
        </tr>
    );
}

export default TableHead;