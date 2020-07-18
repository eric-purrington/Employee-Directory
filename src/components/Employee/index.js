import React from "react";
import "./style.css";

function Employee(props) {
    let thisDOB = new Date(props.dob);
    return(
        <tr>
            <td><img src={props.image} alt="employee's thumbnail"></img></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td><a href="#">{props.email}</a></td>
            <td>{`${thisDOB.getMonth()+1}-${thisDOB.getDate()}-${thisDOB.getFullYear()}`}</td>
        </tr>
    );
}

export default Employee;