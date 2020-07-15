import React from "react";
import Jumbotron from "./components/Jumbotron";
import Search from "./components/Search";
import TableHead from "./components/TableHead";
import Employee from "./components/Employee";

function App() {
    return (
        <div>
            <Jumbotron />
            <Search />
            <TableHead />
            <Employee />
        </div>
    )
}