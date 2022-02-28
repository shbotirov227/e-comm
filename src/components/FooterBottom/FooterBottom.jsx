import React from "react";
import { Link } from "react-router-dom";

import "./FooterBottom.scss";

const FooterBottom = ({ title, link, path }) => {
    return (
        <div className="FooterBottom">
            <h4 className="FooterBottom-title">{title}</h4>
            <ul className="flex items-start justify-start flex-col">
                {link.map(el => <li className="FooterBottom-link"><Link to={path}>{el}</Link></li>)}
            </ul>
        </div>
    );
};

export default FooterBottom;