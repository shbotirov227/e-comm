import React from "react";
import { Arrow, Close } from "../../assets/icons/icons";

import "./Payment1.scss";

const Payment1 = ({onclick}) => {
	return (
		<div className="Payment1">
			<div className="flex">
				<button><Arrow /></button>
				<button onClick={onclick}><Close /></button>
			</div>
		</div>
	);
};

export default Payment1;