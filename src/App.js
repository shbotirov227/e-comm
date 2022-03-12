import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact, Cart, Products, Info } from "./pages/index.js";

import "./assets/main.scss";

function App() {
  return (
    <div className="App">
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/products" element={<Products />} />
				<Route path="/info" element={<Info />} />
			</Routes>
		</Router>
    </div>
  );
}

export default App;
