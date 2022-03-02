import React from "react";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import CallImg from "../../assets/images/call.png";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="Contact">
        <Header />

        <div className="container">
			<div className="Contact-inner flex justify-between items-center relative">
				<div className="imgSection flex items-center" style={{padding: 50}}>
					<div className="imgSection-img relative">
						<img src={CallImg} alt="" className="absolute" />
					</div>
					<div className="">
						<h4 className="imgSection-title">get in touch</h4>
						<a className="imgSection-address" href="mailto:contact@e-comm.ng">contact@e-comm.ng</a>
						<a className="imgSection-address" href="tel:+234 4556 6665 34">+234 4556 6665 34</a>
						<span className="imgSection-address">20 Prince Hakerem Lekki <br></br></span>
					</div>
				</div>
				<div className="w-[45%]" style={{padding: 50}}>
					<div>
						<label htmlFor="username">Fullname</label>
						<input className="Contact-input" type="text" id="username" placeholder="James Doe" />
					</div>

					<div>
						<label htmlFor="email">Email</label>
						<input className="Contact-input" type="email" name="email" id="email" placeholder="jamesdoe@gmail.com" />
					</div>
					
					<div>
						<label htmlFor="textarea">Message</label>
						<textarea className="Contact-input" name="textarea" id="textarea" height="230" cols="30" rows="10" placeholder="Type your message"></textarea>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center container relative rounded-t-md">
				<input type="text" placeholder="Search query..." className="Home-input" />
				<button className="Home-btn">Search</button>
			</div>
		</div>

        <Footer marginTop="135px" />
    </div>	
  );
};

export default Contact;