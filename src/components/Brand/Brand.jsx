import React from "react";

import "./Brand.scss";

const Brand = ({ title, brandName }) => {
  return (
    <div className="Brand">
        <h4 className="Brand-title">{title}</h4>

        {brandName.map(brand => (
            <button className="Brand-btn">
                <span className="Brand-name">{brand[0]}</span>
                <span className="Brand-num">{brand[1]}</span>
            </button>
        ))}


    </div>
  )
}

export default Brand