import React from "react";
import { Link } from "react-router-dom";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import WesternUnion from "../../assets/images/icons/westernUnion.png";
import Mastercard from "../../assets/images/icons/masterCard.png";
import PayPal from "../../assets/images/icons/paypal.png";
import VisaCard from "../../assets/images/icons/visaCard.png";
import { Logo, Facebook, Twitter } from "./../../assets/icons/icons";

import "./Footer.scss";

const footerLinks = [
    {
        id: 0,
        title: "Infomation",
        links: [ "About Us", "Infomation", "Privacy Policy", "Terms & Conditions" ],
        pathname: ["/about", "/information", "/privacy", "/terms"]
    },

    {
        id: 1,
        title: "Service",
        links: [ "About Us", "Infomation", "Privacy Policy", "Terms & Conditions" ],
        pathname: ["/about", "/information", "/privacy", "/terms"]
    },

    {
        id: 2,
        title: "My Account",
        links: [ "About Us", "Infomation", "Privacy Policy", "Terms & Conditions" ],
        pathname: ["/about", "/information", "/privacy", "/terms"]
    },

    {
        id: 3,
        title: "Our Offers",
        links: [ "About Us", "Infomation", "Privacy Policy", "Terms & Conditions" ],
        pathname: ["/about", "/information", "/privacy", "/terms"]
    }
];

const Footer = ({ marginTop }) => {
    return (
        <div className="Footer" style={{marginTop: marginTop}}>
            <div className="container">
                <div className="flex items-start justify-between" style={{marginBottom: 70}}>
                    <div style={{width: "20%"}}>
                        <Link to="/" className="Footer-logo"><Logo /> E-Comm</Link>
                        <p className="Footer-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                    </div>

                    <div style={{width: "15%"}}>
                        <h4 className="Footer-title">Follow Us</h4>
                        <p className="Footer-text">Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                        <div className="flex items-center justify-start">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com"><Facebook /></a>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com"><Twitter /></a>
                        </div>
                    </div>

                    <div style={{width: "15%"}}>
                        <h4 className="Footer-title">Contact Us</h4>
                        <p className="Footer-text">E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
                    </div>
                </div>
                <div className="flex items-start justify-between" style={{paddingBottom: 70, borderBottom: "1px solid #F6F7F8"}}>
                    {footerLinks.map((el, index) => <FooterBottom key={index} title={el.title} link={el.links.map(item => item)} path={el.pathname.map(item => item)} />)}
                </div>

                <div className="Footer-copyright flex items-center justify-between">
                    <span className="Footer-copyright-text">© 2018 Ecommerce theme by www.bisenbaev.com</span>
                    <div className="flex items-center">
                        <Link to="/"><img src={WesternUnion} alt="" /></Link>
                        <Link to="/"><img src={Mastercard} alt="" /></Link>
                        <Link to="/"><img src={PayPal} alt="" /></Link>
                        <Link to="/"><img src={VisaCard} alt="" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;