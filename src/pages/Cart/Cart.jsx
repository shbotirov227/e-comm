import React from "react";
import { useTable } from "react-table";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import makeData from "./makeData";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Img1 from "../../assets/images/saleCardBg3.png"

import "./Cart.scss";

const getimg = (img) => <img src={img} width="135" height="95" alt="" />

function createData(img, title, price, unitPrice) {
	return {img, title, price, unitPrice}
}
  
  const rows = [
	createData(getimg(Img1), "Nike Airmax 270 react", "$998", "$499"),
	createData(getimg(Img1), "Nike Airmax 270 react", "$998", "$499"),
  ];

const Cart = () => {

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
								<TableCell>PRODUCT</TableCell>
								<TableCell align="right">PRICE</TableCell>
								<TableCell align="right">QTY</TableCell>
								<TableCell align="right">UNIT PRICE</TableCell>
							</TableRow>
							</TableHead>
							<TableBody>
							{rows.map((row) => (
								<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
								<TableCell align="right">{row.img}</TableCell>
								<TableCell align="left">{row.title}</TableCell>
								<TableCell align="right">{row.price}</TableCell>
								<TableCell align="right">{row.unitPrice}</TableCell>
								</TableRow>
							))}
							</TableBody>
						</Table>
						</TableContainer>
					</div>
				</div>
			</div>
			<Footer marginTop="155px" />
		</div>
	);
};

export default Cart;