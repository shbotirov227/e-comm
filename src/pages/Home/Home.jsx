import React from "react";
import SaleCard from "../../components/SaleCard/SaleCard";
import Header from "../../containers/Header/Header";

import "./Home.scss";

const Home = () => {
    return (
		<div className="Home">
            <Header />
			<div className="saleSection">
            	<div className="container">
                	<h2 className="saleSection-title">Super Flash Sale 50% Off</h2>
					<div className="saleSection-cards">
						<SaleCard />
					</div>
				</div>
            </div>
        </div>
    )
}

export default Home;