import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";

export default function Header() {
	return (
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
			</nav>
		</header>
	);
}
