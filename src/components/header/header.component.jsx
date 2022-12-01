import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCarthidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
	<header className="header">
		<Link className="logo-continer" to="/">
			<Logo className="logo" />
		</Link>
		<nav className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contact">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => signOut(auth)}>
					SIGN OUT
				</div>
			) : (
				<Link to="/signin">SIGN IN</Link>
			)}
			<CartIcon />
		</nav>
		{!hidden && <CartDropdown />}
	</header>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCarthidden,
});

export default connect(mapStateToProps)(Header);
