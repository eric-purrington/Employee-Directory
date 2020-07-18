import React from "react";
import "./style.css";

function Employee(props) {
    let thisDOB = new Date(props.dob);
    return(
        <tr className="tableRow">
            <th scope="row"><img src={props.image} alt="employee's thumbnail"></img></th>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td><a href="#">{props.email}</a></td>
            <td>{`${thisDOB.getMonth()+1}-${thisDOB.getDate()}-${thisDOB.getFullYear()}`}</td>
        </tr>
    );
}

export default Employee;