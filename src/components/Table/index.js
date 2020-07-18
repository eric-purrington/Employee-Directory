import React, {useContext} from "react";
import TableHead from "../TableHead";
import Employee from "../Employee";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";

function Table(props) {
    const { filteredResults } = useContext(EmployeeContext);
    return(
        <div className="table-responsive-lg">
            <table className="table">
                <thead>
                    <TableHead handleClick={props.handleClick}/>
                </thead>
                <tbody>
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
        </div>
    );
}

export default Table;