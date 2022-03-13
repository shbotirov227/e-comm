import React from "react";

import "./Color.scss";

const Color = () => {

	const [ state, setState ] = React.useState({});
	const handleChange = e => {
		const { name, value } = e.target;
		setState({ [name]: value });
	}

    return (
		<div className="Color">
			<h4 className="Color-title">Color</h4>

			<div className="flex items-center justify-between">
				<input type="radio" name="color" value="red" onChange={handleChange} id="" />
				<input type="radio" name="color" value="yellow" onChange={handleChange} id="" />
				<input type="radio" name="color" value="green" onChange={handleChange} id="" />
				<input type="radio" name="color" value="green" onChange={handleChange} id="" />
				<input type="radio" name="color" value="green" onChange={handleChange} id="" />
				<input type="radio" name="color" value="green" onChange={handleChange} id="" />	
			</div>
		</div>
    );
};

export default Color;