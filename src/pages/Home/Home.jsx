import React from "react";
import { Link } from "react-router-dom";
import Header from "../../containers/Header/Header";
import Card from "../../components/Card/Card";
import SaleCard from "../../components/SaleCard/SaleCard";
import ServicesItem from "../../components/ServicesItem/ServicesItem";
import NewsItem from "../../components/NewsItem/NewsItem";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import { data } from "../../data.js";
import AdidasSectionImg from "../../assets/images/adidasSectionImg.png";
import Nike from "../../assets/images/icons/nike.png";
import Figma from "../../assets/images/icons/figma.png";
import Img1 from "../../assets/images/icons/shipping.svg";
import Img2 from "../../assets/images/icons/refund.svg";
import Img3 from "../../assets/images/icons/support.svg";
import FeatureImg from "../../assets/images/icons/featureImg.png";


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

			<div className="adidasSection">
				<div className="container flex items-center justify-between">
					<div>
						<h3 className="adidasSection-title">Adidas Men Running Sneakers</h3>
						<p className="adidasSection-text">Performance and design. Taken right to the edge.</p>
						<Link to="/" className="adidasSection-btn">SHOP NOW</Link>
					</div>
					<img src={AdidasSectionImg} alt="" />
				</div>
			</div>

			<div className="services flex items-center justify-between">
				<ServicesItem img={Img1} title="FREE SHIPPING" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
				<ServicesItem img={Img2} title="100% REFUND" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
				<ServicesItem img={Img3} title="SUPPORT 24/7" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
			</div>

			<div className="news container">
				<h3 className="news-title text-center">LATEST NEWS</h3>
				<div className="flex items-start justify-between">
					<NewsItem img={Nike} date="01 Jan, 2015" title="Fashion Industry" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
					<NewsItem img={Figma} date="01 Jan, 2015" title="Best Design Tools" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
					<NewsItem img={Nike} date="01 Jan, 2015" title="HR Community" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
				</div>
			</div>

			<div className="feature container">
				<h4 className="feature-title text-center">FEATURED PRODUCTS</h4>

				<div className="flex items-center justify-between">
					<FeatureItem img={FeatureImg} title="Blue Swade Nike Sneakers" price="$499" oldPrice="$599" />
					<FeatureItem img={FeatureImg} title="Blue Swade Nike Sneakers" price="$499" oldPrice="$599" />
					<FeatureItem img={FeatureImg} title="Blue Swade Nike Sneakers" price="$499" oldPrice="$599" />
				</div>
			</div>
			
        </div>
    )
}

export default Home;