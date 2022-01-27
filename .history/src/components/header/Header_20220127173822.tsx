import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const Header = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faSave} />
            <h1>ToDo List</h1>
        </div>
    )
}

export default Header