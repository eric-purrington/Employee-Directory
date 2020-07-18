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

    sortMeUp = (a, b) => {
        const nameA = a.name.last.toLowerCase();
        const nameB = b.name.last.toLowerCase();
        let sorter = 0;
        
        if(nameA > nameB) {
            sorter = 1;
        } else if(nameA < nameB) {
            sorter = -1;
        }
        return sorter;
    }

    sortMeDown = (a, b) => {
        const nameA = a.name.last.toLowerCase();
        const nameB = b.name.last.toLowerCase();
        let sorter = 0;
        
        if(nameA > nameB) {
            sorter = -1;
        } else if(nameA < nameB) {
            sorter = 1;
        }
        return sorter;
    }

    handleClick = async event => {
        event.preventDefault();
        if (this.state.filteredResults[0].name.last.startsWith("A")){
            await this.setState({filteredResults: this.state.results.sort(this.sortMeDown)});
        } else {
            await this.setState({filteredResults: this.state.results.sort(this.sortMeUp)});
        }
    }

    handleInputChange = async event => {
        event.preventDefault();

        await this.setState({filteredResults: this.state.results.filter(employee => employee.name.first.toLowerCase().includes(event.target.value.toLowerCase()) || employee.name.last.toLowerCase().includes(event.target.value.toLowerCase()))});
    };

    render() {
        return (
            <EmployeeContext.Provider value={this.state} >
                <Container handleInputChange={this.handleInputChange} handleClick={this.handleClick} />
            </EmployeeContext.Provider>
        );
    }
}

export default Directory;