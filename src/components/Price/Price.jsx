import React from "react";
import { Box, Slider } from "@mui/material";

import "./Price.scss";

const Price = () => {

    const [value, setValue] = React.useState([20, 77]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="Price">
            <h4 className="Price-title">Price</h4>

            <div className="flex items-center justify-between">
                <h4 className="Price-range">Ranger:</h4>
                <span className="Price-price">${value[0]} - ${value[1]}</span>
                

            </div>
            <Box sx={{ width: "100%" }}>
                <Slider value={value} onChange={handleChange} />
            </Box>
        </div>
    );
};

export default Price;