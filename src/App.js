import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact } from "./pages/index.js";

import "./assets/main.scss";

function App() {
  return (
    <div className="App">
		<Router>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
    </div>
  );
}

export default App;
