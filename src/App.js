import React from "react";
import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.compoent";

const HatsPage = () => {
	return (
		<div>
			<h1>Hats Page</h1>
		</div>
	);
};

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
					<Route path="hats" element={<HatsPage />} />
				</Routes>
			</div>
		);
	}
}
