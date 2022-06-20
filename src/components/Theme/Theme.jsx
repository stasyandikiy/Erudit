import React from "react";
import styles from "./Theme.module.css"
import { NavLink } from 'react-router-dom';


export const Theme = (props) => {
    return(
        <NavLink to={props.linkThemeGame}>
            <div className={styles.theme}>
                <span>{props.nameTheme}</span>
                <img src={props.imgTheme} />
            </div>
        </NavLink >
    )
}