import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { clearItem, removeItem, addItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, quantity, price } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div onClick={() => removeItem(cartItem)} className="arrow">
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div onClick={() => addItem(cartItem)} className="arrow">
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItem: cartItem => dispatch(clearItem(cartItem)),
	addItem: cartItem => dispatch(addItem(cartItem)),
	removeItem: cartItem => dispatch(removeItem(cartItem)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
