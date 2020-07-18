import React from "react";
import Jumbotron from "../Jumbotron";
import Search from "../Search";
import Table from "../Table";

function Container(props) {
    return (
        <div className="container-fluid">
            <Jumbotron />
            <Search handleInputChange={props.handleInputChange} />
            <Table handleClick={props.handleClick}/>
        </div>
    );
}

export default Container;