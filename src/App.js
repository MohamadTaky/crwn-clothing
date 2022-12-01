import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";

import HomePage from "./pages/homepage/homepage.compoent";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
import CheckoutPage from "./pages/checkout/checkout.comonent";
import Header from "./components/header/header.component";
import { onSnapshot } from "firebase/firestore";
import { setCurrentUser } from "./redux/user/user.actions";
import { connect } from "react-redux/es/exports";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
	unsubscribeFromAuth = null;
	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				onSnapshot(userRef, snapshot => {
					setCurrentUser({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
				});
			} else setCurrentUser(null);
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/checkout" element={<CheckoutPage />} />
					<Route
						path="/signin"
						element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />}
					/>
				</Routes>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});
const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
