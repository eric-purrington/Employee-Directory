import React, { Component } from "react";
import API from "../utils/API";
import EmployeeContext from "../utils/EmployeeContext";
import Container from "../components/Container";

class Directory extends Component {
    state = {
        filteredResults: [],
        results: []
    }

    componentDidMount() {
        this.getEmployeeList();
    }

    getEmployeeList = () => {
        API.getTwoHundred()
        .then(res=> this.setState({filteredResults: res.data.results, results: res.data.results}))
        .catch(err => console.log(err));
    }

    handleInputChange = async event => {
        event.preventDefault();

        await this.setState({filteredResults: this.state.results.filter(employee => employee.name.first.toLowerCase().includes(event.target.value.toLowerCase()) || employee.name.last.toLowerCase().includes(event.target.value.toLowerCase()))});
    };

    render() {
        return (
            <EmployeeContext.Provider value={this.state} >
                <Container handleInputChange={this.handleInputChange} />
            </EmployeeContext.Provider>
        );
    }
}

export default Directory;