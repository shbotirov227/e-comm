import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { Logo } from "../../assets/icons/icons";

import "./HeaderBottom.scss";

const HeaderBottom = () => {

	const [ state, setState ] = useState(false);

	const func = () => setState(!state);

	return (
		<div className="HeaderBottom">
			<div className="flex align-center justify-between container">
				<Link to="/" className="HeaderBottom-logo"><Logo /> E-Comm</Link>

				<div className="flex align-center">
					<Link to="/" className="HeaderBottom-link" onClick={func}>HOME</Link>
					<Link to="/" className="HeaderBottom-link" onClick={func}>BAGS</Link>
					<Link to="/products" className="HeaderBottom-link" onClick={func}>SNEAKERS</Link>
					<Link to="/info" className="HeaderBottom-link" onClick={func}>BELT</Link>
					<Link to="/contact" className="HeaderBottom-link" onClick={func}>CONTACT</Link>
				</div>
				{
					// state ? <Dropdown title="dropdown" link={["Coporate Shoes", "Sneakers", "Sandals", "Sport Shoe", "Trainers"]} /> : undefined
				}
			</div>
		</div>
	)
}

export default HeaderBottom;