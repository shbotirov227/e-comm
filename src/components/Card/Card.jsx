import React from "react";
import ReactStars from 'react-stars'
import CardImg1 from "../../assets/images/cardImg1.png";

import "./Card.scss";

const ratingChanged = (newRating) => {
    console.log(newRating)
}

const Card = () => {
    return (
        <div className="Card">
            <img src={CardImg1} alt="" />

            <div className="Card-bottom">
                <h4 className="Card-title">Nike Air Max 270 React</h4>

                <ReactStars count={5}  onChange={ratingChanged} size={15} color2={'#ffd700'} />

                <div className="flex items-center justify-between">
                    <span className="Card-price">$299,43</span>
                    <span className="Card-oldPrice">$534,33</span>
                    <span className="Card-persentage">24% Off</span>
                </div>
            </div>

        </div>
    )
}

export default Card;