import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button.component/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, toggleCartHidden }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
		</div>
		<Link to="/checkout">
			<CustomButton onClick={toggleCartHidden}> GO TO CHECKOUT </CustomButton>
		</Link>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});
const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
