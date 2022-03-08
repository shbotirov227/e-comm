import React from "react";
import { Arrow, Close, Success } from "../../assets/icons/icons";

import "./Payment3.scss";

const Payment3 = ({ onclickevent, nextpage }) => {
    return (
        <div className="Payment3">
            <div className="flex items-center justify-between ">
				<button><Arrow /></button>
				<button onClick={onclickevent}><Close /></button>
			</div>

			<h3 className="Payment1-title">Make Payment</h3>
			<div className="flex items-center justify-center mb-8">
				<h4 className="Payment3-step relative">1</h4>
				<span className="Payment1-line"></span>
				<h4 className="Payment3-step relative">2</h4>
				<h4 className="Payment3-step">3</h4>
			</div>

            <div className="success">
                <Success />    
            </div>

            <h4 className="Payment3-title">Success</h4>

			<button className="paymentBtn" onClick={nextpage}>Complete</button>
        </div>
    );
};

export default Payment3;