import React from "react";
import { Link } from "react-router-dom";

import "./Dropdown.scss";

const Dropdown = (props, { title, link }) => {

    const { history } = props;

    return (
        <div className="Dropdown">
            <h4 className="Dropdown-title">{title}</h4>
            <ul className="flex items-start justify-start flex-col">
                {link.map(el => <li className="Dropdown-link"><button>{el}</button></li>)}
            </ul>
        </div>
    );
};

export default Dropdown;