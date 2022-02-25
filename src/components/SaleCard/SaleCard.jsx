import React from 'react';

import "./SaleCard.scss";

const SaleCard = () => {
	return (
		<div className="SaleCard">
			<div className="flex mb-100">
				<h4 className="SaleCard-title">FS - QUILTED MAXI CROSS BAG</h4>
				<h4 className="SaleCard-newPrice">$299,43</h4>
			</div>
			<div className="flex">
				<span className="oldPrice">$534,33</span>
				<span className="persentage">24% Off</span>
			</div>
		</div>
	)
}

export default SaleCard;