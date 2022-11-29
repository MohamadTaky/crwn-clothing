import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button.component/custom-button.component";

export default function CartDropdown() {
	return (
		<div className="cart-dropdown">
			<div className="cart-items"></div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
}
