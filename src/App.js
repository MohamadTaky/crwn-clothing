import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

import HomePage from "./pages/homepage/homepage.compoent";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
import Header from "./components/header/header.component";
import { onSnapshot } from "firebase/firestore";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;
	componentDidMount() {
		this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				onSnapshot(userRef, snapshot => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
				});
			} else this.setState({ currentUser: null });
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="shop" element={<ShopPage />} />
					<Route path="/signin" element={<SignInAndSignUpPage />} />
				</Routes>
			</div>
		);
	}
}
