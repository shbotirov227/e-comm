import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import Payment1 from './../../components/Payment1/Payment1';
import Img1 from "../../assets/images/saleCardBg3.png"
import {MinusIcon, PlusIcon, X, Arrow, Close} from "../../assets/icons/icons";


import "./Cart.scss";

const getimg = img => <img src={img} width="135" height="95" alt="" />
const createData = (img, title, price, unitPrice) => {
	return {img, title, price, unitPrice}
};
  
const rows = [
	createData(getimg(Img1), "Nike Airmax 270 react", 998, 499),
	createData(getimg(Img1), "Nike Airmax 270 react", 998, 499),
];

const Cart = () => {

	const [ state, setState ] = useState(1);
	const [ price, setPrice ] = useState(499);
	const [ open, setOpen ] = useState(false);

	const multiply = () => state + 1 ? setPrice(price + price) : undefined;
	const division = () => state - 1 ? setPrice(price / 2) : undefined;
	const minus = () => state > 1 ? setState(state - 1) : undefined;
	const plus = () => setState(state + 1);

	return (
		<div className="Cart">
			<Header />
			<div className="container">
				<div className="Cart-inner">
					<div className="Cart-tableStyles">
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
								<TableRow>
									<TableCell align="left" style={{width: "60%"}}>PRODUCT</TableCell>
									<TableCell align="center" style={{width: "10%"}}>PRICE</TableCell>
									<TableCell align="center" style={{width: "10%"}}>QTY</TableCell>
									<TableCell align="right" style={{width: "10%"}}>UNIT PRICE</TableCell>
								</TableRow>
								</TableHead>
								<TableBody>
								{rows.map((row, index) => (
									<TableRow key={row.index} sx={{ 'td, th': { border: 0 } }}>
										<div className="flex items-center justify-between" style={{width: "100%"}}>
											
											<div className="flex items-center justify-between">
												<X />
												<TableCell align="right">{row.img}</TableCell>
												<TableCell align="left">{row.title}</TableCell>
											</div>

											<div className="flex justify-end">
												<TableCell align="right">${price}</TableCell>
												<div className="flex items-center justify-between" style={{width: "120px", background: "#F6F7F8"}}>
													<button className="btnCounter" onClick={() => {minus(); division()}}><MinusIcon /></button>
													<h5 className="btn-title">{state}</h5>
													<button className="btnCounter" onClick={() => {multiply(); plus()}}><PlusIcon /></button>
												</div>
												<TableCell align="right">${row.unitPrice}</TableCell>
											</div>
										</div>
									</TableRow>
								))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>

					<div className="Total flex">
						<div className="flex items-start justify-start container relative rounded-t-md">
							<input type="text" placeholder="Voucher code" className="Total-input" />
							<button className="Total-btn">Redeem</button>
						</div>

						<div className="w-[22%]">
							<div className="flex items-start justify-center flex-col" style={{borderBottom: "2px solid #F6F7F8"}}>
								<div className="flex items-center justify-between w-[100%] mb-6">
									<h5 className="subtotal">Subtotal</h5>
									<span className="subtotal">$998</span>
								</div>
								<div className="flex items-center justify-between w-[100%] mb-6">
									<h5 className="subtotal">Shipping fee</h5>
									<span className="subtotal">$20</span>
								</div>
								<div className="flex items-center justify-between w-[100%] mb-6">
									<h5 className="subtotal">Coupon</h5>
									<span className="subtotal">No</span>
								</div>
							</div>

							<div className="mt-7">
								<div className="flex items-center justify-between mb-6">
									<h3 className="total">TOTAL</h3>
									<h3 className="total">$118</h3>
								</div>
								<button className="totalBtn" onClick={() => setOpen(true)}>Check out</button>

								{
									open ? (
										<div className="Payment1">
											<div className="flex items-center justify-between ">
												<button><Arrow /></button>
												<button onClick={() => setOpen(false)}><Close /></button>
											</div>
											<h3 className="Payment1-title">Make Payment</h3>
											<div className="flex items-center justify-center mb-10">
												<h4 className="Payment1-step relative">1</h4>
												<span className="Payment1-line"></span>
												<h4 className="Payment1-step relative">2</h4>
												<h4 className="Payment1-step">3</h4>
											</div>
										</div>
									) : undefined
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer marginTop="155px" />
		</div>
	);
};

export default Cart;