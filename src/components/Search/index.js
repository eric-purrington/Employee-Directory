import React from "react";
import "./style.css";

function Search(props) {
    return(
        <div className="searchBoxHolder container-fluid">
            <div className="input-group input-group-sm mb-3">
                <input onChange={props.handleInputChange} type="text" className="form-control" placeholder="Search"/>
            </div>
        </div>
    );
}

export default Search;