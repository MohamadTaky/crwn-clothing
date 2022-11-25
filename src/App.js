import React from "react";
import "./App.css";

import HomePage from "./homepage.compoent";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<HomePage />
			</div>
		);
	}
}
