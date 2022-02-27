import React from "react";

import "./ServicesItem.scss";

const ServicesItem = ({img, title, text}) => {
    return (
        <div className="ServicesItem">
			<img src={img} alt="" />
			<h4 className="ServicesItem-title">{title}</h4>
			<p className="ServicesItem-text">{text}</p>
		</div>
    );
};

export default ServicesItem;