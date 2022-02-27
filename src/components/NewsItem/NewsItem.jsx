import React from "react";

import "./NewsItem.scss";

const NewsItem = ({ img, date, title, text }) => {
    return (
        <div className="NewsItem flex items-center">
            <img src={img} alt="" />
            <div>
                <span className="NewsItem-date">{date}</span>
                <h4 className="NewsItem-title">{title}</h4>
                <p className="NewsItem-text">{text}</p>
            </div>
        </div>
    );
};

export default NewsItem;