import React from "react";
import { Link } from "react-router-dom";
import { UserIcon, ShoppingIcon, SearchIcon } from "../../assets/icons/icons";

import "./HeaderTop.scss";

const HeaderTop = () => {
    return (
        <div className="HeaderTop">
            <div className="flex justify-between align-center container">
                <div className="flex align-center">
                    <select name="" id="">
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        <option value="uz">UZ</option>
                    </select>
                    <select name="" id="">
                        <option value="usd">USD</option>
                        <option value="rubl">RUBL</option>
                        <option value="uzs">UZS</option>
                    </select>
                </div>

                <div className="flex align-center justify-end">
                    <Link to="/" className="HeaderTop-user"><UserIcon /> My profile</Link>
                    <Link to="/" className="shoppingIcon"><ShoppingIcon /></Link>
                    <span className="HeaderTop-user">Items <input type="text" placeholder="$0.00" /><SearchIcon /></span>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop;