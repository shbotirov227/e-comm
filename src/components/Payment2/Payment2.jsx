import React, { useState } from "react";
import Payment1 from "../../components/Payment1/Payment1";
import { Arrow, Close, Subtract, Visa } from "../../assets/icons/icons";

import "./Payment2.scss";

const Payment2 = ({ onclickevent, nextpage }) => {

	const [ cardNumb, setCardNumb ] = useState("1234 5678 9123 4567");
	const [ expiry, setExpiry ] = useState(["00", "00"]);

	const cardNumbHandle = (e) => (0 < e.target.value.length) ? setCardNumb(e.target.value) : undefined

    return (
        <div className="Payment2">
            <div className="flex items-center justify-between ">
				<button><Arrow /></button>
				<button onClick={onclickevent}><Close /></button>
			</div>

			<h3 className="Payment1-title">Make Payment</h3>
			<div className="flex items-center justify-center mb-8">
				<h4 className="Payment2-step relative">1</h4>
				<span className="Payment1-line"></span>
				<h4 className="Payment2-step relative">2</h4>
				<h4 className="Payment2-step">3</h4>
			</div>

			<div className="flex items-start justify-between">
				<div className="Payment2-left">
					<div className="Payment2-left__top flex items-center justify-between">
						<Subtract />
						<Visa />
					</div>

					<div className="Payment2-left__bottom">
						<h4 className="cardInfo mb-5">{cardNumb.length === 0 ? "1234 5678 9123 4567" : cardNumb}</h4>

						<div className="flex items-center justify-between">
							<h4 className="cardInfo">JOHN DOE</h4>
							<h4 className="cardInfo">{expiry[0]} / {expiry[1]}</h4>
						</div>
					</div>
				</div>

				<div className="Payment2-right">
					<input className="Payment1-left__input" onChange={cardNumbHandle} type="number" name="cardNumb" placeholder="Card Number" />

					<div className="flex items-center justify-between">
						<input className="Payment1-left__input w-[47%]" onChange={e => setExpiry(e.target.value)} type="number" name="expiry" placeholder="Expiry" />
						<input className="Payment1-left__input w-[47%]" type="number" name="cvv" placeholder="CVV" />
					</div>
					<input className="Payment1-left__input" type="number" name="cardNumb" placeholder="Holder Number" />
					
					<div className="Payment2-saveCard flex items-center">
						<input type="checkbox" name="saveCard" id="saveCard" />
						<label className="Payment2-saveCard__label" htmlFor="saveCard">Save this credit card</label>	
					</div>
				</div>
			</div>

			<button className="paymentBtn" onClick={nextpage}>Confirm</button>
        </div>
    );
};

export default Payment2;