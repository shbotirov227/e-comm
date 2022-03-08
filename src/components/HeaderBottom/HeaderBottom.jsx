import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { Logo } from "../../assets/icons/icons";

import "./HeaderBottom.scss";

const HeaderBottom = () => {

	const [ state, setState ] = useState(false);

	const func = () => setState(!state);
	const func2 = () => setState(false);

	const activeStyle = { color: "#40BFFF" }

	return (
		<div className="HeaderBottom">
			<div className="flex align-center justify-between container">
				<Link to="/" className="HeaderBottom-logo"><Logo /> E-Comm</Link>

				<ul className="flex align-center">
					<li className="HeaderBottom-link"><button onClick={func} activeStyle={activeStyle}>HOME</button></li>
					<li className="HeaderBottom-link"><button onClick={func} onMouseLeave={func2}>BAGS</button></li>
					<li className="HeaderBottom-link"><button onClick={func} onMouseLeave={func2}>SNEAKERS</button></li>
					<li className="HeaderBottom-link"><button onClick={func} onMouseLeave={func2}>BELT</button></li>
					<li className="HeaderBottom-link"><button onClick={func} onMouseLeave={func2}>CONTACT</button></li>
				{
					state === true ? <Dropdown title="dropdown" link={["Coporate Shoes", "Sneakers", "Sandals", "Sport Shoe", "Trainers"]} /> : undefined
				}
				</ul>
			</div>
		</div>
	)
}

export default HeaderBottom;