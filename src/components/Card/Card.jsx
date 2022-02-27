import React from "react";
import { Link } from "react-router-dom";
import ReactStars from 'react-stars'


import "./Card.scss";

const Card = ({newProduct, img, title, price, oldPrice, persentage }) => {
    return (
        <Link to="/" className="Card">
            {newProduct ? <span className="Card-newProduct">HOT</span> : undefined}
            <img src={img} alt="" width="300" height="280" />

            <div className="Card-bottom p-5 flex items-center justify-center flex-col">
                <h4 className="Card-title">{title}</h4>

                <ReactStars count={5} size={20} color2={'#ffd700'} />

                <div className="flex items-center justify-between">
                    <span className="Card-price">{price}</span>
                    <span className="Card-oldPrice">{oldPrice}</span>
                    <span className="Card-persentage">{persentage}</span>
                </div>
            </div>
        </Link>
    );
};  

export default Card;