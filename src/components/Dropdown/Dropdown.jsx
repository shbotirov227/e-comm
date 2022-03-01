import React from "react";
import { Link } from "react-router-dom";

import "./Dropdown.scss";

const Dropdown = ({ title, link }) => {
    return (
        <div className="Dropdown">
            <h4 className="Dropdown-title">{title}</h4>
            <ul className="flex items-start justify-start flex-col">
                {link.map(el => <li className="Dropdown-link"><Link to="/">{el}</Link></li>)}
            </ul>
        </div>
    );
};

export default Dropdown;