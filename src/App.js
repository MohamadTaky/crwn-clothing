import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.compoent";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
import CheckoutPage from "./pages/checkout/checkout.comonent";
import Header from "./components/header/header.component";
import { connect } from "react-redux/es/exports";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectShopCollectionsForPreview } from "./redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";

class App extends React.Component {
	componentDidMount() {
		const { checkUserSession } = this.props;
		checkUserSession();
	}

	render() {
		return (
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="shop/*" element={<ShopPage />} />
					<Route path="checkout" element={<CheckoutPage />} />
					<Route
						path="signin"
						element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />}
					/>
				</Routes>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	collectionsArray: selectShopCollectionsForPreview,
});
const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
