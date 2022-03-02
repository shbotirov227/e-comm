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
				<div className="imgSection flex items-center">
					<div className="imgSection-img">
						{/* <img src={CallImg} alt="" /> */}
					</div>
					<div className="">
						<h4 className="imgSection-title">get in touch</h4>
						<a className="imgSection-address" href="mailto:contact@e-comm.ng">contact@e-comm.ng</a>
						<a className="imgSection-address" href="tel:+234 4556 6665 34">+234 4556 6665 34</a>
						<span className="imgSection-address">20 Prince Hakerem Lekki <br></br></span>
					</div>
				</div>
				<div className="w-[45%]">
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
		</div>

        <Footer />
    </div>	
  );
};

export default Contact;