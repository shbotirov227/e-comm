import React from 'react';

import "./SaleCard.scss";

const SaleCard = ({title, newPrice, oldPrice, persentage}) => {
	return (
		<div className="SaleCard">
			<div className="flex mb-100">
				<h4 className="SaleCard-title">{title}</h4>
				<h4 className="SaleCard-newPrice">{newPrice}</h4>
			</div>
			<div className="flex">
				<span className="oldPrice">{oldPrice}</span>
				<span className="persentage">{persentage}</span>
			</div>
		</div>
	)
}

export default SaleCard;