import {
	CartDropdownContainer,
	CartItemsContainer,
	EmptyMessageContainer,
	CheckoutButtonContainer,
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, toggleCartHidden }) => (
	<CartDropdownContainer>
		<CartItemsContainer>
			{cartItems.length ? (
				cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
			) : (
				<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
			)}
		</CartItemsContainer>
		<Link to="/checkout">
			<CheckoutButtonContainer onClick={toggleCartHidden}> GO TO CHECKOUT </CheckoutButtonContainer>
		</Link>
	</CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});
const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
