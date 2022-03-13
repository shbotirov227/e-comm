import React from "react";
import { Arrow, Close, PaymentIcon1, PaymentIcon2, PaymentIcon3 } from "../../assets/icons/icons";
import "./Payment1.scss";

const Payment1 = ({ onclickevent, nextpage }) => {
	return (
		<div className="Payment1">
			<div className="flex items-center justify-between ">
				<button onClick={onclickevent}><Arrow /></button>
				<button onClick={onclickevent}><Close /></button>
			</div>

			<h3 className="Payment1-title">Make Payment</h3>
			<div className="flex items-center justify-center mb-8">
				<h4 className="Payment1-step relative">1</h4>
				<span className="Payment1-line"></span>
				<h4 className="Payment1-step relative">2</h4>
				<h4 className="Payment1-step">3</h4>
			</div>

			<div className="flex items-start justify-between w-[100%]">
				<div className="Payment1-left">
					<input type="text" placeholder="First Name" className="Payment1-left__input" />
					<input type="email" name="email" placeholder="Email Address" className="Payment1-left__input" />
					<h4 className="Payment1-left__title">Select Method of Payment</h4>

					<label htmlFor="creditCard" className="Payment1-left__label">
						<div className="flex items-center justify-between">
							<PaymentIcon1 />
							Credit Card Or Debit
						</div>
						<input type="radio" name="check" value="creditCard" id="creditCard" />
					</label>

					<label htmlFor="paypal" className="Payment1-left__label">
						<div className="flex items-center justify-between">
							<PaymentIcon2 />
							Paypal
						</div>
						<input type="radio" name="check" value="paypal" id="paypal" />
					</label>
					
					<label htmlFor="bank" className="Payment1-left__label">
						<div className="flex items-center justify-between">
							<PaymentIcon3 />
							Bank Transfer
						</div>
						<input type="radio" name="check" value="bank" id="bank" />
					</label>	
				</div>

				<div className="Payment1-right">
					<input type="text" placeholder="Last Name" className="Payment1-left__input" />
					<textarea className="Payment1-left__input" name="textarea" placeholder="Address for Delivery"></textarea>
					<input className="Payment1-left__input" type="number" name="numb" placeholder="Mobile Phone" />
				</div>
			</div>
			
			<button className="paymentBtn" onClick={nextpage}>Go to Payment</button>
		</div>
	);
};

export default Payment1;