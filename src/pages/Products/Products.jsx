import React from "react";
import Brand from "../../components/Brand/Brand";
import Color from "../../components/Color/Color";
import Price from "../../components/Price/Price";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";

import "./Products.scss";

const Products = () => {
  return (
    <div className="Products">
        <Header />

        <div className="main container">
            <div className="Products-left">
                <div className="Brands">
                    <Brand title="Hot Deals" brandName={[
                        ["Nike", 2],
                        ["Airmax", 48],
                        ["Nike", 14],
                        ["Adidas", 15],
                        ["Vans", 23],
                        ["All Stars", 1],
                        ["Adidas", 95],
                    ]} />

                    <Price />
                    <Color />
                </div>
            </div>

            <div className="Products-right"></div>
            
        </div>

        <Footer marginTop="155px" />
    </div>
  )
}

export default Products