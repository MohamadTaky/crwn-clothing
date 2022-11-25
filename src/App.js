import React from "react";
import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.compoent";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="shop" element={<ShopPage />} />
				</Routes>
			</div>
		);
	}
}
