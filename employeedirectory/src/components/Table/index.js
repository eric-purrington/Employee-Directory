import React, {useContext} from "react";
import TableHead from "../TableHead";
import Employee from "../Employee";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";

function Table(props) {
    const { filteredResults } = useContext(EmployeeContext);
    return(
        <table>
            <tbody>
                <TableHead handleClick={props.handleClick}/>
                {filteredResults.map(employee => (
                    <Employee
                    key={employee.cell}
                    name={employee.name.first + " " + employee.name.last} 
                    image={employee.picture.medium} 
                    phone={employee.phone} 
                    email={employee.email} 
                    dob={employee.dob.date.substring(0,10)} />
                ))}
            </tbody>
        </table>
    );
}

export default Table;