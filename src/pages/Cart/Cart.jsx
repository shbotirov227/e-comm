import React from "react";
import { useTable } from "react-table";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import makeData from "./makeData";

import "./Cart.scss";

function Table({ columns, data }) {
	// Use the state and functions returned from useTable to build your UI
	const {
	  getTableProps,
	  getTableBodyProps,
	  headerGroups,
	  rows,
	  prepareRow,
	} = useTable({
	  columns,
	  data,
	})
  
	// Render the UI for your table
	return (
	  <table {...getTableProps()}>
		<thead>
		  {headerGroups.map(headerGroup => (
			<tr {...headerGroup.getHeaderGroupProps()}>
			  {headerGroup.headers.map(column => (
				<th {...column.getHeaderProps()}>{column.render('Header')}</th>
			  ))}
			</tr>
		  ))}
		</thead>
		<tbody {...getTableBodyProps()}>
		  {rows.map((row, i) => {
			prepareRow(row)
			return (
			  <tr {...row.getRowProps()}>
				{row.cells.map(cell => {
				  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
				})}
			  </tr>
			)
		  })}
		</tbody>
	  </table>
	)
}


const Cart = () => {

	const columns = React.useMemo( () => [
			{
				Header: 'Name',
				columns: [
				{
					Header: 'First Name',
					accessor: 'firstName',
				},
				{
					Header: 'Last Name',
					accessor: 'lastName',
				},
				],
			},

			{
				Header: 'Info',
				columns: [
				{
					Header: 'Age',
					accessor: 'age',
				},
				{
					Header: 'Visits',
					accessor: 'visits',
				},
				{
					Header: 'Status',
					accessor: 'status',
				},
				{
					Header: 'Profile Progress',
					accessor: 'progress',
				},
				],
			},

		], []
	  )

	const data = React.useMemo(() => makeData(20), []);

	return (
		<div className="Cart">
			<Header />
			<div className="Cart-inner container">
				<div className="Cart-tableStyles">
					<Table columns={columns} data={data} />
				</div>
			</div>
			<Footer marginTop="155px" />
		</div>
	);
};

export default Cart;