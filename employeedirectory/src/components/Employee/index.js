import React from "react";
import "./style.css";

function Employee(props) {
    return(
        <tr>
            <td><img src={props.image} alt="employee's thumbnail"></img></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td><a href={props.email}>{props.email}</a></td>
            <td>{props.dob}</td>
        </tr>
    );
}

export default Employee;