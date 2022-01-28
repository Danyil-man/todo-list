import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <h1> <span><FontAwesomeIcon icon={faCheck} /></span> My Todo-s List</h1>
        </div>
    )
}

export default Header