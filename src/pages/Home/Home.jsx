import React from "react";
import Card from "../../components/Card/Card";
import SaleCard from "../../components/SaleCard/SaleCard";
import Header from "../../containers/Header/Header";
import { data } from "../../data.js";


import "./Home.scss";

const cardData = [
	{
		id: 0,
		title: "FS - QUILTED MAXI CROSS BAG",
		newPrice: "$299,43",
		oldPrice: "$534,33",
		persentage: "24% Off"
	},
	{
		id: 1,
		title: "FS - Nike Air Max 270 React...",
		newPrice: "$299,43",
		oldPrice: "$534,33",
		persentage: "24% Off"
	},
	{
		id: 2,
		title: "FS - Nike Air Max 270 React...",
		newPrice: "$299,43",
		oldPrice: "$534,33",
		persentage: "24% Off"
	}
]

const Home = () => {
    return (
		<div className="Home">
            <Header />
			<div className="saleSection">
            	<div className="container">
                	<h2 className="saleSection-title">Super Flash Sale 50% Off</h2>
					<div className="saleSection-cards flex items-center justify-center">
						{cardData.map(el => <SaleCard key={el.id} title={el.title} newPrice={el.newPrice} oldPrice={el.oldPrice} persentage={el.persentage} />)}
					</div>
				</div>
            </div>

			<div className="cardsSection container">
				<h2 className="cardsSection-title text-center">BEST SELLER</h2>

				<div className="tabs flex items-center justify-center">
					<button className="HeaderBottom-link">All</button>
					<button className="HeaderBottom-link">Bags</button>
					<button className="HeaderBottom-link">Sneakers</button>
					<button className="HeaderBottom-link">Belt</button>
					<button className="HeaderBottom-link">Sunglasses</button>
				</div>

				<div className="flex items-start justify-between flex-wrap">
					{data.map(el => <Card key={el.id} img={el.img} title={el.title} price={el.price} oldPrice={el.oldPrice} persentage={el.persentage} />)}
				</div>

				<button className="Home-cardsBtn">LOAD MORE</button>
			</div>
        </div>
    )
}

export default Home;