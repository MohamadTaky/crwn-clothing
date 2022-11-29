import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const mapStateToProps = state => ({
	currentUser: state.user.currentUser,
});

const Header = ({ currentUser }) => (
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
		</nav>
	</header>
);

export default connect(mapStateToProps)(Header);
