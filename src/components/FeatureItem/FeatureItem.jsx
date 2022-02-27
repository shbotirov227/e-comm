import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

import "./FeatureItem.scss";

const FeatureItem = ({ title, price, oldPrice }) => {
    return (
        <Link to="/" className="FeatureItem">
            <img src="" alt="" />

            <div>
                <h4 className="FeatureItem-title">{title}</h4>
                <ReactStars count={5} size={20} color2={'#ffd700'} className="mb-2" />
                <div className="flex items-center">
                    <span className="FeatureItem-price">{price}</span>
                    <span className="FeatureItem-oldPrice">{oldPrice}</span>
                </div>
            </div>

        </Link>
    );
};

export default FeatureItem;