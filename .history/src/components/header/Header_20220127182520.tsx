import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.header}>
            <h1>My Todo-s List  <FontAwesomeIcon icon={faCheck} /> </h1>
        </div>
    )
}

export default Header