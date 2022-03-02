import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { Logo } from "../../assets/icons/icons";

import "./HeaderBottom.scss";

const HeaderBottom = () => {

	const [ state, setState ] = useState(false);

	const func = () => setState(!state);
	const func2 = () => setState(false)

	// state === true ? <Dropdown /> : undefined

	const activeStyle = { color: "#40BFFF" }

	return (
		<div className="HeaderBottom">
			<div className="flex align-center justify-between container">
				<Link to="/" className="HeaderBottom-logo"><Logo /> E-Comm</Link>


				<ul className="flex align-center">
					<li className="HeaderBottom-link"><Link to="/" activeStyle={activeStyle} onClick={func}>HOME</Link></li>
					<li className="HeaderBottom-link"><Link to="/" onClick={func} onMouseLeave={func2}>BAGS</Link></li>
					<li className="HeaderBottom-link"><Link to="/" onClick={func} onMouseLeave={func2}>SNEAKERS</Link></li>
					<li className="HeaderBottom-link"><Link to="/" onClick={func} onMouseLeave={func2}>BELT</Link></li>
					<li className="HeaderBottom-link"><Link to="/contact" onClick={func} onMouseLeave={func2}>CONTACT</Link></li>
				{
					state === true ? <Dropdown title="dropdown" link={["Coporate Shoes", "Sneakers", "Sandals", "Sport Shoe", "Trainers"]} /> : undefined
				}
				</ul>
			</div>
		</div>
	)
}

export default HeaderBottom;