import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/icons/icons';

import "./HeaderBottom.scss";

const HeaderBottom = () => {
	return (
		<div className="HeaderBottom">
			<div className="flex align-center justify-between container">
				<Link to="/" className="HeaderBottom-logo"><Logo /> E-Comm</Link>

				<ul className="flex align-center">
					<li className="HeaderBottom-link"><Link to="/">HOME</Link></li>
					<li className="HeaderBottom-link"><Link to="/">BAGS</Link></li>
					<li className="HeaderBottom-link"><Link to="/">SNEAKERS</Link></li>
					<li className="HeaderBottom-link"><Link to="/">BELT</Link></li>
					<li className="HeaderBottom-link"><Link to="/">CONTACT</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default HeaderBottom;