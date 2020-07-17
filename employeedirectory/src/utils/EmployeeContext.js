import React from "react";

const EmployeeContext = React.createContext({
    filteredResults: [],
    results: []
});

export default EmployeeContext;
