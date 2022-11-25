import React from "react";
import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.compoent";
import ShopPage from "./pages/shop/shop.component";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="shop" element={<ShopPage />} />
				</Routes>
			</div>
		);
	}
}
